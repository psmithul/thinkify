"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Logo {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
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
      icon: (
        <div className="flex gap-1">
          <div className="w-4 h-4 bg-yellow-600 rounded"></div>
          <div className="w-4 h-4 bg-orange-600 rounded"></div>
          <div className="w-4 h-4 bg-yellow-600 rounded"></div>
        </div>
      )
    },
    {
      id: "innovatelabs",
      name: "InnovateLabs",
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.1)",
      icon: (
        <div className="relative">
          <div className="w-3 h-3 bg-emerald-600 rounded-full absolute top-0 left-0"></div>
          <div className="w-3 h-3 bg-emerald-500 rounded-full absolute top-0 right-0"></div>
          <div className="w-3 h-3 bg-emerald-600 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      )
    },
    {
      id: "dataflow",
      name: "DataFlow",
      color: "#FB7C3C",
      bgColor: "rgba(251, 124, 60, 0.1)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path d="M2 6L8 2L14 6L20 2L22 4L16 8L10 4L4 8L2 6Z" fill="#FB7C3C"/>
          <path d="M2 12L8 8L14 12L20 8L22 10L16 14L10 10L4 14L2 12Z" fill="#F97316"/>
        </svg>
      )
    },
    {
      id: "cloudsync",
      name: "CloudSync",
      color: "#3B82F6",
      bgColor: "rgba(59, 130, 246, 0.1)",
      icon: (
        <div className="relative">
          <div className="w-6 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-8 h-2 bg-blue-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
      )
    },
    {
      id: "nextgen",
      name: "NextGen",
      color: "#EAB308",
      bgColor: "rgba(234, 179, 8, 0.1)",
      icon: (
        <div className="w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-yellow-600"></div>
      )
    },
    {
      id: "alphaworks",
      name: "AlphaWorks",
      color: "#D97706",
      bgColor: "rgba(217, 119, 6, 0.1)",
      icon: (
        <div className="text-orange-600 font-bold text-xl">α</div>
      )
    },
    {
      id: "velocityio",
      name: "VelocityIO",
      color: "#14B8A6",
      bgColor: "rgba(20, 184, 166, 0.1)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#14B8A6">
          <path d="M4 6L12 2L20 6L16 12L20 18L12 22L4 18L8 12L4 6Z"/>
        </svg>
      )
    },
    {
      id: "quantum",
      name: "Quantum",
      color: "#F97316",
      bgColor: "rgba(249, 115, 22, 0.1)",
      icon: (
        <div className="grid grid-cols-3 gap-0.5">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-orange-600' : 'bg-yellow-500'}`}
            />
          ))}
        </div>
      )
    }
  ];

  const getRandomPosition = () => ({
    x: Math.random() * 400,
    y: Math.random() * 300,
  });

  const getRandomDelay = () => Math.random() * 2;

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence>
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            className="absolute"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: getRandomPosition().x,
              y: getRandomPosition().y,
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: [
                getRandomPosition().x,
                getRandomPosition().x + 50,
                getRandomPosition().x - 30,
                getRandomPosition().x + 20,
                getRandomPosition().x
              ],
              y: [
                getRandomPosition().y,
                getRandomPosition().y - 40,
                getRandomPosition().y + 30,
                getRandomPosition().y - 20,
                getRandomPosition().y
              ],
              rotate: [0, 5, -5, 2, 0]
            }}
            transition={{
              duration: 8 + index,
              delay: getRandomDelay(),
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 10,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 p-4 rounded-2xl backdrop-blur-sm cursor-pointer group relative overflow-hidden"
              style={{ backgroundColor: logo.bgColor }}
              whileHover={{
                backgroundColor: logo.bgColor.replace('0.1', '0.25'),
                boxShadow: `0 12px 40px ${logo.color}25`
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, ${logo.color}15, transparent, ${logo.color}15)`
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
                className="flex items-center justify-center w-12 h-12 rounded-xl relative z-10"
                style={{ backgroundColor: `${logo.color}15` }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
              >
                {logo.icon}
                {/* Inner glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${logo.color}20, transparent)`
                  }}
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </motion.div>
              
              <motion.span 
                className="text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
                style={{ color: logo.color }}
              >
                {logo.name}
              </motion.span>

              {/* Sparkle effects */}
              <motion.div
                className="absolute top-1 right-1 text-xs opacity-0 group-hover:opacity-100"
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                ✨
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Enhanced background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: i % 3 === 0 
                ? "linear-gradient(45deg, #F59E0B, #F97316)" 
                : i % 3 === 1 
                ? "linear-gradient(45deg, #EAB308, #F59E0B)"
                : "linear-gradient(45deg, #FB7C3C, #F97316)"
            }}
            initial={{
              x: Math.random() * 500,
              y: Math.random() * 400,
              opacity: 0.2
            }}
            animate={{
              x: [
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
              ],
              y: [
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
              ],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Floating text with enhanced styling */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.h3 
          className="text-2xl font-bold text-gray-800 mb-2 relative"
          animate={{ 
            backgroundPosition: ["0%", "100%", "0%"]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: "linear-gradient(45deg, #F59E0B, #F97316, #EAB308, #F59E0B)",
            backgroundSize: "300% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 20px rgba(245, 158, 11, 0.3)",
                "0 0 30px rgba(249, 115, 22, 0.4)",
                "0 0 20px rgba(245, 158, 11, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            Trusted Partners
          </motion.span>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-2 -left-2 text-lg"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          >
            ⭐
          </motion.div>
          <motion.div
            className="absolute -top-2 -right-2 text-lg"
            animate={{
              rotate: [360, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2
            }}
          >
            🌟
          </motion.div>
        </motion.h3>
        
        <motion.p 
          className="text-sm text-gray-600 flex items-center justify-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀
          </motion.span>
          Companies that trust our expertise
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            ✨
          </motion.span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AnimatedLogos; 