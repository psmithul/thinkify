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
    
    // Real client logos with SVG-based representations from IconScout research
    const logoTemplates = [
      {
        id: "flipkart",
        color: "#1F74BA",
        bgColor: "rgba(31, 116, 186, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <rect x="4" y="8" width="16" height="10" rx="2" fill="#1F74BA"/>
              <rect x="6" y="6" width="12" height="2" rx="1" fill="#2563EB"/>
              <text x="12" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">f</text>
            </svg>
            <div className="text-xs font-semibold text-blue-600">Flipkart</div>
          </div>
        ),
        size: 72
      },
      {
        id: "swiggy",
        color: "#FC8019",
        bgColor: "rgba(252, 128, 25, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <circle cx="12" cy="12" r="10" fill="#FC8019"/>
              <path d="M8 12 L12 8 L16 12 L12 16 Z" fill="white"/>
              <circle cx="16" cy="8" r="2" fill="#FF6B35"/>
            </svg>
            <div className="text-xs font-semibold text-orange-600">Swiggy</div>
          </div>
        ),
        size: 70
      },
      {
        id: "acko",
        color: "#582CDB",
        bgColor: "rgba(88, 44, 219, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <circle cx="12" cy="12" r="10" fill="#582CDB"/>
              <polygon points="12,6 16,10 12,14 8,10" fill="white"/>
              <circle cx="15" cy="9" r="1.5" fill="#4ADE80"/>
            </svg>
            <div className="text-xs font-semibold text-purple-600">Acko</div>
          </div>
        ),
        size: 68
      },
      {
        id: "meesho",
        color: "#8B5CF6",
        bgColor: "rgba(139, 92, 246, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <defs>
                <linearGradient id="meeshoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6"/>
                  <stop offset="100%" stopColor="#FCD34D"/>
                </linearGradient>
              </defs>
              <rect x="4" y="6" width="16" height="12" rx="3" fill="url(#meeshoGradient)"/>
              <text x="12" y="14" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">M</text>
            </svg>
            <div className="text-xs font-semibold text-purple-600">Meesho</div>
          </div>
        ),
        size: 72
      },
      {
        id: "thoughtspot",
        color: "#000000",
        bgColor: "rgba(0, 0, 0, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <rect x="6" y="8" width="8" height="8" rx="1" fill="#000000"/>
              <text x="10" y="14" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">T</text>
              <circle cx="16" cy="10" r="2" fill="#6B7280"/>
            </svg>
            <div className="text-xs font-semibold text-black">ThoughtSpot</div>
          </div>
        ),
        size: 76
      },
      {
        id: "netskope",
        color: "#00A1E0",
        bgColor: "rgba(0, 161, 224, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <rect x="4" y="6" width="16" height="12" rx="2" fill="#00A1E0"/>
              <text x="12" y="14" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">N</text>
              <circle cx="17" cy="7" r="1" fill="#60A5FA"/>
            </svg>
            <div className="text-xs font-semibold text-blue-600">Netskope</div>
          </div>
        ),
        size: 70
      },
      {
        id: "ethos",
        color: "#E91E63",
        bgColor: "rgba(233, 30, 99, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <circle cx="12" cy="12" r="10" fill="#E91E63"/>
              <text x="12" y="15" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">E</text>
            </svg>
            <div className="text-xs font-semibold text-pink-600">Ethos</div>
          </div>
        ),
        size: 66
      },
      {
        id: "netomi",
        color: "#4CAF50",
        bgColor: "rgba(76, 175, 80, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <rect x="4" y="7" width="16" height="10" rx="2" fill="#4CAF50"/>
              <text x="12" y="14" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">NET</text>
            </svg>
            <div className="text-xs font-semibold text-green-600">Netomi</div>
          </div>
        ),
        size: 68
      },
      {
        id: "infoworks",
        color: "#FF5722",
        bgColor: "rgba(255, 87, 34, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <rect x="5" y="6" width="14" height="12" rx="2" fill="#FF5722"/>
              <circle cx="12" cy="12" r="2" fill="white"/>
              <text x="12" y="13.5" textAnchor="middle" fill="#FF5722" fontSize="6" fontWeight="bold">i</text>
            </svg>
            <div className="text-xs font-semibold text-orange-600">InfoWorks</div>
          </div>
        ),
        size: 70
      },
      {
        id: "whatfix",
        color: "#FFA726",
        bgColor: "rgba(255, 167, 38, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <rect x="4" y="6" width="16" height="12" rx="3" fill="#FFA726"/>
              <text x="12" y="14" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">W</text>
              <circle cx="16" cy="9" r="1" fill="#FFE0B2"/>
            </svg>
            <div className="text-xs font-semibold text-orange-600">Whatfix</div>
          </div>
        ),
        size: 72
      },
      {
        id: "normalyze",
        color: "#00BCD4",
        bgColor: "rgba(0, 188, 212, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <rect x="4" y="7" width="16" height="10" rx="2" fill="#00BCD4"/>
              <text x="12" y="14" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">nz</text>
            </svg>
            <div className="text-xs font-semibold text-cyan-600">Normalyze</div>
          </div>
        ),
        size: 68
      },
      {
        id: "appsmith",
        color: "#F3752B",
        bgColor: "rgba(243, 117, 43, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <rect x="4" y="6" width="16" height="12" rx="2" fill="#F3752B"/>
              <text x="12" y="14" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">A</text>
              <rect x="9" y="16" width="6" height="1" rx="0.5" fill="#FFB74D"/>
            </svg>
            <div className="text-xs font-semibold text-orange-600">Appsmith</div>
          </div>
        ),
        size: 74
      },
      {
        id: "hypersonix",
        color: "#9C27B0",
        bgColor: "rgba(156, 39, 176, 0.15)",
        icon: (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <rect x="4" y="6" width="16" height="12" rx="2" fill="#9C27B0"/>
              <text x="12" y="14" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">H</text>
              <line x1="17" y1="8" x2="19" y2="10" stroke="#CE93D8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="text-xs font-semibold text-purple-600">Hypersonix</div>
          </div>
        ),
        size: 76
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