"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.7, 0.9], [0.9, 1]);
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A6E3E9]/70 to-[#E3FDFD]/90 z-0"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#71C9CE]/20 blur-3xl rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#0C6980]/10 blur-3xl rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="glass-card p-10 rounded-2xl text-center max-w-4xl mx-auto"
          style={{ opacity, scale }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[#0C6980]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to hire top technical talent?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-[#0C6980]/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let&apos;s find you vetted engineers who can hit the ground running. No more endless interviews or disappointing hires.
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
              className="bg-[#0C6980] text-white hover:bg-[#0C6980]/90"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#71C9CE] text-[#0C6980] hover:bg-[#71C9CE]/20"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner; 