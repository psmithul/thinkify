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
  targetX: number; // target position x
  targetY: number; // target position y
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
        let newX = logo.x;
        let newY = logo.y;
        let newVx = logo.vx;
        let newVy = logo.vy;
        let newTargetX = logo.targetX;
        let newTargetY = logo.targetY;

        // Move towards target with smooth interpolation
        const dx = newTargetX - newX;
        const dy = newTargetY - newY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If close to target or target is invalid, set new random target
        if (distance < 20 || Math.random() < 0.005) {
          newTargetX = Math.random() * (container.width - logo.size);
          newTargetY = Math.random() * (container.height - logo.size);
        }

        // Calculate velocity towards target with easing
        const speed = 0.5;
        newVx += ((newTargetX - newX) * speed - newVx) * 0.02;
        newVy += ((newTargetY - newY) * speed - newVy) * 0.02;

        // Add some random drift for organic movement
        newVx += (Math.random() - 0.5) * 0.3;
        newVy += (Math.random() - 0.5) * 0.3;

        // Limit maximum velocity
        const maxVelocity = 2;
        const currentSpeed = Math.sqrt(newVx * newVx + newVy * newVy);
        if (currentSpeed > maxVelocity) {
          newVx = (newVx / currentSpeed) * maxVelocity;
          newVy = (newVy / currentSpeed) * maxVelocity;
        }

        // Update position
        newX += newVx;
        newY += newVy;

        // Keep within bounds with soft bouncing
        if (newX <= 0 || newX >= container.width - logo.size) {
          newX = Math.max(0, Math.min(container.width - logo.size, newX));
          newVx *= -0.8;
          newTargetX = Math.random() * (container.width - logo.size);
        }

        if (newY <= 0 || newY >= container.height - logo.size) {
          newY = Math.max(0, Math.min(container.height - logo.size, newY));
          newVy *= -0.8;
          newTargetY = Math.random() * (container.height - logo.size);
        }

        return {
          ...logo,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
          targetX: newTargetX,
          targetY: newTargetY,
        };
      })
    );

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    setMounted(true);
    
    // Logo templates with bigger sizes for better visibility
    const logoTemplates = [
      {
        id: "techcorp",
        color: "#F59E0B",
        bgColor: "rgba(245, 158, 11, 0.15)",
        icon: (
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-md shadow-sm"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md shadow-sm"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-md shadow-sm"></div>
          </div>
        ),
        size: 68
      },
      {
        id: "innovatelabs",
        color: "#10B981",
        bgColor: "rgba(16, 185, 129, 0.15)",
        icon: (
          <div className="relative w-7 h-7">
            <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute top-0 left-0 shadow-sm"></div>
            <div className="w-2 h-2 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full absolute top-0 right-0 shadow-sm"></div>
            <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 shadow-sm"></div>
            <div className="w-1 h-1 bg-gradient-to-br from-emerald-300 to-emerald-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        ),
        size: 64
      },
      {
        id: "dataflow",
        color: "#FB7C3C",
        bgColor: "rgba(251, 124, 60, 0.15)",
        icon: (
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
            <path d="M2 6L8 2L14 6L20 2L21 4L15 8L9 4L3 8L2 6Z" fill="#FB7C3C"/>
            <path d="M2 12L8 8L14 12L20 8L21 10L15 14L9 10L3 14L2 12Z" fill="#F97316"/>
            <path d="M2 18L8 14L14 18L20 14L21 16L15 20L9 16L3 20L2 18Z" fill="#FB923C"/>
          </svg>
        ),
        size: 72
      },
      {
        id: "cloudsync",
        color: "#3B82F6",
        bgColor: "rgba(59, 130, 246, 0.15)",
        icon: (
          <div className="relative w-7 h-5">
            <div className="w-5 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
            <div className="w-6 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full absolute top-2.5 left-1/2 transform -translate-x-1/2 shadow-sm"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full absolute top-1 left-2"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full absolute top-3 right-1"></div>
          </div>
        ),
        size: 58
      },
      {
        id: "nextgen",
        color: "#EAB308",
        bgColor: "rgba(234, 179, 8, 0.15)",
        icon: (
          <div className="relative">
            <div className="w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-yellow-600"></div>
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-yellow-500 absolute top-1 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-1 h-1 bg-yellow-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
        ),
        size: 54
      },
      {
        id: "alphaworks",
        color: "#D97706",
        bgColor: "rgba(217, 119, 6, 0.15)",
        icon: <div className="text-orange-600 font-bold text-2xl leading-none">α</div>,
        size: 66
      },
      {
        id: "velocityio",
        color: "#14B8A6",
        bgColor: "rgba(20, 184, 166, 0.15)",
        icon: (
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#14B8A6">
            <path d="M4 6L12 2L20 6L17 12L20 18L12 22L4 18L7 12L4 6Z"/>
            <circle cx="12" cy="12" r="2" fill="#0D9488"/>
          </svg>
        ),
        size: 62
      },
      {
        id: "quantum",
        color: "#F97316",
        bgColor: "rgba(249, 115, 22, 0.15)",
        icon: (
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full shadow-sm ${i % 2 === 0 ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-yellow-500 to-yellow-600'}`}
              />
            ))}
          </div>
        ),
        size: 56
      },
      {
        id: "sparktech",
        color: "#8B5CF6",
        bgColor: "rgba(139, 92, 246, 0.15)",
        icon: (
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg transform rotate-45 shadow-md"></div>
            <div className="w-2 h-2 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-1 h-1 bg-purple-200 rounded-full absolute top-1 left-1"></div>
            <div className="w-1 h-1 bg-purple-200 rounded-full absolute bottom-1 right-1"></div>
          </div>
        ),
        size: 70
      },
      {
        id: "fusionlabs",
        color: "#EC4899",
        bgColor: "rgba(236, 72, 153, 0.15)",
        icon: (
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full relative shadow-md">
              <div className="w-2 h-2 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-1 h-1 bg-pink-200 rounded-full absolute top-1 left-2"></div>
              <div className="w-1 h-1 bg-pink-200 rounded-full absolute bottom-1 right-2"></div>
            </div>
          </div>
        ),
        size: 60
      }
    ];
    
    const initializeLogos = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      const newLogos: Logo[] = logoTemplates.map((template) => {
        const x = Math.random() * (container.width - template.size);
        const y = Math.random() * (container.height - template.size);
        return {
          ...template,
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          targetX: Math.random() * (container.width - template.size),
          targetY: Math.random() * (container.height - template.size),
        };
      });
      
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
      // Reinitialize on resize
      if (!containerRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      setLogos(prevLogos =>
        prevLogos.map(logo => ({
          ...logo,
          x: Math.min(logo.x, container.width - logo.size),
          y: Math.min(logo.y, container.height - logo.size),
          targetX: Math.random() * (container.width - logo.size),
          targetY: Math.random() * (container.height - logo.size),
        }))
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white/60 via-gray-50/30 to-white/50 rounded-3xl border border-white/40 backdrop-blur-sm"
      style={{ minHeight: '400px' }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(156, 163, 175, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(156, 163, 175, 0.08) 0%, transparent 50%)`
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
              scale: 1.25,
              zIndex: 50,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.02, 1],
              rotate: [0, 1, 0, -1, 0]
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 0.4,
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div
              className="w-full h-full rounded-full backdrop-blur-sm border border-white/50 flex items-center justify-center relative overflow-hidden shadow-lg"
              style={{ 
                backgroundColor: logo.bgColor,
                boxShadow: `0 4px 20px ${logo.color}25`
              }}
              whileHover={{
                backgroundColor: logo.bgColor.replace('0.15', '0.3'),
                boxShadow: `0 8px 32px ${logo.color}40, 0 0 0 2px ${logo.color}30`,
                borderColor: `${logo.color}50`,
                scale: 1.05
              }}
              animate={{
                boxShadow: [
                  `0 4px 20px ${logo.color}25`,
                  `0 6px 25px ${logo.color}35`,
                  `0 4px 20px ${logo.color}25`
                ]
              }}
              transition={{ 
                duration: 0.2,
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Enhanced glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${logo.color}35, transparent 70%)`
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Icon container with breathing animation */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 10,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {logo.icon}
              </motion.div>

              {/* Enhanced shine effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, transparent 30%, ${logo.color}25 50%, transparent 70%)`
                }}
                animate={{
                  rotate: [0, 360],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  opacity: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />

              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 opacity-0"
                style={{ borderColor: logo.color }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              />

              {/* Floating particles around logo */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    backgroundColor: logo.color,
                    left: `${20 + i * 20}%`,
                    top: `${20 + i * 15}%`
                  }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating particles within container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-yellow-300/20 to-orange-300/20"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
            }}
            initial={{
              x: Math.random() * 300,
              y: Math.random() * 200,
            }}
            animate={{
              x: [
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
              ],
              y: [
                Math.random() * 200,
                Math.random() * 200,
                Math.random() * 200,
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