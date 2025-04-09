import { Scene } from "phaser";

export class GameScene extends Scene {
  constructor() {
    super({ key: "GameScene" });
    this.platforms = null;
    this.player = null;
    this.skills = null;
    this.cursors = null;
    this.score = 0;
    this.scoreText = null;
    this.totalSkills = 9; // Total number of collectible skills
    this.collectedSkills = [];
  }

  create() {
    // Add background with gradient
    const gradient = this.add.graphics();
    gradient.fillGradientStyle(0x1a1a2e, 0x1a1a2e, 0x16213e, 0x16213e, 1);
    gradient.fillRect(0, 0, 800, 600);

    // Create platforms
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, "ground").setScale(2).refreshBody();
    this.platforms.create(
      600,
      400,

      "ground"
    );
    // this.platforms.create(100, 300, "ground");
    // this.platforms.create(750, 220, "ground");
    this.platforms.create(90, 250, "ground");
    this.platforms.create(750, 150, "ground");

    // Create player
    this.player = this.physics.add.sprite(100, 450, "character");
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    // Player animations
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("character", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "character", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("character", {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Create skills
    this.skills = this.physics.add.group();
    this.createSkill(250, 0, "react", "React", "Frontend Development");
    this.createSkill(380, 0, "node", "Node.js", "Backend Development");
    this.createSkill(700, 0, "mongodb", "MongoDB", "Database");
    this.createSkill(150, 0, "express", "Express.js", "Backend Framework");
    this.createSkill(460, 0, "cpp", "C++", "DSA & System Programming");
    this.createSkill(600, 0, "nginx", "Nginx", "Web Server");
    this.createSkill(50, 0, "redux", "Redux", "State Management");
    // this.createSkill(300, 0, "aws", "AWS EC2", "Cloud Computing");
    this.createSkill(
      510,
      0,
      "socketio",
      "Socket.IO",
      "Real-time Communication"
    );
    this.createSkill(760, 0, "tailwind", "Tailwind CSS", "Styling Framework");

    // Set up collisions
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.skills, this.platforms);
    this.physics.add.overlap(
      this.player,
      this.skills,
      this.collectSkill,
      null,
      this
    );

    // Score text with modern styling
    this.scoreText = this.add.text(16, 16, "Skills: 0/" + this.totalSkills, {
      fontSize: "32px",
      fontFamily: "Arial",
      color: "#ffffff",
      backgroundColor: "#00000066",
      padding: { x: 10, y: 5 },
      borderRadius: 5,
    });

    // Controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (!this.cursors || !this.player) return;

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  createSkill(x, y, key, name, description) {
    const skill = this.skills.create(x, y, key);
    skill.setBounceY(0.4);
    skill.setScale(0.5);
    skill.setData("name", name);
    skill.setData("description", description);
  }

  collectSkill(player, skillObject) {
    skillObject.disableBody(true, true);

    this.score += 1;
    this.scoreText.setText("Skills: " + this.score + "/" + this.totalSkills);

    const skillName = skillObject.getData("name");
    const skillDesc = skillObject.getData("description");

    this.collectedSkills.push({ name: skillName, description: skillDesc });

    const messageContainer = this.add.container(400, 300);

    const background = this.add.graphics();
    background.fillStyle(0x000000, 0.8);
    background.fillRoundedRect(-150, -40, 300, 80, 10);

    const nameText = this.add
      .text(0, -20, skillName, {
        fontSize: "24px",
        fontFamily: "Arial",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    const descText = this.add
      .text(0, 10, skillDesc, {
        fontSize: "16px",
        fontFamily: "Arial",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    messageContainer.add([background, nameText, descText]);

    this.tweens.add({
      targets: messageContainer,
      alpha: 0,
      y: 250,
      duration: 2000,
      ease: "Power2",
      onComplete: () => {
        messageContainer.destroy();
        if (this.score === this.totalSkills) {
          this.showWinnerMessage();
        }
      },
    });
  }

  showWinnerMessage() {
    // Create a custom event that React can listen to
    const event = new CustomEvent("gameComplete", {
      detail: { skills: this.collectedSkills },
    });
    window.dispatchEvent(event);
  }
}
