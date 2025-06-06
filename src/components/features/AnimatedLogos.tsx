"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Logo {
  id: string;
  color: string;
  logoPath: string;
  name: string;
  x: number;
  y: number;
  size: number;
  gridIndex: number;
}

const AnimatedLogos = () => {
  const [mounted, setMounted] = useState(false);
  const [logos, setLogos] = useState<Logo[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Real client logos using actual logo files
    const logoTemplates = [
      {
        id: "flipkart",
        color: "#1F74BA",
        logoPath: "/images/Flipkart_Symbol_0.svg",
        name: "Flipkart",
        size: 120
      },
      {
        id: "swiggy",
        color: "#FC8019",
        logoPath: "/images/swiggy.svg",
        name: "Swiggy",
        size: 110
      },
      {
        id: "acko",
        color: "#582CDB",
        logoPath: "/images/Acko_id4WtbwSds_0.svg",
        name: "Acko",
        size: 105
      },
      {
        id: "meesho",
        color: "#8B5CF6",
        logoPath: "/images/meesho.png",
        name: "Meesho",
        size: 115
      },
      {
        id: "thoughtspot",
        color: "#FF6B35",
        logoPath: "/images/ThoughtSpot_idEiE5Z1Gr_0.svg",
        name: "ThoughtSpot",
        size: 125
      },
      {
        id: "netskope",
        color: "#00A1E0",
        logoPath: "/images/Netskope_idPk6JKSHR_0.svg",
        name: "Netskope",
        size: 110
      },
      {
        id: "ethos",
        color: "#E91E63",
        logoPath: "/images/Ethos_idILGnoxOt_0.svg",
        name: "Ethos",
        size: 100
      },
      {
        id: "netomi",
        color: "#4CAF50",
        logoPath: "/images/netomi.png",
        name: "Netomi",
        size: 105
      },
      {
        id: "whatfix",
        color: "#FFA726",
        logoPath: "/images/Whatfix_idc18D79RQ_0.svg",
        name: "Whatfix",
        size: 115
      }
    ];
    
    // Create hexagonal grid positions for logos to stay fixed
    const createHexagonalGrid = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      const centerX = container.width / 2;
      const centerY = container.height / 2;
      const radius = Math.min(container.width, container.height) * 0.35;
      
      // Define fixed positions in a hexagonal/circular pattern
      const positions: Array<{x: number, y: number}> = [];
      
      // Center position
      positions.push({ x: centerX, y: centerY });
      
      // Inner ring (6 positions)
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6;
        positions.push({
          x: centerX + Math.cos(angle) * radius * 0.65,
          y: centerY + Math.sin(angle) * radius * 0.65
        });
      }
      
      // Outer ring (2 more positions for the remaining logos)
      for (let i = 0; i < 2; i++) {
        const angle = (i * Math.PI * 2) / 2 + Math.PI / 4;
        positions.push({
          x: centerX + Math.cos(angle) * radius * 1.15,
          y: centerY + Math.sin(angle) * radius * 1.15
        });
      }
      
      const newLogos: Logo[] = logoTemplates.map((template, index) => {
        const position = positions[index % positions.length];
        return {
          ...template,
          x: position.x - template.size / 2,
          y: position.y - template.size / 2,
          gridIndex: index
        };
      });
      
      setLogos(newLogos);
    };
    
    // Initialize after a short delay to ensure container is ready
    const timer = setTimeout(() => {
      createHexagonalGrid();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Recalculate positions on resize while maintaining fixed grid
      if (!containerRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      const centerX = container.width / 2;
      const centerY = container.height / 2;
      const radius = Math.min(container.width, container.height) * 0.35;
      
      const positions: Array<{x: number, y: number}> = [];
      
      // Center position
      positions.push({ x: centerX, y: centerY });
      
      // Inner ring
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6;
        positions.push({
          x: centerX + Math.cos(angle) * radius * 0.65,
          y: centerY + Math.sin(angle) * radius * 0.65
        });
      }
      
      // Outer ring
      for (let i = 0; i < 2; i++) {
        const angle = (i * Math.PI * 2) / 2 + Math.PI / 4;
        positions.push({
          x: centerX + Math.cos(angle) * radius * 1.15,
          y: centerY + Math.sin(angle) * radius * 1.15
        });
      }
      
      setLogos(prevLogos =>
        prevLogos.map((logo, index) => {
          const position = positions[index % positions.length];
          return {
            ...logo,
            x: position.x - logo.size / 2,
            y: position.y - logo.size / 2,
          };
        })
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
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
        }}></div>
        
        {/* Subtle grid lines connecting logo positions */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(156, 163, 175, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <AnimatePresence>
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            className="absolute cursor-pointer group"
            style={{
              left: logo.x,
              top: logo.y,
              width: logo.size,
              height: logo.size,
              zIndex: 10
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: 0
            }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.15,
              zIndex: 50,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Clean logo container without circular background */}
            <motion.div
              className="w-full h-full flex items-center justify-center relative overflow-hidden"
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }
              }}
            >
              {/* Subtle glow effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at center, ${logo.color}15, transparent 70%)`
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4
                }}
              />
              
              {/* Logo image - bigger and cleaner */}
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{
                  rotate: [0, 0.5, 0, -0.5, 0]
                }}
                transition={{
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative w-16 h-16 filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
                  <Image
                    src={logo.logoPath}
                    alt={`${logo.name} logo`}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
              </motion.div>

              {/* Subtle connecting lines effect (very minimal) */}
              {index > 0 && (
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.05, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8
                  }}
                  style={{
                    background: `linear-gradient(45deg, transparent 40%, ${logo.color}10 50%, transparent 60%)`
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Central connecting node (very subtle) */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 5
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedLogos; 