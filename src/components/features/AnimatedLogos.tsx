"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Logo {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  size: 'small' | 'medium' | 'large';
}

const AnimatedLogos = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logos: Logo[] = [
    {
      id: "techcorp",
      name: "TechCorp",
      color: "#F59E0B",
      bgColor: "rgba(245, 158, 11, 0.15)",
      size: 'large',
      icon: (
        <div className="flex gap-1.5">
          <div className="w-6 h-6 bg-yellow-600 rounded-lg shadow-sm"></div>
          <div className="w-6 h-6 bg-orange-600 rounded-lg shadow-sm"></div>
          <div className="w-6 h-6 bg-yellow-600 rounded-lg shadow-sm"></div>
        </div>
      )
    },
    {
      id: "innovatelabs",
      name: "InnovateLabs",
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.15)",
      size: 'medium',
      icon: (
        <div className="relative w-10 h-10">
          <div className="w-4 h-4 bg-emerald-600 rounded-full absolute top-0 left-0 shadow-sm"></div>
          <div className="w-4 h-4 bg-emerald-500 rounded-full absolute top-0 right-0 shadow-sm"></div>
          <div className="w-4 h-4 bg-emerald-600 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 shadow-sm"></div>
        </div>
      )
    },
    {
      id: "dataflow",
      name: "DataFlow",
      color: "#FB7C3C",
      bgColor: "rgba(251, 124, 60, 0.15)",
      size: 'large',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
          <path d="M2 6L8 2L14 6L20 2L22 4L16 8L10 4L4 8L2 6Z" fill="#FB7C3C"/>
          <path d="M2 12L8 8L14 12L20 8L22 10L16 14L10 10L4 14L2 12Z" fill="#F97316"/>
          <path d="M2 18L8 14L14 18L20 14L22 16L16 20L10 16L4 20L2 18Z" fill="#FB923C"/>
        </svg>
      )
    },
    {
      id: "cloudsync",
      name: "CloudSync",
      color: "#3B82F6",
      bgColor: "rgba(59, 130, 246, 0.15)",
      size: 'medium',
      icon: (
        <div className="relative w-10 h-8">
          <div className="w-8 h-4 bg-blue-600 rounded-full shadow-sm"></div>
          <div className="w-10 h-3 bg-blue-500 rounded-full absolute top-3 left-1/2 transform -translate-x-1/2 shadow-sm"></div>
        </div>
      )
    },
    {
      id: "nextgen",
      name: "NextGen",
      color: "#EAB308",
      bgColor: "rgba(234, 179, 8, 0.15)",
      size: 'small',
      icon: (
        <div className="relative">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-yellow-600 shadow-sm"></div>
          <div className="w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-yellow-500 absolute top-1 left-1/2 transform -translate-x-1/2"></div>
        </div>
      )
    },
    {
      id: "alphaworks",
      name: "AlphaWorks",
      color: "#D97706",
      bgColor: "rgba(217, 119, 6, 0.15)",
      size: 'large',
      icon: (
        <div className="text-orange-600 font-bold text-3xl leading-none">α</div>
      )
    },
    {
      id: "velocityio",
      name: "VelocityIO",
      color: "#14B8A6",
      bgColor: "rgba(20, 184, 166, 0.15)",
      size: 'medium',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#14B8A6">
          <path d="M4 6L12 2L20 6L16 12L20 18L12 22L4 18L8 12L4 6Z"/>
        </svg>
      )
    },
    {
      id: "quantum",
      name: "Quantum",
      color: "#F97316",
      bgColor: "rgba(249, 115, 22, 0.15)",
      size: 'medium',
      icon: (
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full shadow-sm ${i % 2 === 0 ? 'bg-orange-600' : 'bg-yellow-500'}`}
            />
          ))}
        </div>
      )
    },
    {
      id: "sparktech",
      name: "SparkTech",
      color: "#8B5CF6",
      bgColor: "rgba(139, 92, 246, 0.15)",
      size: 'large',
      icon: (
        <div className="relative">
          <div className="w-8 h-8 bg-purple-600 rounded-lg shadow-sm transform rotate-45"></div>
          <div className="w-4 h-4 bg-purple-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      )
    },
    {
      id: "fusionlabs",
      name: "FusionLabs",
      color: "#EC4899",
      bgColor: "rgba(236, 72, 153, 0.15)",
      size: 'small',
      icon: (
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 bg-pink-600 rounded-full shadow-sm relative">
            <div className="w-3 h-3 bg-pink-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      )
    }
  ];

  const getRandomPosition = () => ({
    x: Math.random() * 450,
    y: Math.random() * 350,
  });

  const getRandomDelay = () => Math.random() * 3;

  const getSizeClasses = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'small':
        return 'w-24 h-24 p-4';
      case 'medium':
        return 'w-32 h-32 p-5';
      case 'large':
        return 'w-40 h-40 p-6';
      default:
        return 'w-32 h-32 p-5';
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence>
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            className="absolute"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: getRandomPosition().x,
              y: getRandomPosition().y,
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: [
                getRandomPosition().x,
                getRandomPosition().x + 60,
                getRandomPosition().x - 40,
                getRandomPosition().x + 30,
                getRandomPosition().x
              ],
              y: [
                getRandomPosition().y,
                getRandomPosition().y - 50,
                getRandomPosition().y + 40,
                getRandomPosition().y - 25,
                getRandomPosition().y
              ],
              rotate: [0, 8, -8, 4, 0]
            }}
            transition={{
              duration: 12 + index * 2,
              delay: getRandomDelay(),
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.3, 
              rotate: 15,
              z: 50,
              transition: { duration: 0.3 }
            }}
            style={{ zIndex: logo.size === 'large' ? 20 : logo.size === 'medium' ? 15 : 10 }}
          >
            <motion.div
              className={`${getSizeClasses(logo.size)} rounded-3xl backdrop-blur-md cursor-pointer group relative overflow-hidden border-2 border-white/20 shadow-2xl`}
              style={{ backgroundColor: logo.bgColor }}
              whileHover={{
                backgroundColor: logo.bgColor.replace('0.15', '0.3'),
                boxShadow: `0 20px 60px ${logo.color}40, 0 0 0 2px ${logo.color}30`
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Enhanced glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${logo.color}30, transparent 70%)`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, transparent 30%, ${logo.color}20 50%, transparent 70%)`
                }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div
                className="flex flex-col items-center justify-center h-full relative z-10"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="mb-3 relative"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {logo.icon}
                  
                  {/* Icon glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle, ${logo.color}40, transparent 60%)`
                    }}
                    animate={{
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                </motion.div>
                
                <motion.span 
                  className={`font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 ${
                    logo.size === 'large' ? 'text-lg' : logo.size === 'medium' ? 'text-base' : 'text-sm'
                  }`}
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </motion.span>

                {/* Company badge */}
                <motion.div
                  className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: -45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    style={{ backgroundColor: logo.color }}
                  >
                    ✓
                  </div>
                </motion.div>

                {/* Sparkle effects */}
                <motion.div
                  className="absolute top-2 right-2 text-sm opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity
                  }}
                >
                  ✨
                </motion.div>
                
                <motion.div
                  className="absolute bottom-2 left-2 text-sm opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [360, 0],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.5
                  }}
                >
                  🌟
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Enhanced background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              background: i % 4 === 0 
                ? "linear-gradient(45deg, #F59E0B, #F97316)" 
                : i % 4 === 1 
                ? "linear-gradient(45deg, #EAB308, #F59E0B)"
                : i % 4 === 2
                ? "linear-gradient(45deg, #FB7C3C, #F97316)"
                : "linear-gradient(45deg, #FBBF24, #F59E0B)"
            }}
            initial={{
              x: Math.random() * 600,
              y: Math.random() * 500,
              opacity: 0.3
            }}
            animate={{
              x: [
                Math.random() * 600,
                Math.random() * 600,
                Math.random() * 600,
              ],
              y: [
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
              ],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Floating text with enhanced styling */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <motion.h3 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 relative"
          animate={{ 
            backgroundPosition: ["0%", "100%", "0%"]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: "linear-gradient(45deg, #F59E0B, #F97316, #EAB308, #FB923C, #F59E0B)",
            backgroundSize: "400% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 30px rgba(245, 158, 11, 0.4)",
                "0 0 40px rgba(249, 115, 22, 0.5)",
                "0 0 30px rgba(245, 158, 11, 0.4)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          >
            Trusted Partners
          </motion.span>
          
          {/* Enhanced decorative elements */}
          <motion.div
            className="absolute -top-3 -left-3 text-2xl"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
          >
            ⭐
          </motion.div>
          <motion.div
            className="absolute -top-3 -right-3 text-2xl"
            animate={{
              rotate: [360, 0],
              scale: [0.8, 1.3, 0.8]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2.5
            }}
          >
            🌟
          </motion.div>
          <motion.div
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-xl"
            animate={{
              y: [0, -5, 0],
              scale: [0.9, 1.2, 0.9]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1
            }}
          >
            ✨
          </motion.div>
        </motion.h3>
        
        <motion.div 
          className="text-base md:text-lg text-gray-600 flex items-center justify-center gap-3"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-xl"
          >
            🚀
          </motion.span>
          <span className="font-medium">Companies that trust our expertise</span>
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="text-xl"
          >
            💫
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedLogos; 