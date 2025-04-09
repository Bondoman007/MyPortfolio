import React from "react";
import { Trophy, X, RefreshCw } from "lucide-react";

export function WinnerModal({
  isOpen,
  onClose,
  skills,
  onViewProjects,
  onViewAchievements,
}) {
  if (!isOpen) return null;

  const handleReplay = () => {
    window.location.reload(); // This will refresh the entire page
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">
            Congratulations!
          </h2>
          <p className="text-gray-300">
            You've collected all the skills Kanishk learned!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700/50 p-3 rounded-lg text-center"
            >
              <h3 className="text-white font-semibold mb-1">{skill.name}</h3>
              <p className="text-sm text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={handleReplay}
            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <RefreshCw size={18} />
            Play Again
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={onViewProjects}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={onViewAchievements}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              View Achievements
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
