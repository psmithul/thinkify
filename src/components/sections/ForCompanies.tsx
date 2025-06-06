"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Engineers Vet Engineers. Period.",
    description: "Our ex-lead engineers from Google, Meta, and unicorn startups personally evaluate every developer. No HR screening - just deep technical assessment by people who've built world-class engineering teams.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11.7l2.5 2.5 4-4"></path>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      </svg>
    ),
  },
  {
    title: "Ship Production Code Day One.",
    description: "Skip the ramp-up time. Our engineers have already proven they can architect, code, and deploy at scale. They're not just developers - they're problem solvers who understand your entire tech stack.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 17.2a3 3 0 1 0 0-5.8V5.5a3 3 0 1 1 6 0v.8M15 8a3 3 0 1 0 0 5.8v.7a3 3 0 1 1-6 0v-.8"></path>
      </svg>
    ),
  },
  {
    title: "Engineering Leadership You Can Trust.",
    description: "Built by engineers who've scaled teams from 10 to 1000+. We understand your technical challenges because we've faced them. Every placement is backed by our engineering expertise guarantee.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    ),
  },
];

const ForCompanies = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleCTAClick = () => {
    window.open('https://connect.thinkify.io', '_blank');
  };

  return (
    <section id="companies" className="py-20 md:pt-16 md:pb-20 relative overflow-hidden bg-gradient-to-br from-white via-yellow-50/20 to-orange-50/20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.01] mix-blend-overlay"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 right-10 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-25"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -6, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, 12, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-20"
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Vertical Layout - Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            className="text-sm font-medium text-yellow-600 mb-3 tracking-wide relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              ⚡ Tech Talent, Curated by Engineering Veterans
              <motion.div
                className="absolute -inset-1 bg-yellow-200 rounded-lg opacity-20 -z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-gradient-to-r from-gray-900 via-yellow-600 to-orange-600 bg-[length:200%_100%] bg-clip-text text-transparent relative"
            >
              Real Engineers. Real Code. Real Results.
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Our ex-lead engineers have been in the trenches—building, scaling, and shipping. That's who vets every developer we send.
            </motion.span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl relative overflow-hidden group transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-lg"
                  >
                    🎯
                  </motion.span>
                  Secure Vetted Engineers Now
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
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="text-blue-500"
                >
                  ⚙️
                </motion.span>
                <span>40+ Tech Stacks</span>
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
                  🎯
                </motion.span>
                <span>Top 2% Pass Our Vetting process</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-orange-500"
                >
                  ⚡
                </motion.span>
                <span>Ready in 72 Hours</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="mercor-card h-full overflow-hidden text-center relative group bg-white/80 backdrop-blur-sm border border-yellow-100 hover:border-yellow-200 transition-all duration-300 flex flex-col">
                  {/* Enhanced card background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 via-white to-orange-50/30 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardHeader className="pb-4 relative z-10 flex-shrink-0">
                    <motion.div 
                      className="mb-4 flex justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-3 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full border-2 border-yellow-200 group-hover:border-yellow-300 transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ color: "#F59E0B" }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardTitle className="text-xl text-gray-900 min-h-[2.5rem] flex items-center justify-center">{feature.title}</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="relative z-10 flex-grow flex items-center">
                    <motion.p 
                      className="text-sm text-gray-600 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, rgba(245, 158, 11, 0.1), transparent)`
                    }}
                  />
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ForCompanies; 