import React from "react";
import { X, Github, ExternalLink } from "lucide-react";

const Achievements = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const achievements = [
    {
      id: 1,
      title: "Eureka Challenge 2.0",
      description: "Runner-up among 22,000+ participants",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#f59e0b"
          />
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />
        </svg>
      ),
      badge: "Elite Achievement",
      badgeColor: "bg-gradient-to-r from-amber-500 to-amber-600",
    },
    {
      id: 2,
      title: "HackerRank Problem Solving",
      description: "Gold badge - 5 stars",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="10" fill="#fbbf24" />
          <path
            d="M12 8L13.5 11.5L17 12L14 14L15 17.5L12 15.5L9 17.5L10 14L7 12L10.5 11.5L12 8Z"
            fill="#1f2937"
          />
        </svg>
      ),
      badge: "Gold Level",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-yellow-500",
    },
    {
      id: 3,
      title: "LeetCode",
      description: "1726 rating | 3-star coder",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M16 12L12 8L8 12L12 16L16 12Z" fill="#9ca3af" />
          <path
            d="M12 16L8 12L12 8L16 12L12 16Z"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
          />
        </svg>
      ),
      badge: "Silver Tier",
      badgeColor: "bg-gradient-to-r from-gray-300 to-gray-400",
    },
    {
      id: 4,
      title: "C++ Expert",
      description: "5-star rating on HackerRank",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M8 14L10 12L8 10L10 8L12 10L14 8L16 10L14 12L16 14L14 16L12 14L10 16L8 14Z"
            fill="#3b82f6"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        </svg>
      ),
      badge: "Expert Level",
      badgeColor: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-gray-700"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 mb-4 relative inline-block">
            <span className="relative z-10">Achievements & Honors</span>
            <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-purple-500 opacity-75 -z-0 transform translate-y-1"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Highlights of my competitive programming journey and technical
            accomplishments
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-blue-400"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50 mx-auto">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {achievement.description}
                </p>
                <div
                  className={`${achievement.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full  mx-auto flex justify-center`}
                >
                  {achievement.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Competitive Coding Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">22K+</div>
              <div className="text-blue-100">Participants Outperformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5★</div>
              <div className="text-blue-100">HackerRank Problem Solving</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1726</div>
              <div className="text-blue-100">LeetCode Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3★</div>
              <div className="text-blue-100">LeetCode Badge</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
