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
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 to-purple-950/80 z-0"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-700/20 blur-3xl rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-700/20 blur-3xl rounded-full"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, scale }}
      >
        <motion.div 
          className="glass-card p-10 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let ex-Flipkart engineers build your technical team
              </h2>
              <p className="text-white/90 text-lg">
                Stop spending hours on technical interviews. Our team identifies the engineers your startup actually needs.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-purple-700 hover:bg-white/90 px-8 py-6 text-lg font-medium shadow-lg"
              >
                Hire Engineers
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTABanner; 