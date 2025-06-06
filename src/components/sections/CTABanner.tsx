"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/utils";

const CTABanner = () => {
  const { scrollYProgress } = useScroll();
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const y = useTransform(scrollYProgress, [0.7, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  
  const handleEmailClick = () => {
    window.open('https://connect.thinkify.io', '_blank');
  };

  const handleWhatsAppClick = () => {
    openWhatsApp("Hi! I'm interested in Thinkify's services and would like to discuss our engineering needs.");
  };

  const metrics = [
    { value: "500+", label: "Engineers Deployed", icon: "👨‍💻" },
    { value: "150+", label: "Projects Delivered", icon: "🚀" },
    { value: "25+", label: "Countries Served", icon: "🌍" },
    { value: "48hr", label: "Average Onboarding", icon: "⚡" }
  ];

  const benefits = [
    "Pre-vetted by ex-FAANG engineers",
    "Start shipping code in 48 hours", 
    "Full compliance & legal handled",
    "24/7 global support coverage"
  ];

  // Rotate metrics every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-yellow-50/30">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.06) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl transform rotate-45" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-16 w-16 h-16"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full" />
        </motion.div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y, opacity }}
      >
        {/* Main CTA Container */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glassmorphism container */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-transparent to-orange-500/20 rounded-3xl" />
            
            <div className="relative p-8 md:p-12">
              {/* Split Layout */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Section - Content */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border border-yellow-200/50"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="text-lg"
                    >
                      ⚡
                    </motion.span>
                    <span className="text-sm font-semibold text-gray-700">
                      Ready to Scale Your Team?
                    </span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <span className="block">Get World-Class</span>
                    <motion.span
                      className="block bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 bg-[length:200%_100%] bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      Engineers in 48hrs
                    </motion.span>
                  </motion.h2>

                  {/* Benefits List */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <motion.div
                          className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.button
                      onClick={handleWhatsAppClick}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <motion.svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.687"/>
                      </motion.svg>
                      Quick Chat
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Right Section - Interactive Metrics */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Dynamic Metrics Display */}
                  <div className="relative">
                    {/* Main Metric Card */}
                    <motion.div
                      key={currentMetric}
                      className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl text-center"
                      initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className="text-6xl mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {metrics[currentMetric].icon}
                      </motion.div>
                      <motion.div
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {metrics[currentMetric].value}
                      </motion.div>
                      <div className="text-gray-600 font-medium text-lg">
                        {metrics[currentMetric].label}
                      </div>
                    </motion.div>

                    {/* Metric Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-6">
                      {metrics.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentMetric(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentMetric 
                              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 scale-125' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>

                    {/* Floating mini metrics */}
                    <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      24/7 Support
                    </div>
                  </div>

                  {/* Background decoration */}
                  <motion.div
                    className="absolute -inset-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl -z-10"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <motion.div
                className="mt-12 pt-8 border-t border-gray-200/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                  {[
                    { icon: "🏆", text: "Industry Leaders Trust Us" },
                    { icon: "⚡", text: "48hr Delivery Guarantee" },
                    { icon: "🔒", text: "Enterprise Security" },
                    { icon: "🌍", text: "Global 24/7 Support" }
                  ].map((trust, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className="text-lg"
                      >
                        {trust.icon}
                      </motion.span>
                      <span className="font-medium">{trust.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTABanner; 