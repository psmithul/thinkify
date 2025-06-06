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
            {/* Enhanced Logo Animation */}
            <motion.div 
              className="relative mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                y: [0, -10, 0]
              }}
              transition={{ 
                scale: { duration: 0.8, ease: "easeOut" },
                rotate: { duration: 0.8, ease: "easeOut" },
                y: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }
              }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  boxShadow: [
                    "0 10px 25px rgba(245, 158, 11, 0.3)",
                    "0 15px 35px rgba(249, 115, 22, 0.4)",
                    "0 10px 25px rgba(245, 158, 11, 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <motion.div
                  className="text-white font-bold text-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  T
                </motion.div>
              </motion.div>

              {/* Orbiting Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    x: [0, 30 * Math.cos(2 * Math.PI * i / 3), 0],
                    y: [0, 30 * Math.sin(2 * Math.PI * i / 3), 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2
                  }}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                  }}
                />
              ))}
            </motion.div>

            {/* Company Name with Letter Animation */}
            <motion.div
              className="flex items-center justify-center flex-wrap gap-1 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {"Thinkify".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    opacity: { duration: 0.3, delay: 0.4 + i * 0.05 },
                    y: { duration: 0.3, delay: 0.4 + i * 0.05 },
                    scale: { 
                      duration: 0.6, 
                      delay: 0.8 + i * 0.05,
                      repeat: Infinity,
                      repeatDelay: 2
                    }
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-sm text-gray-600 mb-8 text-center max-w-xs mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Engineering Excellence for Ambitious Startups
              </motion.span>
            </motion.p>

            {/* Progress Animation */}
            <motion.div className="w-full max-w-xs mb-8 mx-auto">
              <motion.div
                className="h-1 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 2.5, 
                    delay: 1.2,
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
              <motion.p
                className="text-center text-sm text-gray-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                Preparing your experience...
              </motion.p>
            </motion.div>

            {/* Bouncing Dots */}
            <div className="flex justify-center space-x-2 mb-8">
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

            {/* Loading Messages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative"
            >
              <motion.p
                className="text-gray-600 text-base font-medium mb-4"
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