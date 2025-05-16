"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import SplineScene from "@/components/features/SplineScene";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect values
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
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

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-white z-0" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.01] mix-blend-overlay z-0"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10 flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex flex-col lg:flex-row items-center flex-grow">
          {/* Left Content (Text) */}
          <motion.div 
            className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-left"
            style={{ scale }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p 
              className="text-sm font-medium text-indigo-600 mb-3 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Thinkify Labs • <span className="underline cursor-pointer">For companies</span>
            </motion.p>

            <motion.h1 
              className="mercor-heading text-gray-900 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Engineering Excellence for Ambitious Startups
            </motion.h1>
              
            <motion.p 
              className="mercor-subheading text-gray-600 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              At Thinkify Labs, we help visionary startups hire exceptional engineering talent and build their Version 1 — the foundation of world-changing products.
            </motion.p>
              
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-indigo-600 text-white hover:bg-indigo-700 font-medium px-8 py-3 rounded-full shadow-md"
              >
                Let&apos;s Build Together
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full font-medium flex items-center gap-2"
              >
                What We Do
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content (3D Model) */}
          {mounted && (
            <motion.div 
              className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[70vh] relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="absolute inset-0 z-0 overflow-visible">
                <SplineScene className="absolute inset-0 h-full" enableScrollRotation={false} />
              </div>
              
              {/* Optional light gradient to help blend the model */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
            </motion.div>
          )}
        </div>
        
        {/* Subtle banner at bottom with logos */}
        <motion.div 
          className="w-full max-w-4xl mx-auto mb-4 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ opacity: useTransform(scrollY, [0, 300], [1, 0]) }}
        >
          <div className="text-center">
            <p className="text-sm text-gray-500">Trusted by companies worldwide</p>
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