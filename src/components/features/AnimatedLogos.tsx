"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Logo {
  id: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  size: 'small' | 'medium';
}

const AnimatedLogos = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logos: Logo[] = [
    {
      id: "techcorp",
      color: "#F59E0B",
      bgColor: "rgba(245, 158, 11, 0.08)",
      size: 'medium',
      icon: (
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-md"></div>
          <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md"></div>
          <div className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-md"></div>
        </div>
      )
    },
    {
      id: "innovatelabs",
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.08)",
      size: 'small',
      icon: (
        <div className="relative w-6 h-6">
          <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute top-0 left-0"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full absolute top-0 right-0"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      )
    },
    {
      id: "dataflow",
      color: "#FB7C3C",
      bgColor: "rgba(251, 124, 60, 0.08)",
      size: 'medium',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path d="M3 6L9 2L15 6L21 2L22 4L16 8L10 4L4 8L3 6Z" fill="#FB7C3C"/>
          <path d="M3 12L9 8L15 12L21 8L22 10L16 14L10 10L4 14L3 12Z" fill="#F97316"/>
          <path d="M3 18L9 14L15 18L21 14L22 16L16 20L10 16L4 20L3 18Z" fill="#FB923C"/>
        </svg>
      )
    },
    {
      id: "cloudsync",
      color: "#3B82F6",
      bgColor: "rgba(59, 130, 246, 0.08)",
      size: 'small',
      icon: (
        <div className="relative w-6 h-5">
          <div className="w-5 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          <div className="w-6 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
      )
    },
    {
      id: "nextgen",
      color: "#EAB308",
      bgColor: "rgba(234, 179, 8, 0.08)",
      size: 'small',
      icon: (
        <div className="relative">
          <div className="w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-yellow-600"></div>
          <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-yellow-500 absolute top-1 left-1/2 transform -translate-x-1/2"></div>
        </div>
      )
    },
    {
      id: "alphaworks",
      color: "#D97706",
      bgColor: "rgba(217, 119, 6, 0.08)",
      size: 'medium',
      icon: (
        <div className="text-orange-600 font-bold text-2xl leading-none">α</div>
      )
    },
    {
      id: "velocityio",
      color: "#14B8A6",
      bgColor: "rgba(20, 184, 166, 0.08)",
      size: 'small',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#14B8A6">
          <path d="M4 6L12 2L20 6L17 12L20 18L12 22L4 18L7 12L4 6Z"/>
        </svg>
      )
    },
    {
      id: "quantum",
      color: "#F97316",
      bgColor: "rgba(249, 115, 22, 0.08)",
      size: 'medium',
      icon: (
        <div className="grid grid-cols-3 gap-0.5">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-yellow-500 to-yellow-600'}`}
            />
          ))}
        </div>
      )
    },
    {
      id: "sparktech",
      color: "#8B5CF6",
      bgColor: "rgba(139, 92, 246, 0.08)",
      size: 'medium',
      icon: (
        <div className="relative">
          <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg transform rotate-45"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      )
    },
    {
      id: "fusionlabs",
      color: "#EC4899",
      bgColor: "rgba(236, 72, 153, 0.08)",
      size: 'small',
      icon: (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full relative">
            <div className="w-2 h-2 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      )
    },
    {
      id: "webflow",
      color: "#6366F1",
      bgColor: "rgba(99, 102, 241, 0.08)",
      size: 'small',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#6366F1">
          <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"/>
          <circle cx="12" cy="12" r="4" fill="white"/>
        </svg>
      )
    },
    {
      id: "digital",
      color: "#059669",
      bgColor: "rgba(5, 150, 105, 0.08)",
      size: 'medium',
      icon: (
        <div className="grid grid-cols-2 gap-1">
          <div className="w-2 h-2 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-sm"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-sm"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-sm"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-sm"></div>
        </div>
      )
    }
  ];

  // Circular arrangement of logos
  const getCircularPosition = (index: number) => {
    const total = logos.length;
    const angle = (index / total) * 2 * Math.PI;
    const radius = 140;
    const centerX = 200;
    const centerY = 160;
    
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  };

  const getSizeClasses = (size: 'small' | 'medium') => {
    switch (size) {
      case 'small':
        return 'w-16 h-16 p-3';
      case 'medium':
        return 'w-20 h-20 p-4';
      default:
        return 'w-18 h-18 p-3';
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-white/90 via-gray-50/60 to-white/80 rounded-2xl">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(156, 163, 175, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 70% 60%, rgba(156, 163, 175, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <AnimatePresence>
        {logos.map((logo, index) => {
          const position = getCircularPosition(index);
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
                x: position.x + (Math.sin((Date.now() / 1000 + index) * 0.5) * 8),
                y: position.y + (Math.cos((Date.now() / 1000 + index) * 0.6) * 6),
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.15, 
                z: 50,
                transition: { duration: 0.2 }
              }}
              style={{ zIndex: logo.size === 'medium' ? 20 : 15 }}
            >
              <motion.div
                className={`${getSizeClasses(logo.size)} rounded-2xl backdrop-blur-sm cursor-pointer group relative overflow-hidden border border-white/60`}
                style={{ 
                  backgroundColor: logo.bgColor,
                  boxShadow: `0 4px 20px ${logo.color}15`
                }}
                whileHover={{
                  backgroundColor: logo.bgColor.replace('0.08', '0.15'),
                  boxShadow: `0 8px 30px ${logo.color}25`,
                  borderColor: `${logo.color}20`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${logo.color}20, transparent 60%)`
                  }}
                />
                
                <motion.div
                  className="flex items-center justify-center h-full relative z-10"
                  whileHover={{ 
                    scale: 1.1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      y: [0, -1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    {logo.icon}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Minimal background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: "rgba(156, 163, 175, 0.3)"
            }}
            initial={{
              x: Math.random() * 400,
              y: Math.random() * 320,
              opacity: 0.3
            }}
            animate={{
              x: [
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
              ],
              y: [
                Math.random() * 320,
                Math.random() * 320,
                Math.random() * 320,
              ],
              opacity: [0.3, 0.6, 0.3]
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
    </div>
  );
};

export default AnimatedLogos; 