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
    { value: "500+", label: "Engineers Deployed", icon: "👨‍💻", color: "from-blue-500 to-purple-600" },
    { value: "150+", label: "Projects Delivered", icon: "🚀", color: "from-green-500 to-emerald-600" },
    { value: "2", label: "Key Markets (India & USA)", icon: "🌏", color: "from-orange-500 to-red-600" },
    { value: "48hr", label: "Average Onboarding", icon: "⚡", color: "from-yellow-500 to-orange-600" }
  ];

  const keyBenefits = [
    { 
      icon: "🎯", 
      title: "Pre-Vetted Excellence", 
      description: "Every engineer tested by ex-FAANG leads",
      gradient: "from-indigo-500 to-purple-600"
    },
    { 
      icon: "⚡", 
      title: "Lightning Fast", 
      description: "Start shipping code in 48 hours",
      gradient: "from-yellow-500 to-orange-600"
    },
    { 
      icon: "🛡️", 
      title: "Full Compliance", 
      description: "Legal & security handled completely",
      gradient: "from-green-500 to-teal-600"
    },
    { 
      icon: "🌍", 
      title: "India & USA Focus", 
      description: "Deep market expertise, 24/7 support",
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  // Rotate metrics every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
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
          {/* Hero section */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30 mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >
                🚀
              </motion.span>
              <span className="text-lg font-semibold text-white">
                Ready to Scale Your Engineering Team?
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Get World-Class</span>
              <motion.span
                className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-[length:200%_100%] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Engineers in 48hrs
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pre-vetted by ex-FAANG engineers. Start shipping code immediately. 
              Serving India & USA with 24/7 support.
            </motion.p>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Benefits Grid */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Why Choose Thinkify?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h4 className="text-white font-bold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    onClick={handleEmailClick}
                    className="w-full px-8 py-6 text-lg font-bold bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl"
                      >
                        🎯
                      </motion.span>
                      Start Your Project
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                      style={{ opacity: 0.3 }}
                    />
                  </Button>
                </motion.div>

                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-6 text-lg font-bold bg-white/10 backdrop-blur-sm text-white rounded-2xl border-2 border-white/20 hover:border-green-400/50 hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                >
                  <motion.svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="#25D366"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.687"/>
                  </motion.svg>
                  Quick Chat
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right: Dynamic Metrics Display */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Main Metric Card */}
              <div className="relative">
                <motion.div
                  key={currentMetric}
                  className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl text-center relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${metrics[currentMetric].color} opacity-10`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <motion.div
                    className="text-6xl mb-6 relative z-10"
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {metrics[currentMetric].icon}
                  </motion.div>
                  
                  <motion.div
                    className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${metrics[currentMetric].color} bg-clip-text text-transparent mb-3`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {metrics[currentMetric].value}
                  </motion.div>
                  
                  <div className="text-white/90 font-medium text-xl relative z-10">
                    {metrics[currentMetric].label}
                  </div>
                </motion.div>

                {/* Metric Navigation */}
                <div className="flex justify-center gap-3 mt-8">
                  {metrics.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentMetric(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentMetric 
                          ? `bg-gradient-to-r ${metrics[index].color} scale-125 shadow-lg` 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      whileHover={{ scale: 1.4 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  24/7 Support
                </motion.div>
              </div>

              {/* Background decoration */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-3xl -z-10 border border-white/5"
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotate: [0, 0.5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Bottom trust indicators */}
          <motion.div
            className="mt-20 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/70">
              {[
                { icon: "🏆", text: "Industry Leaders Trust Us" },
                { icon: "⚡", text: "48hr Delivery Guarantee" },
                { icon: "🔒", text: "Enterprise Security" },
                { icon: "🇮🇳🇺🇸", text: "India & USA Focused" }
              ].map((trust, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer"
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
                    className="text-xl group-hover:scale-125 transition-transform"
                  >
                    {trust.icon}
                  </motion.span>
                  <span className="font-medium group-hover:text-white transition-colors">{trust.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTABanner; 