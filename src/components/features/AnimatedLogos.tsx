"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Logo {
  id: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  vx: number; // velocity x
  vy: number; // velocity y
  size: number;
}

const AnimatedLogos = () => {
  const [mounted, setMounted] = useState(false);
  const [logos, setLogos] = useState<Logo[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  const animate = useCallback(() => {
    setLogos(prevLogos => 
      prevLogos.map(logo => {
        let newX = logo.x + logo.vx;
        let newY = logo.y + logo.vy;
        let newVx = logo.vx;
        let newVy = logo.vy;

        // Get current window dimensions
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Bounce off left and right walls
        if (newX <= 0 || newX >= windowWidth - logo.size) {
          newVx = -newVx * 0.8; // Add some energy loss on bounce
          newX = newX <= 0 ? 0 : windowWidth - logo.size;
        }

        // Bounce off top and bottom walls
        if (newY <= 0 || newY >= windowHeight - logo.size) {
          newVy = -newVy * 0.8; // Add some energy loss on bounce
          newY = newY <= 0 ? 0 : windowHeight - logo.size;
        }

        // Add gentle gravity effect
        newVy += 0.05;

        // Add gentle horizontal drift
        newVx += (Math.random() - 0.5) * 0.02;

        // Limit velocity to prevent too fast movement
        const maxVelocity = 3;
        newVx = Math.max(-maxVelocity, Math.min(maxVelocity, newVx));
        newVy = Math.max(-maxVelocity, Math.min(maxVelocity, newVy));

        // Add some damping to make movement more graceful
        newVx *= 0.995;
        newVy *= 0.995;

        return {
          ...logo,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
        };
      })
    );

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    setMounted(true);
    
    // Logo templates with bigger sizes for full page floating
    const logoTemplates = [
      {
        id: "techcorp",
        color: "#F59E0B",
        bgColor: "rgba(245, 158, 11, 0.12)",
        icon: (
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-md"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-md"></div>
          </div>
        ),
        size: 80
      },
      {
        id: "innovatelabs",
        color: "#10B981",
        bgColor: "rgba(16, 185, 129, 0.12)",
        icon: (
          <div className="relative w-8 h-8">
            <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute top-0 left-0"></div>
            <div className="w-2 h-2 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full absolute top-0 right-0"></div>
            <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </div>
        ),
        size: 70
      },
      {
        id: "dataflow",
        color: "#FB7C3C",
        bgColor: "rgba(251, 124, 60, 0.12)",
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
            <path d="M3 6L9 2L15 6L21 2L22 4L16 8L10 4L4 8L3 6Z" fill="#FB7C3C"/>
            <path d="M3 12L9 8L15 12L21 8L22 10L16 14L10 10L4 14L3 12Z" fill="#F97316"/>
            <path d="M3 18L9 14L15 18L21 14L22 16L16 20L10 16L4 20L3 18Z" fill="#FB923C"/>
          </svg>
        ),
        size: 85
      },
      {
        id: "cloudsync",
        color: "#3B82F6",
        bgColor: "rgba(59, 130, 246, 0.12)",
        icon: (
          <div className="relative w-8 h-6">
            <div className="w-6 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            <div className="w-8 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full absolute top-3 left-1/2 transform -translate-x-1/2"></div>
          </div>
        ),
        size: 65
      },
      {
        id: "nextgen",
        color: "#EAB308",
        bgColor: "rgba(234, 179, 8, 0.12)",
        icon: (
          <div className="relative">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-yellow-600"></div>
            <div className="w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-yellow-500 absolute top-1 left-1/2 transform -translate-x-1/2"></div>
          </div>
        ),
        size: 60
      },
      {
        id: "alphaworks",
        color: "#D97706",
        bgColor: "rgba(217, 119, 6, 0.12)",
        icon: <div className="text-orange-600 font-bold text-3xl leading-none">α</div>,
        size: 75
      },
      {
        id: "velocityio",
        color: "#14B8A6",
        bgColor: "rgba(20, 184, 166, 0.12)",
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#14B8A6">
            <path d="M4 6L12 2L20 6L17 12L20 18L12 22L4 18L7 12L4 6Z"/>
          </svg>
        ),
        size: 68
      },
      {
        id: "quantum",
        color: "#F97316",
        bgColor: "rgba(249, 115, 22, 0.12)",
        icon: (
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-yellow-500 to-yellow-600'}`}
              />
            ))}
          </div>
        ),
        size: 72
      },
      {
        id: "sparktech",
        color: "#8B5CF6",
        bgColor: "rgba(139, 92, 246, 0.12)",
        icon: (
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg transform rotate-45"></div>
            <div className="w-2 h-2 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        ),
        size: 78
      },
      {
        id: "fusionlabs",
        color: "#EC4899",
        bgColor: "rgba(236, 72, 153, 0.12)",
        icon: (
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full relative">
              <div className="w-2 h-2 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        ),
        size: 63
      },
      {
        id: "webflow",
        color: "#6366F1",
        bgColor: "rgba(99, 102, 241, 0.12)",
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#6366F1">
            <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"/>
            <circle cx="12" cy="12" r="5" fill="white"/>
          </svg>
        ),
        size: 66
      },
      {
        id: "digital",
        color: "#059669",
        bgColor: "rgba(5, 150, 105, 0.12)",
        icon: (
          <div className="grid grid-cols-2 gap-1.5">
            <div className="w-3 h-3 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-sm"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-sm"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-sm"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-sm"></div>
          </div>
        ),
        size: 74
      }
    ];
    
    const initializeLogos = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const newLogos: Logo[] = logoTemplates.map((template) => ({
        ...template,
        x: Math.random() * (windowWidth - template.size),
        y: Math.random() * (windowHeight - template.size),
        vx: (Math.random() - 0.5) * 2, // Gentler initial velocity
        vy: (Math.random() - 0.5) * 2,
      }));
      
      setLogos(newLogos);
    };
    
    // Initialize after a short delay to ensure window is ready
    const timer = setTimeout(() => {
      initializeLogos();
      animate();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  useEffect(() => {
    const handleResize = () => {
      // Reinitialize logos on resize to adapt to new window dimensions
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      setLogos(prevLogos =>
        prevLogos.map(logo => ({
          ...logo,
          x: Math.min(logo.x, windowWidth - logo.size),
          y: Math.min(logo.y, windowHeight - logo.size),
        }))
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            className="absolute pointer-events-auto cursor-pointer group"
            style={{
              x: logo.x,
              y: logo.y,
              width: logo.size,
              height: logo.size,
            }}
            whileHover={{ 
              scale: 1.3,
              zIndex: 100,
              transition: { duration: 0.3 }
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="w-full h-full rounded-full backdrop-blur-md border border-white/40 flex items-center justify-center relative overflow-hidden shadow-2xl"
              style={{ 
                backgroundColor: logo.bgColor,
                boxShadow: `0 8px 32px ${logo.color}30, 0 0 0 1px ${logo.color}20`
              }}
              whileHover={{
                backgroundColor: logo.bgColor.replace('0.12', '0.25'),
                boxShadow: `0 12px 48px ${logo.color}50, 0 0 0 2px ${logo.color}40`,
                borderColor: `${logo.color}60`
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Enhanced glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${logo.color}40, transparent 70%)`
                }}
              />
              
              {/* Icon container */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {logo.icon}
              </motion.div>

              {/* Enhanced shine effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
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

              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 opacity-20"
                style={{ borderColor: logo.color }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Enhanced floating particles throughout the page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-yellow-300/20 to-orange-300/20"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogos; 