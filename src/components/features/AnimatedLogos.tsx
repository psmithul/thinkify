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
    
    // Logo templates with medium sizes for container
    const logoTemplates = [
      {
        id: "techcorp",
        color: "#F59E0B",
        bgColor: "rgba(245, 158, 11, 0.15)",
        icon: (
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-sm"></div>
            <div className="w-2 h-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm"></div>
            <div className="w-2 h-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-sm"></div>
          </div>
        ),
        size: 48
      },
      {
        id: "innovatelabs",
        color: "#10B981",
        bgColor: "rgba(16, 185, 129, 0.15)",
        icon: (
          <div className="relative w-5 h-5">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute top-0 left-0"></div>
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full absolute top-0 right-0"></div>
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </div>
        ),
        size: 44
      },
      {
        id: "dataflow",
        color: "#FB7C3C",
        bgColor: "rgba(251, 124, 60, 0.15)",
        icon: (
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
            <path d="M2 4L6 1L10 4L14 1L15 3L11 6L7 3L3 6L2 4Z" fill="#FB7C3C"/>
            <path d="M2 8L6 5L10 8L14 5L15 7L11 10L7 7L3 10L2 8Z" fill="#F97316"/>
            <path d="M2 12L6 9L10 12L14 9L15 11L11 14L7 11L3 14L2 12Z" fill="#FB923C"/>
          </svg>
        ),
        size: 52
      },
      {
        id: "cloudsync",
        color: "#3B82F6",
        bgColor: "rgba(59, 130, 246, 0.15)",
        icon: (
          <div className="relative w-5 h-4">
            <div className="w-4 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            <div className="w-5 h-1.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
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
            <div className="w-0 h-0 border-l-1.5 border-r-1.5 border-b-3 border-l-transparent border-r-transparent border-b-yellow-500 absolute top-0.5 left-1/2 transform -translate-x-1/2"></div>
          </div>
        ),
        size: 36
      },
      {
        id: "alphaworks",
        color: "#D97706",
        bgColor: "rgba(217, 119, 6, 0.15)",
        icon: <div className="text-orange-600 font-bold text-xl leading-none">α</div>,
        size: 46
      },
      {
        id: "velocityio",
        color: "#14B8A6",
        bgColor: "rgba(20, 184, 166, 0.15)",
        icon: (
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="#14B8A6">
            <path d="M3 4L10 1L17 4L14 10L17 16L10 19L3 16L6 10L3 4Z"/>
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
        size: 38
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
              scale: 1.3,
              zIndex: 50,
              transition: { duration: 0.2 }
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full h-full rounded-full backdrop-blur-sm border border-white/50 flex items-center justify-center relative overflow-hidden shadow-lg"
              style={{ 
                backgroundColor: logo.bgColor,
                boxShadow: `0 4px 20px ${logo.color}25`
              }}
              whileHover={{
                backgroundColor: logo.bgColor.replace('0.15', '0.3'),
                boxShadow: `0 8px 32px ${logo.color}40`,
                borderColor: `${logo.color}50`
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${logo.color}35, transparent 70%)`
                }}
              />
              
              {/* Icon container */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {logo.icon}
              </motion.div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, transparent 30%, ${logo.color}25 50%, transparent 70%)`
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