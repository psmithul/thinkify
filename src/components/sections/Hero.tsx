"use client";

import React, { useEffect, useState, RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import SplineScene from "@/components/features/SplineScene";

interface HeroProps {
  persistentSpline?: RefObject<HTMLDivElement | null>;
}

const Hero: React.FC<HeroProps> = ({ persistentSpline }) => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/80 via-indigo-950/80 to-blue-950/80 z-0" />
      
      {/* Content Container - with Parallax */}
      <motion.div 
        className="container mx-auto px-4 py-12 sm:py-20 relative z-10 flex flex-col md:flex-row items-center justify-between"
        style={{ y, opacity }}
      >
        {/* Left Content - Now we'll always show this first and make it wider on mobile */}
        <motion.div 
          className="w-full md:w-3/5 text-left pr-0 md:pr-8 mb-8 md:mb-0"
          style={{ scale }}
        >
          <div className="glass-card p-8">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Ex-Flipkart engineers finding your next tech stars
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              We screen candidates so your startup doesn't have to. Elite engineers, zero hassle.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-purple-700 hover:bg-white/90 px-8 text-base font-medium"
              >
                Hire Talent
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Spline Scene (only if not using persistent one) */}
        {!persistentSpline && mounted && (
          <div className="w-full md:w-2/5 relative md:h-[600px] h-[300px]">
            <div className="absolute inset-0 z-0 overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-950/30 z-10 pointer-events-none mix-blend-multiply" />
              <SplineScene className="absolute inset-0 mix-blend-lighten" enableScrollRotation={false} />
            </div>
          </div>
        )}
        
        {/* If we're using the persistent Spline, we still need this for layout purposes but can make it smaller */}
        {persistentSpline && (
          <div className="hidden md:block md:w-2/5 relative md:h-[600px]">
            {/* Empty div - the persistentSpline handles rendering */}
          </div>
        )}
      </motion.div>
      
      {/* Subtle scroll indicator - stays visible longer */}
      <motion.div 
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ opacity: useTransform(scrollY, [0, 300], [1, 0]) }}
      >
        <div className="flex flex-col items-center glass p-3 rounded-full">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </div>
      </motion.div>
      
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