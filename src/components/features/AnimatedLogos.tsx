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
        size: 200
      },
      {
        id: "swiggy",
        color: "#FC8019",
        logoPath: "/images/swiggy.svg",
        name: "Swiggy",
        size: 190
      },
      {
        id: "acko",
        color: "#582CDB",
        logoPath: "/images/Acko_id4WtbwSds_0.svg",
        name: "Acko",
        size: 185
      },
      {
        id: "meesho",
        color: "#8B5CF6",
        logoPath: "/images/meesho.png",
        name: "Meesho",
        size: 195
      },
      {
        id: "thoughtspot",
        color: "#FF6B35",
        logoPath: "/images/ThoughtSpot_idEiE5Z1Gr_0.svg",
        name: "ThoughtSpot",
        size: 205
      },
      {
        id: "netskope",
        color: "#00A1E0",
        logoPath: "/images/Netskope_idPk6JKSHR_0.svg",
        name: "Netskope",
        size: 190
      },
      {
        id: "ethos",
        color: "#E91E63",
        logoPath: "/images/Ethos_idILGnoxOt_0.svg",
        name: "Ethos",
        size: 180
      },
      {
        id: "netomi",
        color: "#4CAF50",
        logoPath: "/images/netomi.png",
        name: "Netomi",
        size: 185
      },
      {
        id: "whatfix",
        color: "#FFA726",
        logoPath: "/images/Whatfix_idc18D79RQ_0.svg",
        name: "Whatfix",
        size: 195
      }
    ];
    
    // Create symmetric grid positions for logos to fill screen properly
    const createSymmetricGrid = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      const centerX = container.width / 2;
      const centerY = container.height * 0.45;
      const spacingX = container.width * 0.28;
      const spacingY = container.height * 0.20;
      
      // Define symmetric 3x3 grid positions to fill screen better
      const positions: Array<{x: number, y: number}> = [
        // Top row
        { x: centerX - spacingX, y: centerY - spacingY },
        { x: centerX, y: centerY - spacingY },
        { x: centerX + spacingX, y: centerY - spacingY },
        
        // Middle row
        { x: centerX - spacingX, y: centerY },
        { x: centerX, y: centerY },
        { x: centerX + spacingX, y: centerY },
        
        // Bottom row
        { x: centerX - spacingX, y: centerY + spacingY },
        { x: centerX, y: centerY + spacingY },
        { x: centerX + spacingX, y: centerY + spacingY },
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
      // Recalculate positions on resize while maintaining symmetric grid
      if (!containerRef.current) return;
      
      const container = containerRef.current.getBoundingClientRect();
      const centerX = container.width / 2;
      const centerY = container.height * 0.45;
      const spacingX = container.width * 0.28;
      const spacingY = container.height * 0.20;
      
      const positions: Array<{x: number, y: number}> = [
        // Top row
        { x: centerX - spacingX, y: centerY - spacingY },
        { x: centerX, y: centerY - spacingY },
        { x: centerX + spacingX, y: centerY - spacingY },
        
        // Middle row
        { x: centerX - spacingX, y: centerY },
        { x: centerX, y: centerY },
        { x: centerX + spacingX, y: centerY },
        
        // Bottom row
        { x: centerX - spacingX, y: centerY + spacingY },
        { x: centerX, y: centerY + spacingY },
        { x: centerX + spacingX, y: centerY + spacingY },
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
      {/* Logo Grid Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white/60 via-yellow-50/30 to-orange-50/50 rounded-3xl border border-yellow-100/60 backdrop-blur-sm"
        style={{ minHeight: '650px' }}
      >
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)`
          }}></div>
          
          {/* Subtle grid lines connecting logo positions */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(251, 191, 36, 0.1)" strokeWidth="1"/>
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
                
                {/* Logo image - much bigger */}
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
                  <div className="relative w-24 h-24 filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
                    <Image
                      src={logo.logoPath}
                      alt={`${logo.name} logo`}
                      fill
                      className="object-contain"
                      sizes="96px"
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
    </div>
  );
};

export default AnimatedLogos; 