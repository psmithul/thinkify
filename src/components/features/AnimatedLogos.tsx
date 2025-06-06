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
    
    // Enhanced client logos with new additions - Made larger and more prominent
    const logoTemplates = [
      {
        id: "flipkart",
        color: "#1F74BA",
        logoPath: "/images/Flipkart_Symbol_0.png",
        name: "Flipkart",
        size: 320
      },
      {
        id: "swiggy",
        color: "#FC8019",
        logoPath: "/images/swiggy.svg",
        name: "Swiggy",
        size: 220
      },
      {
        id: "acko",
        color: "#582CDB",
        logoPath: "/images/Acko_id4WtbwSds_0.svg",
        name: "Acko",
        size: 215
      },
      {
        id: "meesho",
        color: "#8B5CF6",
        logoPath: "/images/meesho.png",
        name: "Meesho",
        size: 225
      },
      {
        id: "thoughtspot",
        color: "#FF6B35",
        logoPath: "/images/ThoughtSpot_idEiE5Z1Gr_0.svg",
        name: "ThoughtSpot",
        size: 235
      },
      {
        id: "netskope",
        color: "#00A1E0",
        logoPath: "/images/Netskope_idPk6JKSHR_0.svg",
        name: "Netskope",
        size: 220
      },
      {
        id: "ethos",
        color: "#E91E63",
        logoPath: "/images/Ethos_idILGnoxOt_0.svg",
        name: "Ethos",
        size: 210
      },
      {
        id: "netomi",
        color: "#4CAF50",
        logoPath: "/images/netomi.png",
        name: "Netomi",
        size: 215
      },
      {
        id: "whatfix",
        color: "#FFA726",
        logoPath: "/images/Whatfix_idc18D79RQ_0.svg",
        name: "Whatfix",
        size: 225
      },
      // New logos added with prominent sizes - Using actual logo files
      {
        id: "normalyze",
        color: "#2563EB",
        logoPath: "/images/normalyze-logo.svg",
        name: "Normalyze",
        size: 230
      },
      {
        id: "appsmith",
        color: "#F97316",
        logoPath: "/images/appsmith-logo.svg",
        name: "Appsmith",
        size: 240
      },
      {
        id: "hypersonix",
        color: "#7C3AED",
        logoPath: "/images/hypersonix-logo.png",
        name: "Hypersonix",
        size: 250
      }
    ];
    
    // Enhanced grid layout for 12 logos in a 3x4 pattern (3 columns, 4 rows)
    const createSymmetricGrid = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      const centerX = container.width / 2;
      const centerY = container.height * 0.45;
      const spacingX = container.width * 0.28; // Wider spacing for 3 columns
      const spacingY = container.height * 0.15; // Tighter vertical spacing for 4 rows
      
      // Define 3x4 grid positions (3 columns, 4 rows)
      const positions: Array<{x: number, y: number}> = [
        // Row 1
        { x: centerX - spacingX, y: centerY - spacingY * 1.5 },
        { x: centerX, y: centerY - spacingY * 1.5 },
        { x: centerX + spacingX, y: centerY - spacingY * 1.5 },
        
        // Row 2
        { x: centerX - spacingX, y: centerY - spacingY * 0.5 },
        { x: centerX, y: centerY - spacingY * 0.5 },
        { x: centerX + spacingX, y: centerY - spacingY * 0.5 },
        
        // Row 3
        { x: centerX - spacingX, y: centerY + spacingY * 0.5 },
        { x: centerX, y: centerY + spacingY * 0.5 },
        { x: centerX + spacingX, y: centerY + spacingY * 0.5 },
        
        // Row 4
        { x: centerX - spacingX, y: centerY + spacingY * 1.5 },
        { x: centerX, y: centerY + spacingY * 1.5 },
        { x: centerX + spacingX, y: centerY + spacingY * 1.5 },
      ];
      
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
      createSymmetricGrid();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Recalculate positions on resize while maintaining 3x4 grid
      if (!containerRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      const centerX = container.width / 2;
      const centerY = container.height * 0.45;
      const spacingX = container.width * 0.28;
      const spacingY = container.height * 0.15;
      
      const positions: Array<{x: number, y: number}> = [
        // Row 1
        { x: centerX - spacingX, y: centerY - spacingY * 1.5 },
        { x: centerX, y: centerY - spacingY * 1.5 },
        { x: centerX + spacingX, y: centerY - spacingY * 1.5 },
        
        // Row 2
        { x: centerX - spacingX, y: centerY - spacingY * 0.5 },
        { x: centerX, y: centerY - spacingY * 0.5 },
        { x: centerX + spacingX, y: centerY - spacingY * 0.5 },
        
        // Row 3
        { x: centerX - spacingX, y: centerY + spacingY * 0.5 },
        { x: centerX, y: centerY + spacingY * 0.5 },
        { x: centerX + spacingX, y: centerY + spacingY * 0.5 },
        
        // Row 4
        { x: centerX - spacingX, y: centerY + spacingY * 1.5 },
        { x: centerX, y: centerY + spacingY * 1.5 },
        { x: centerX + spacingX, y: centerY + spacingY * 1.5 },
      ];
      
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
    <div className="relative w-full">
      {/* Logo Grid Container - Enhanced for prominence */}
    <div 
      ref={containerRef}
        className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white/80 via-yellow-50/50 to-orange-50/70 rounded-3xl border-2 border-yellow-200/40 backdrop-blur-sm shadow-xl"
        style={{ minHeight: '700px' }}
    >
        {/* Enhanced background pattern with more visibility */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(251, 146, 60, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 70%)`
        }}></div>
          
          {/* Enhanced grid pattern */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(251, 191, 36, 0.15)" strokeWidth="1"/>
              </pattern>
              <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="rgba(251, 146, 60, 0.2)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#dots)" />
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
                delay: index * 0.08, // Faster stagger for more logos
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.25, // More prominent hover effect
                zIndex: 50,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Enhanced logo container with more visual prominence */}
              <motion.div
                className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-2xl"
                animate={{
                  scale: [1, 1.03, 1] // Slightly more breathing animation
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
                {/* Enhanced glow effect with more prominence */}
              <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                    background: `radial-gradient(circle at center, ${logo.color}25, ${logo.color}10 40%, transparent 70%)`
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.15, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                    delay: index * 0.4
                }}
              />

              {/* Background card effect for prominence */}
              <motion.div
                className="absolute inset-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                animate={{
                  scale: [0.95, 1, 0.95],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />

                {/* Logo image - Much bigger and more prominent */}
                <motion.div
                  className="relative w-full h-full flex items-center justify-center z-10"
                  animate={{
                    rotate: [0, 1, 0, -1, 0]
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
                  <div 
                    className="relative filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                    style={{
                      width: `${Math.min(logo.size * 0.55, 150)}px`, // Increased from 0.4 to 0.55
                      height: `${Math.min(logo.size * 0.55, 150)}px`
                    }}
                  >
                    <Image
                      src={logo.logoPath}
                      alt={`${logo.name} logo`}
                      fill
                      className="object-contain group-hover:brightness-110 transition-all duration-300"
                      sizes="150px"
                    />
                  </div>
                </motion.div>

                {/* Enhanced connecting lines effect */}
                {index > 0 && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8
                    }}
                    style={{
                      background: `linear-gradient(45deg, transparent 40%, ${logo.color}15 50%, transparent 60%)`
                    }}
                  />
                )}

                {/* Company name tooltip on hover */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {logo.name}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </motion.div>
              </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

        {/* Enhanced central connecting node */}
          <motion.div
          className="absolute w-3 h-3 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full shadow-lg"
            style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 5
            }}
            animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            boxShadow: [
              "0 0 10px rgba(251, 191, 36, 0.3)",
              "0 0 20px rgba(251, 146, 60, 0.5)",
              "0 0 10px rgba(251, 191, 36, 0.3)"
            ]
            }}
            transition={{
            duration: 5,
              repeat: Infinity,
            ease: "easeInOut"
            }}
          />

          {/* Prominent section header */}
          <motion.div
            className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-200/50 shadow-lg"
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 4px 20px rgba(251, 191, 36, 0.1)",
                  "0 6px 25px rgba(251, 146, 60, 0.2)",
                  "0 4px 20px rgba(251, 191, 36, 0.1)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </motion.div>
          </motion.div>
      </div>
    </div>
  );
};

export default AnimatedLogos; 