import { Scene } from "phaser";

export class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    // Load character sprite from a more reliable CDN
    this.load.spritesheet(
      "character",
      "https://cdn.jsdelivr.net/gh/photonstorm/phaser3-examples@master/public/assets/sprites/dude.png",
      { frameWidth: 32, frameHeight: 48 }
    );

    // Load platform tiles from a more reliable CDN
    this.load.image(
      "ground",
      "https://cdn.jsdelivr.net/gh/photonstorm/phaser3-examples@master/public/assets/sprites/platform.png"
    );

    // Load skill icons from raw.githubusercontent (these URLs are already working)
    this.load.image("react", "https://img.icons8.com/office/160/react.png");
    this.load.image("node", "https://img.icons8.com/color/144/nodejs.png");
    this.load.image(
      "mongodb",
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"
    );
    this.load.image("express", "https://img.icons8.com/ios/150/express-js.png");
    this.load.image(
      "cpp",
      "https://img.icons8.com/ios-filled/100/c-plus-plus-logo.png"
    );
    this.load.image("nginx", "https://img.icons8.com/color/144/nginx.png");
    this.load.image("redux", "https://img.icons8.com/ios/150/redux.png");
    this.load.image("socketio", "/Socket.io.png");
    this.load.image(
      "tailwind",
      "https://img.icons8.com/color/144/tailwindcss.png"
    );

    // Simple loading bar (using a built-in Phaser graphic instead of external image)

    this.load.on("complete", () => {
      if (this.graphics) {
        this.graphics.destroy();
      }
    });
  }

  create() {
    this.scene.start("GameScene");
  }
}
