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
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const animate = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    
    setLogos(prevLogos => 
      prevLogos.map(logo => {
        let newX = logo.x + logo.vx;
        let newY = logo.y + logo.vy;
        let newVx = logo.vx;
        let newVy = logo.vy;

        // Bounce off left and right walls
        if (newX <= 0 || newX >= container.width - logo.size) {
          newVx = -newVx;
          newX = newX <= 0 ? 0 : container.width - logo.size;
        }

        // Bounce off top and bottom walls
        if (newY <= 0 || newY >= container.height - logo.size) {
          newVy = -newVy;
          newY = newY <= 0 ? 0 : container.height - logo.size;
        }

        // Add some gravity effect
        newVy += 0.1;

        // Limit velocity to prevent too fast movement
        const maxVelocity = 6;
        newVx = Math.max(-maxVelocity, Math.min(maxVelocity, newVx));
        newVy = Math.max(-maxVelocity, Math.min(maxVelocity, newVy));

        // Add some damping to make bouncing more realistic
        newVx *= 0.99;
        newVy *= 0.99;

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
    
    // Logo templates moved inside useEffect
    const logoTemplates = [
      {
        id: "techcorp",
        color: "#F59E0B",
        bgColor: "rgba(245, 158, 11, 0.15)",
        icon: (
          <div className="flex gap-0.5">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-sm"></div>
          </div>
        ),
        size: 50
      },
      {
        id: "innovatelabs",
        color: "#10B981",
        bgColor: "rgba(16, 185, 129, 0.15)",
        icon: (
          <div className="relative w-4 h-4">
            <div className="w-1 h-1 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute top-0 left-0"></div>
            <div className="w-1 h-1 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full absolute top-0 right-0"></div>
            <div className="w-1 h-1 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </div>
        ),
        size: 45
      },
      {
        id: "dataflow",
        color: "#FB7C3C",
        bgColor: "rgba(251, 124, 60, 0.15)",
        icon: (
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
            <path d="M2 4L6 1L10 4L14 1L15 3L11 6L7 3L3 6L2 4Z" fill="#FB7C3C"/>
            <path d="M2 8L6 5L10 8L14 5L15 7L11 10L7 7L3 10L2 8Z" fill="#F97316"/>
            <path d="M2 12L6 9L10 12L14 9L15 11L11 14L7 11L3 14L2 12Z" fill="#FB923C"/>
          </svg>
        ),
        size: 55
      },
      {
        id: "cloudsync",
        color: "#3B82F6",
        bgColor: "rgba(59, 130, 246, 0.15)",
        icon: (
          <div className="relative w-4 h-3">
            <div className="w-3 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full absolute top-1.5 left-1/2 transform -translate-x-1/2"></div>
          </div>
        ),
        size: 40
      },
      {
        id: "nextgen",
        color: "#EAB308",
        bgColor: "rgba(234, 179, 8, 0.15)",
        icon: (
          <div className="relative">
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-yellow-600"></div>
            <div className="w-0 h-0 border-l-1 border-r-1 border-b-2 border-l-transparent border-r-transparent border-b-yellow-500 absolute top-0.5 left-1/2 transform -translate-x-1/2"></div>
          </div>
        ),
        size: 35
      },
      {
        id: "alphaworks",
        color: "#D97706",
        bgColor: "rgba(217, 119, 6, 0.15)",
        icon: <div className="text-orange-600 font-bold text-lg leading-none">α</div>,
        size: 48
      },
      {
        id: "velocityio",
        color: "#14B8A6",
        bgColor: "rgba(20, 184, 166, 0.15)",
        icon: (
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="#14B8A6">
            <path d="M3 4L8 1L13 4L11 8L13 12L8 15L3 12L5 8L3 4Z"/>
          </svg>
        ),
        size: 42
      },
      {
        id: "quantum",
        color: "#F97316",
        bgColor: "rgba(249, 115, 22, 0.15)",
        icon: (
          <div className="grid grid-cols-3 gap-0.5">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-yellow-500 to-yellow-600'}`}
              />
            ))}
          </div>
        ),
        size: 46
      },
      {
        id: "sparktech",
        color: "#8B5CF6",
        bgColor: "rgba(139, 92, 246, 0.15)",
        icon: (
          <div className="relative">
            <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-md transform rotate-45"></div>
            <div className="w-1 h-1 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        ),
        size: 44
      },
      {
        id: "fusionlabs",
        color: "#EC4899",
        bgColor: "rgba(236, 72, 153, 0.15)",
        icon: (
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full relative">
              <div className="w-1 h-1 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        ),
        size: 38
      }
    ];
    
    const initializeLogos = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      const newLogos: Logo[] = logoTemplates.map((template) => ({
        ...template,
        x: Math.random() * (container.width - template.size),
        y: Math.random() * (container.height - template.size),
        vx: (Math.random() - 0.5) * 4, // Random velocity between -2 and 2
        vy: (Math.random() - 0.5) * 4,
      }));
      
      setLogos(newLogos);
    };
    
    // Initialize after a short delay to ensure container is ready
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
      // Reset logos on resize - will be handled by main useEffect
      setLogos([]);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white/70 via-gray-50/40 to-white/60 rounded-2xl border border-white/50 backdrop-blur-sm"
      style={{ minHeight: '300px' }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(156, 163, 175, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(156, 163, 175, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <AnimatePresence>
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            className="absolute cursor-pointer group"
            style={{
              x: logo.x,
              y: logo.y,
              width: logo.size,
              height: logo.size,
            }}
            whileHover={{ 
              scale: 1.2,
              zIndex: 50,
              transition: { duration: 0.2 }
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full h-full rounded-full backdrop-blur-sm border border-white/60 flex items-center justify-center relative overflow-hidden shadow-lg"
              style={{ 
                backgroundColor: logo.bgColor,
                boxShadow: `0 4px 20px ${logo.color}20`
              }}
              whileHover={{
                backgroundColor: logo.bgColor.replace('0.15', '0.25'),
                boxShadow: `0 8px 30px ${logo.color}40`,
                borderColor: `${logo.color}40`
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${logo.color}30, transparent 60%)`
                }}
              />
              
              {/* Icon container */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {logo.icon}
              </motion.div>

              {/* Subtle shine effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, transparent 30%, ${logo.color}20 50%, transparent 70%)`
                }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Minimal floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gray-300/20"
            style={{
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
            }}
            initial={{
              x: Math.random() * 400,
              y: Math.random() * 300,
            }}
            animate={{
              x: [
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
              ],
              y: [
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
              ],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogos; 