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
      bgColor: "rgba(245, 158, 11, 0.1)",
      size: 'large',
      icon: (
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg"></div>
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg"></div>
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg"></div>
        </div>
      )
    },
    {
      id: "innovatelabs",
      name: "InnovateLabs",
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.1)",
      size: 'medium',
      icon: (
        <div className="relative w-12 h-12">
          <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute top-0 left-0 shadow-lg"></div>
          <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full absolute top-0 right-0 shadow-lg"></div>
          <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
        </div>
      )
    },
    {
      id: "dataflow",
      name: "DataFlow",
      color: "#FB7C3C",
      bgColor: "rgba(251, 124, 60, 0.1)",
      size: 'large',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12" fill="none">
          <path d="M4 8L12 3L20 8L28 3L30 6L22 11L14 6L6 11L4 8Z" fill="#FB7C3C" stroke="#EA580C" strokeWidth="1"/>
          <path d="M4 16L12 11L20 16L28 11L30 14L22 19L14 14L6 19L4 16Z" fill="#F97316" stroke="#EA580C" strokeWidth="1"/>
          <path d="M4 24L12 19L20 24L28 19L30 22L22 27L14 22L6 27L4 24Z" fill="#FB923C" stroke="#EA580C" strokeWidth="1"/>
        </svg>
      )
    },
    {
      id: "cloudsync",
      name: "CloudSync",
      color: "#3B82F6",
      bgColor: "rgba(59, 130, 246, 0.1)",
      size: 'medium',
      icon: (
        <div className="relative w-12 h-10">
          <div className="w-10 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"></div>
          <div className="w-12 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
        </div>
      )
    },
    {
      id: "nextgen",
      name: "NextGen",
      color: "#EAB308",
      bgColor: "rgba(234, 179, 8, 0.1)",
      size: 'small',
      icon: (
        <div className="relative">
          <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-yellow-600 shadow-lg filter drop-shadow-lg"></div>
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-yellow-500 absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
      )
    },
    {
      id: "alphaworks",
      name: "AlphaWorks",
      color: "#D97706",
      bgColor: "rgba(217, 119, 6, 0.1)",
      size: 'large',
      icon: (
        <div className="text-orange-600 font-bold text-5xl leading-none bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent filter drop-shadow-lg">α</div>
      )
    },
    {
      id: "velocityio",
      name: "VelocityIO",
      color: "#14B8A6",
      bgColor: "rgba(20, 184, 166, 0.1)",
      size: 'medium',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12" fill="#14B8A6" stroke="#0F766E" strokeWidth="1">
          <path d="M6 8L16 3L26 8L22 16L26 24L16 29L6 24L10 16L6 8Z" filter="drop-shadow(0 4px 6px rgba(20, 184, 166, 0.3))"/>
        </svg>
      )
    },
    {
      id: "quantum",
      name: "Quantum",
      color: "#F97316",
      bgColor: "rgba(249, 115, 22, 0.1)",
      size: 'medium',
      icon: (
        <div className="grid grid-cols-3 gap-1.5">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`w-3 h-3 rounded-full shadow-lg ${i % 2 === 0 ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-yellow-500 to-yellow-600'}`}
            />
          ))}
        </div>
      )
    },
    {
      id: "sparktech",
      name: "SparkTech",
      color: "#8B5CF6",
      bgColor: "rgba(139, 92, 246, 0.1)",
      size: 'large',
      icon: (
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg transform rotate-45"></div>
          <div className="w-5 h-5 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
        </div>
      )
    },
    {
      id: "fusionlabs",
      name: "FusionLabs",
      color: "#EC4899",
      bgColor: "rgba(236, 72, 153, 0.1)",
      size: 'small',
      icon: (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full shadow-lg relative">
            <div className="w-4 h-4 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      )
    }
  ];

  // Fixed grid positions for better visibility and organization
  const getGridPosition = (index: number) => {
    const cols = 4;
    const rows = 3;
    const col = index % cols;
    const row = Math.floor(index / cols);
    const spacing = 120;
    const offsetX = 50;
    const offsetY = 50;
    
    return {
      x: offsetX + col * spacing,
      y: offsetY + row * spacing,
    };
  };

  const getSizeClasses = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'small':
        return 'w-28 h-28 p-5';
      case 'medium':
        return 'w-36 h-36 p-6';
      case 'large':
        return 'w-44 h-44 p-7';
      default:
        return 'w-36 h-36 p-6';
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white/80 via-yellow-50/60 to-orange-50/60 rounded-3xl shadow-inner">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <AnimatePresence>
        {logos.map((logo, index) => {
          const position = getGridPosition(index);
          return (
            <motion.div
              key={logo.id}
              className="absolute"
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: position.x,
                y: position.y,
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: position.x + (Math.sin((Date.now() / 1000 + index) * 0.3) * 15),
                y: position.y + (Math.cos((Date.now() / 1000 + index) * 0.4) * 10),
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 10,
                z: 100,
                transition: { duration: 0.3 }
              }}
              style={{ zIndex: logo.size === 'large' ? 30 : logo.size === 'medium' ? 20 : 15 }}
            >
              <motion.div
                className={`${getSizeClasses(logo.size)} rounded-3xl backdrop-blur-md cursor-pointer group relative overflow-hidden shadow-xl border-2 border-white/40`}
                style={{ 
                  backgroundColor: logo.bgColor,
                  boxShadow: `0 10px 40px ${logo.color}20, 0 0 0 1px ${logo.color}10`
                }}
                whileHover={{
                  backgroundColor: logo.bgColor.replace('0.1', '0.2'),
                  boxShadow: `0 20px 60px ${logo.color}40, 0 0 0 2px ${logo.color}30`,
                  borderColor: `${logo.color}40`
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Enhanced glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${logo.color}40, transparent 70%)`
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, transparent 30%, ${logo.color}30 50%, transparent 70%)`
                  }}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div
                  className="flex flex-col items-center justify-center h-full relative z-10"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -3, 3, 0]
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="mb-4 relative"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    {logo.icon}
                    
                    {/* Icon glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle, ${logo.color}60, transparent 60%)`
                      }}
                      animate={{
                        scale: [1, 1.4, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                  
                  <motion.span 
                    className={`font-bold text-center transition-opacity duration-300 relative z-10 ${
                      logo.size === 'large' ? 'text-xl' : logo.size === 'medium' ? 'text-lg' : 'text-base'
                    }`}
                    style={{ color: logo.color }}
                    initial={{ opacity: 0.7, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {logo.name}
                  </motion.span>

                  {/* Company verification badge */}
                  <motion.div
                    className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-white"
                      style={{ backgroundColor: logo.color }}
                    >
                      ✓
                    </div>
                  </motion.div>

                  {/* Enhanced sparkle effects */}
                  <motion.div
                    className="absolute top-3 right-3 text-lg opacity-0 group-hover:opacity-100"
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.3, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    ✨
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-3 left-3 text-lg opacity-0 group-hover:opacity-100"
                    animate={{
                      rotate: [360, 0],
                      scale: [0.8, 1.3, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    🌟
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Enhanced background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              background: i % 3 === 0 
                ? "linear-gradient(45deg, #F59E0B, #F97316)" 
                : i % 3 === 1 
                ? "linear-gradient(45deg, #EAB308, #F59E0B)"
                : "linear-gradient(45deg, #FB7C3C, #F97316)"
            }}
            initial={{
              x: Math.random() * 600,
              y: Math.random() * 400,
              opacity: 0.4
            }}
            animate={{
              x: [
                Math.random() * 600,
                Math.random() * 600,
                Math.random() * 600,
              ],
              y: [
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
              ],
              scale: [0.5, 2, 0.5],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 6 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Enhanced floating text */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.95, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <motion.h3 
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative filter drop-shadow-lg"
          animate={{ 
            backgroundPosition: ["0%", "100%", "0%"]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: "linear-gradient(45deg, #F59E0B, #F97316, #EAB308, #FB923C, #D97706, #F59E0B)",
            backgroundSize: "400% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 40px rgba(245, 158, 11, 0.3)"
          }}
        >
          <motion.span
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(245, 158, 11, 0.4))",
                "drop-shadow(0 0 30px rgba(249, 115, 22, 0.5))",
                "drop-shadow(0 0 20px rgba(245, 158, 11, 0.4))"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            Trusted Partners
          </motion.span>
          
          {/* Enhanced decorative elements */}
          <motion.div
            className="absolute -top-4 -left-4 text-3xl"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.4, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          >
            ⭐
          </motion.div>
          <motion.div
            className="absolute -top-4 -right-4 text-3xl"
            animate={{
              rotate: [360, 0],
              scale: [0.8, 1.4, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2
            }}
          >
            🌟
          </motion.div>
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-2xl"
            animate={{
              y: [0, -8, 0],
              scale: [0.9, 1.3, 0.9]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1
            }}
          >
            ✨
          </motion.div>
        </motion.h3>
        
        <motion.div 
          className="text-lg md:text-xl text-gray-700 flex items-center justify-center gap-4 font-semibold"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl"
          >
            🚀
          </motion.span>
          <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Companies that trust our expertise
          </span>
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-2xl"
          >
            💫
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedLogos; 