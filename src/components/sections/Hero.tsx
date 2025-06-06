"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedLogos from "@/components/features/AnimatedLogos";
import { smoothScrollTo } from "@/lib/utils";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect values
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);
  
  // Handle mounting for client-side effects
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCTAClick = () => {
    window.open('https://connect.thinkify.io', '_blank');
  };

  const handleLearnMoreClick = () => {
    smoothScrollTo('companies');
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-8">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/40 via-white to-orange-50/40 z-0" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.01] mix-blend-overlay z-0"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-35"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-yellow-300 to-amber-300 rounded-full opacity-25"
        />
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10 flex flex-col h-[calc(100vh-6rem)]">
        <div className="flex flex-col lg:flex-row items-center flex-grow">
          {/* Left Content (Text) */}
          <motion.div 
            className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-left"
            style={{ scale, opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="mercor-heading text-gray-900 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                World-Class Talent,
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  backgroundPosition: ["0%", "100%", "0%"]
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7,
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent relative"
                style={{
                  backgroundSize: "200% 100%"
                }}
              >
                 Vetted by Ex-leads
              </motion.span>
            </motion.h1>

            <motion.div 
              className="mercor-subheading text-gray-600 mb-6 md:mb-8 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ex-lead engineers from top tech firms vet every developer. Skip the hiring hassle—get pre-vetted talent ready to ship.
              </motion.span>
            </motion.div>
              
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button 
                  size="lg" 
                  onClick={handleCTAClick}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl relative overflow-hidden group transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-lg"
                    >
                      🔥
                    </motion.span>
                    Book an intro call
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                    style={{ opacity: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{ opacity: 0.1 }}
                  />
                </Button>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 -z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleLearnMoreClick}
                  className="border-yellow-300 text-yellow-600 hover:bg-yellow-50 px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10">⚡ See Results in 48 Hours</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-1 relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </motion.svg>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                    style={{ opacity: 0.8 }}
                  />
                </Button>
              </motion.div>
            </motion.div>

            {/* Updated trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8"
            >
              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-green-500"
                  >
                    💰
                  </motion.div>
                  <span>30% cost savings</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-yellow-500"
                  >
                    ⭐
                  </motion.div>
                  <span>20+ clients served</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-blue-500"
                  >
                    🚀
                  </motion.div>
                  <span>2x faster hiring</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content (Animated Logos) */}
          {mounted && (
            <motion.div 
              className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[70vh] relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="absolute inset-0 z-0 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedLogos />
              </motion.div>
              
              {/* Enhanced glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-yellow-100/20 to-transparent pointer-events-none rounded-3xl"
                animate={{
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          )}
        </div>
        
        {/* Subtle banner at bottom with logos */}
        <motion.div 
          className="w-full max-w-4xl mx-auto mb-0 z-20 opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ opacity: useTransform(scrollY, [0, 300], [0.7, 0]) }}
        >
          <div className="text-center">
            <motion.p 
              className="text-xs text-gray-400 flex items-center justify-center gap-2"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="text-yellow-400 text-xs"
              >
                ✨
              </motion.span>
              <span className="text-xs">Trusted by companies worldwide</span>
              <motion.span
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-yellow-400 text-xs"
              >
                ⭐
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;