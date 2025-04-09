import React, { useState, useEffect } from "react";
import { Game } from "./components/Game";
import {
  GithubIcon,
  GamepadIcon,
  FolderIcon,
  FileTextIcon as DocumentIcon, // You can use either this name
  FileTextIcon, // Or this name - choose one to avoid duplication
  Trophy as TrophyIcon,
  Linkedin as LinkedinIcon,
} from "lucide-react";

import { WinnerModal } from "./components/WinnerModal";
import { ProjectsModal } from "./components/ProjectsModal";

import Achievements from "./components/Achievement";
// Import local resume file - make sure to place your resume.pdf in the public folder
const resumeFile = "/Kanishk_Shrivastava_resume.pdf";

const projects = [
  {
    name: "DeVibe",
    preview: "/devibe.gif",
    description:
      "Developed a full-stack platform enabling developers to connect, match, and chat through a swipe-based interface like tinder",
    technologies: [
      "React",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Redux",
      "AWS EC2",
      "Nginx",
      "Express.js",
    ],
    link: "https://devibe.life/",
    github: "https://github.com/Bondoman007/DeVibe-frontend",
  },
  {
    name: "MyMovieList",
    preview: "/mymovielist.gif",
    description:
      "Browse a vast collection of movies and TV shows, watch trailers, and explore content by genre",
    technologies: ["React", "Express.js", "MongoDB", "Redux", "Node.js"],
    link: "/",
    github: "https://github.com/Bondoman007/myMovieList",
  },
  {
    name: "DiscordTextEditor",
    preview: "/discord.gif",
    description:
      "Built a Discord Text Editor app enabling rich text formatting, real-time previews, and seamless message styling for Discord chats.",
    technologies: ["React", "Redux", "Vercel", "TailwindCSS"],
    link: "https://discord-text-editor-coral.vercel.app/",
    github: "https://github.com/Bondoman007/DiscordTextEditor/tree/main",
  },
  {
    name: "GeoProfiles",
    preview: "/maps.gif",
    description:
      "Developed GeoProfiles,dynamic Google Maps integration for real-time user location mapping. Built an admin dashboard with CRUD, search/filter, responsive UI, and robust error handling",
    technologies: [
      "React",
      "Google Maps Api",
      "Vercel",
      "Redux",
      "TailwindCSS",
    ],
    link: "https://profile-management-nine.vercel.app/",
    github: "https://github.com/Bondoman007/profileManagement",
  },
  {
    name: "SimpliTrain",
    preview: "/profile.gif",
    description:
      "Designed and implemented a scalable profile management microservice for SimpliTrain-backend, featuring RESTful APIs to add and update education, work experience, personal details, address, skills, interests, and preferred language, with robust validation, modular routing, and secure authentication. FRONTEND IS UPCOMING",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "TailwindCSS",
    ],
    link: "/",
    github: "https://github.com/Bondoman007/SimpliTrain-backend",
  },
  {
    name: "PersonalBlog",
    preview: "/Blog.gif",
    description:
      "Created a personal blog page with a clean, responsive UI to share articles and insights, featuring dynamic content rendering, markdown support, and categorized post management with smooth navigation and SEO-friendly design",
    technologies: ["React", "Redux", "TailwindCSS"],
    link: "/",
    github: "https://github.com/Bondoman007/Personal-blog-page",
  },
];

function App() {
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [collectedSkills, setCollectedSkills] = useState([]);
  const [showAchievements, setShowAchievements] = useState(false);
  useEffect(() => {
    const handleGameComplete = (event) => {
      setCollectedSkills(event.detail.skills);
      setShowWinnerModal(true);
    };

    window.addEventListener("gameComplete", handleGameComplete);
    return () => window.removeEventListener("gameComplete", handleGameComplete);
  }, []);

  const handleDownloadResume = () => {
    try {
      const link = document.createElement("a");
      link.href = resumeFile;
      link.download = "Kanishk_Shrivastava_resume.pdf"; // Change to your name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Failed to download resume. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className=" bg-gradient-to-b from-gray-900 to-gray-800">
        <header className="bg-gray-800/50 backdrop-blur-sm text-white p-6 sticky top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <GamepadIcon size={28} className="text-indigo-400" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio Adventure
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {/* Achievements Button */}
              <button
                onClick={() => setShowAchievements(true)} // You'll need to define this state
                className="flex items-center  text-gray-300 hover:text-white transition-colors"
                aria-label="View Achievements"
              >
                <TrophyIcon size={24} />
                <span className="hidden sm:inline"></span>
              </button>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/kanishk-shrivastava-134290244/" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>

              {/* Existing Buttons */}
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 py-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text hover:bg-indigo-700 rounded-md transition-colors text-white"
                aria-label="Download Resume"
              >
                <FileTextIcon size={24} />
                {/* <span>Resume</span> */}
              </button>
              <button
                onClick={() => setShowProjectsModal(true)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                aria-label="View Projects"
              >
                <FolderIcon size={24} />
              </button>
              <a
                href="https://github.com/Bondoman007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={28} />
              </a>
            </div>
          </div>
        </header>
      </div>

      <main className="container p-6">
        {/* New Introduction Section */}
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-md rounded-lg p-6 border border-gray-700 shadow-xl overflow-hidden">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Hi, I'm <span className="text-white">Kanishk</span>
              </h1>
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-300 mb-4">
                  Welcome to my interactive portfolio adventure! I'm a
                  passionate developer who loves building innovative solutions
                  and pushing the boundaries of technology.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-indigo-300 border border-indigo-400/50">
                    Problem Solver
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-purple-300 border border-purple-400/50">
                    Creative Coder
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-300 border border-blue-400/50">
                    Tech Enthusiast
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Container */}
        <div className="bg-gray-800/50 backdrop-blur rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <Game />
        </div>

        {/* How to Play Section */}
        <div className="mt-8 text-center space-y-4">
          <div className="inline-block bg-gray-800/50 backdrop-blur rounded-lg p-4 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-3">
              How to Play
            </h2>
            <div className="text-gray-300 space-y-2">
              <p>
                Use <span className="text-indigo-400">←→</span> arrow keys to
                move
              </p>
              <p>
                Press <span className="text-indigo-400">↑</span> to jump
              </p>
              <p>Collect all skills to unlock the projects showcase!</p>
            </div>
          </div>
        </div>
      </main>

      <WinnerModal
        isOpen={showWinnerModal}
        onClose={() => setShowWinnerModal(false)}
        skills={collectedSkills}
        onViewProjects={() => {
          setShowWinnerModal(false);
          setShowProjectsModal(true);
        }}
        onViewAchievements={() => {
          setShowWinnerModal(false);
          setShowAchievements(true);
        }}
      />

      <ProjectsModal
        isOpen={showProjectsModal}
        onClose={() => setShowProjectsModal(false)}
        projects={projects}
      />
      <Achievements
        isOpen={showAchievements}
        onClose={() => setShowAchievements(false)}
      />
    </div>
  );
}

export default App;
