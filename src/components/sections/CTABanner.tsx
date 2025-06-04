"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/utils";

const CTABanner = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.7, 0.9], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0.7, 0.9], [50, 0]);
  
  const handleEmailClick = () => {
    window.open('https://connect.thinkify.io', '_blank');
  };

  const handleWhatsAppClick = () => {
    openWhatsApp("Hi! I'm interested in Thinkify Labs' services and would like to discuss our engineering needs.");
  };

  const handlePhoneClick = () => {
    window.open('https://connect.thinkify.io', '_blank');
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-50/40 via-white to-orange-50/40"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(251, 191, 36, 0.04), rgba(255, 255, 255, 1), rgba(251, 146, 60, 0.04))",
              "linear-gradient(135deg, rgba(251, 146, 60, 0.04), rgba(255, 255, 255, 1), rgba(251, 191, 36, 0.04))",
              "linear-gradient(135deg, rgba(251, 191, 36, 0.04), rgba(255, 255, 255, 1), rgba(251, 146, 60, 0.04))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Enhanced floating elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-40"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full opacity-35"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mercor-card p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          style={{ opacity, scale, y }}
        >
          {/* Enhanced card background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-50/60 via-white to-orange-50/60 opacity-60"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(251, 191, 36, 0.04), rgba(255, 255, 255, 1), rgba(251, 146, 60, 0.04))",
                "linear-gradient(45deg, rgba(251, 146, 60, 0.04), rgba(255, 255, 255, 1), rgba(251, 191, 36, 0.04))",
                "linear-gradient(45deg, rgba(251, 191, 36, 0.04), rgba(255, 255, 255, 1), rgba(251, 146, 60, 0.04))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900 bg-[length:200%_100%] bg-clip-text text-transparent relative"
            >
              Looking to Build Fast, and Right?
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Whether you&apos;re a founder building your MVP, a scale-up hiring engineering leaders, or a VC looking to accelerate your portfolio — Thinkify Labs is your unfair advantage.
            </motion.span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 justify-center relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button 
                size="lg" 
                onClick={handleEmailClick}
                className="mercor-button px-8 py-6 text-base relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ⚡
                  </motion.span>
                  Let&apos;s Build Together
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div 
                className="text-gray-600 flex items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                onClick={handleEmailClick}
              >
                <motion.div 
                  className="h-10 w-10 mr-3 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "#FEF3C7",
                    rotate: 360 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                    <polyline points="3 7 12 13 21 7"></polyline>
                  </svg>
                </motion.div>
                <div>
                  <div className="font-medium group-hover:text-yellow-600 transition-colors">Get Started Online</div>
                  <div className="text-sm text-gray-500">Visit our contact portal</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="text-gray-600 flex items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                onClick={handlePhoneClick}
              >
                <motion.div 
                  className="h-10 w-10 mr-3 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "#DBEAFE",
                    rotate: 15 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </motion.div>
                <div>
                  <div className="font-medium group-hover:text-blue-600 transition-colors">Schedule a Call</div>
                  <div className="text-sm text-gray-500">Book a consultation</div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced WhatsApp Quick Action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <motion.svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.687"/>
                </motion.svg>
                <span className="relative z-10">Chat on WhatsApp</span>
                <motion.div
                  className="absolute inset-0 bg-green-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ opacity: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-yellow-500"
                >
                  ⭐
                </motion.span>
                <span>50+ Happy Clients</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-green-500"
                >
                  ✅
                </motion.span>
                <span>100% Success Rate</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-blue-500"
                >
                  🚀
                </motion.span>
                <span>Fast Delivery</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-purple-500"
                >
                  🏆
                </motion.span>
                <span>Award Winning</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner; 