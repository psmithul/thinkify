"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import SplineScene from "@/components/features/SplineScene";
import { createEmailTemplate, smoothScrollTo } from "@/lib/utils";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect values
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);
  
  // Handle mounting for client-side effects
  useEffect(() => {
    setMounted(true);
    
    // Additional check to remove any Spline watermarks that might persist
    const removeWatermarks = () => {
      const watermarks = document.querySelectorAll(
        '.spline-watermark, [data-name="watermark"], [class*="watermark"], a[href*="spline.design"]'
      );
      watermarks.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'none';
          el.style.opacity = '0';
          el.style.visibility = 'hidden';
        }
      });
    };
    
    // Run multiple times to catch any that load after initial render
    removeWatermarks();
    const timers = [
      setTimeout(removeWatermarks, 500),
      setTimeout(removeWatermarks, 1500),
      setTimeout(removeWatermarks, 3000)
    ];
    
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const handleCTAClick = () => {
    window.location.href = createEmailTemplate("Partnership Inquiry - Let's Build Together", "Hero Section");
  };

  const handleLearnMoreClick = () => {
    smoothScrollTo('companies');
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-white z-0" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.01] mix-blend-overlay z-0"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-25"
        />
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10 flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex flex-col lg:flex-row items-center flex-grow">
          {/* Left Content (Text) */}
          <motion.div 
            className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-left"
            style={{ scale, opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              className="text-sm font-medium text-indigo-600 mb-3 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Thinkify Labs
              </motion.span>
              {" • "}
              <span className="underline cursor-pointer hover:text-indigo-700 transition-colors">
                For companies
              </span>
            </motion.p>

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
              >
                Engineering Excellence
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                for Ambitious Startups
              </motion.span>
            </motion.h1>
              
            <motion.p 
              className="mercor-subheading text-gray-600 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Thinkify Labs, we help visionary startups hire exceptional engineering talent and build their Version 1 — the foundation of world-changing products.
            </motion.p>
              
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={handleCTAClick}
                  className="bg-indigo-600 text-white hover:bg-indigo-700 font-medium px-8 py-3 rounded-full shadow-lg relative overflow-hidden group transition-all duration-300"
                >
                  <span className="relative z-10">Let&apos;s Build Together</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                    style={{ opacity: 0.1 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleLearnMoreClick}
                  className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 group"
                >
                  Who we are
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
                    className="ml-1"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </motion.svg>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content (3D Model) */}
          {mounted && (
            <motion.div 
              className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[70vh] relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="absolute inset-0 z-0 overflow-visible"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <SplineScene className="absolute inset-0 h-full" enableScrollRotation={false} />
              </motion.div>
              
              {/* Optional light gradient to help blend the model */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
            </motion.div>
          )}
        </div>
        
        {/* Subtle banner at bottom with logos */}
        <motion.div 
          className="w-full max-w-4xl mx-auto mb-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ opacity: useTransform(scrollY, [0, 300], [1, 0]) }}
        >
          <div className="text-center">
            <motion.p 
              className="text-sm text-gray-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Trusted by companies worldwide
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      <style jsx global>{`
        /* Additional styles to hide Spline branding */
        .spline-watermark,
        [data-name="watermark"],
        [class*="watermark"],
        a[href*="spline.design"],
        div[class*="builder"],
        div[class*="Watermark"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          height: 0 !important;
          width: 0 !important;
          overflow: hidden !important;
          position: absolute !important;
          top: -9999px !important;
          left: -9999px !important;
        }
      `}</style>
    </section>
  );
};

export default Hero; 