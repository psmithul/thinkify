"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.7, 0.9], [0.95, 1]);
  
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-white/0 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.01] mix-blend-overlay z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mercor-card p-12 text-center max-w-4xl mx-auto"
          style={{ opacity, scale }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Looking to Build Fast, and Right?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Whether you&apos;re a founder building your MVP, a scale-up hiring engineering leaders, or a VC looking to accelerate your portfolio — Thinkify Labs is your unfair advantage.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="mercor-button px-8 py-6 text-base"
              onClick={() => window.location.href = "mailto:kulkarni.karthik@thinkify.io"}
            >
              Let&apos;s Build Together
            </Button>
            <div className="text-gray-600 flex items-center justify-center mt-4 sm:mt-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                <polyline points="3 7 12 13 21 7"></polyline>
              </svg>
              <span className="font-medium">kulkarni.karthik@thinkify.io</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner; 