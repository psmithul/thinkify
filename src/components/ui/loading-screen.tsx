"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-yellow-50 via-white to-orange-50 flex items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 70%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.05) 0%, transparent 50%)`
            }}></div>
            
            {/* Floating Elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 60 + 20,
                  height: Math.random() * 60 + 20,
                  background: i % 3 === 0 
                    ? "linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(249, 115, 22, 0.1))" 
                    : i % 3 === 1 
                    ? "linear-gradient(45deg, rgba(234, 179, 8, 0.1), rgba(245, 158, 11, 0.1))"
                    : "linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1))",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </div>

          <div className="text-center relative z-10">
            {/* Main Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 relative"
            >
              {/* Glowing Background */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-20"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(245, 158, 11, 0.3), transparent 70%)",
                    "radial-gradient(circle, rgba(249, 115, 22, 0.3), transparent 70%)",
                    "radial-gradient(circle, rgba(245, 158, 11, 0.3), transparent 70%)"
                  ],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold relative z-10"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: "linear-gradient(45deg, #F59E0B, #F97316, #EAB308, #FB923C, #F59E0B)",
                  backgroundSize: "300% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(245, 158, 11, 0.3))"
                }}
              >
                ⚡ Thinkify Labs
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-600 text-lg mt-4 font-medium"
              >
                Engineering Excellence for Startups
              </motion.p>
            </motion.div>

            {/* Enhanced Loading Animation */}
            <div className="mb-8 relative">
              {/* Circular Progress Ring */}
              <motion.div className="relative w-24 h-24 mx-auto mb-6">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(245, 158, 11, 0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="50%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#EAB308" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    T
                  </div>
                </motion.div>
              </motion.div>

              {/* Bouncing Dots */}
              <div className="flex justify-center space-x-2">
                {[0, 1, 2, 3, 4].map((index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: index % 2 === 0 
                        ? "linear-gradient(45deg, #F59E0B, #F97316)" 
                        : "linear-gradient(45deg, #EAB308, #FB923C)"
                    }}
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: index * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Loading Messages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative"
            >
              <motion.p
                className="text-gray-600 text-base font-medium mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Crafting excellence...
              </motion.p>
              
              {/* Progress Indicators */}
              <motion.div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                <motion.div 
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-yellow-500"
                  >
                    ⚙️
                  </motion.div>
                  <span>Loading talent...</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-orange-500"
                  >
                    🚀
                  </motion.div>
                  <span>Preparing innovation...</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Wave Animation */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <div className="flex space-x-1">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-yellow-400 to-orange-400 rounded-full"
                    animate={{
                      height: [8, 24, 8],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <motion.div
            className="absolute top-10 left-10"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-16 h-16 border-2 border-yellow-200 rounded-full opacity-30"></div>
          </motion.div>
          
          <motion.div
            className="absolute top-10 right-10"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-12 h-12 border-2 border-orange-200 rounded-full opacity-20"></div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 left-10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-25"></div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 right-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-20"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 