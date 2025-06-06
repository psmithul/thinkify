"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Scale with Flexibility",
    description: "Grow or shrink your team whenever you need—add talent on demand or scale back effortlessly. Stay agile as your projects and priorities evolve.",
    highlights: [
      "Add or remove engineers instantly",
      "No long-term commitments required", 
      "Scale up for launches, down for maintenance",
      "Adapt team size to project phases"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9,22 9,12 15,12 15,22"></polyline>
      </svg>
    ),
  },
  {
    title: "We Handle Everything",
    description: "Thinkify takes the headache out of global hiring by connecting you only with vetted, certified experts. No more wrestling with compliance, legal issues, or payments.",
    highlights: [
      "Full compliance & legal handling",
      "Seamless payment processing",
      "Pre-vetted certified experts only",
      "Dedicated hiring manager support"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <path d="M9 9h6v6H9z"></path>
        <path d="m9 1 3 8 3-8"></path>
      </svg>
    ),
  },
  {
    title: "Custom Engagement Models",
    description: "Bring on specialists for specific roles, plug skill gaps, or get entire projects delivered on time. Whether you want to embed talent into your team or hand off a turnkey solution.",
    highlights: [
      "Embed talent in your existing team",
      "Dedicated project delivery teams",
      "Specialist roles & skill gap filling",
      "Turnkey solution development"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
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
    <section id="companies" className="py-20 md:pt-16 md:pb-20 relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/20 to-orange-50/20">
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
          className="absolute top-32 right-10 w-20 h-20 bg-gradient-to-br from-indigo-200 to-rose-200 rounded-full opacity-25"
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
          className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-br from-rose-200 to-orange-200 rounded-full opacity-30"
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
          className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-orange-300 to-indigo-300 rounded-full opacity-20"
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
            className="text-sm font-medium text-rose-600 mb-3 tracking-wide relative"
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
                className="absolute -inset-1 bg-rose-200 rounded-lg opacity-20 -z-10"
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
              className="bg-gradient-to-r from-indigo-600 via-rose-600 via-orange-600 to-indigo-600 bg-[length:300%_100%] bg-clip-text text-transparent relative"
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
              className="relative"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-500 to-orange-500 hover:from-indigo-600 hover:to-orange-600 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl relative overflow-hidden group transition-all duration-300"
                onClick={handleCTAClick}
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
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-indigo-500"
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
                  className="text-orange-600"
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
                  className="text-indigo-500"
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
                  animate={{ y: ["0px", "-3px", "0px"] }}
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

        {/* Innovative Redesigned Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item} 
              className="h-full group"
              whileHover={{ 
                rotateY: 5,
                rotateX: 5,
                z: 50,
                scale: 1.02
              }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Main Card Container */}
              <div className="relative h-full min-h-[480px] overflow-hidden">
                {/* Glassmorphism Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Animated Gradient Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #6366f1, #ec4899, #f97316, #6366f1)",
                      "linear-gradient(90deg, #ec4899, #f97316, #6366f1, #ec4899)",
                      "linear-gradient(135deg, #f97316, #6366f1, #ec4899, #f97316)",
                      "linear-gradient(180deg, #6366f1, #ec4899, #f97316, #6366f1)"
                    ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{
                    padding: "2px",
                    borderRadius: "24px"
                  }}
                >
                  <div className="absolute inset-[2px] bg-white/90 backdrop-blur-xl rounded-[22px]" />
                </motion.div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {[...Array(6)].map((_, particleIndex) => (
                    <motion.div
                      key={particleIndex}
                      className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-orange-400 opacity-0 group-hover:opacity-60"
                      initial={{ 
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        scale: 0
                      }}
                      animate={{
                        y: ["0px", "-20px", "0px"],
                        scale: [0, 1, 0],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{
                        duration: 3 + particleIndex * 0.5,
                        repeat: Infinity,
                        delay: particleIndex * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Content Container */}
                <div className="relative h-full p-8 flex flex-col z-10">
                  {/* Floating Icon Section */}
                  <motion.div 
                    className="relative mb-8 flex justify-start"
                    whileHover={{ 
                      scale: 1.1,
                      rotateZ: 10
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Icon Background Orb */}
                    <motion.div
                      className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        background: [
                          "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
                          "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
                          "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)",
                          "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Icon Container */}
                    <motion.div 
                      className="relative w-20 h-20 bg-gradient-to-br from-indigo-100/80 via-rose-100/60 to-orange-100/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/40"
                      whileHover={{
                        rotateY: 180,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.div
                        className="relative z-10"
                        initial={{ rotateY: 0 }}
                        whileHover={{ rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        {feature.icon}
                      </motion.div>
                      
                      {/* Icon Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/20 to-orange-400/20 blur-xl opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Split Content Layout */}
                  <div className="flex-grow flex flex-col">
                    {/* Title with Diagonal Cut Effect */}
                    <motion.div 
                      className="relative mb-6"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 leading-tight relative z-10"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.title}
                      </motion.h3>
                      
                      {/* Animated Underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ width: 0 }}
                        whileHover={{ width: "60%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                    
                    {/* Description with Hover Reveal */}
                    <motion.div
                      className="relative mb-8 overflow-hidden"
                      initial={{ height: "auto" }}
                    >
                      <motion.p 
                        className="text-gray-600 leading-relaxed relative z-10"
                        initial={{ y: 0 }}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>
                      
                      {/* Background Gradient on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-50/0 via-rose-50/30 to-orange-50/0 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Innovative Benefits Layout */}
                    <div className="mt-auto">
                      <motion.h4 
                        className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.span
                          className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-orange-500 flex items-center justify-center text-white text-xs"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          ✨
                        </motion.span>
                        Key Benefits
                      </motion.h4>
                      
                      {/* Staggered Benefits Grid */}
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        {feature.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            className="relative group/benefit"
                            initial={{ 
                              opacity: 0, 
                              x: highlightIndex % 2 === 0 ? -20 : 20 
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: highlightIndex * 0.1 
                            }}
                            whileHover={{ 
                              scale: 1.02, 
                              x: 5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {/* Morphing Background */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white/50 to-indigo-50/50 rounded-xl border border-indigo-200/30 backdrop-blur-sm"
                              whileHover={{
                                background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(236,72,153,0.1) 50%, rgba(249,115,22,0.1) 100%)"
                              }}
                              transition={{ duration: 0.3 }}
                            />
                            
                            <div className="relative p-4 flex items-center gap-3">
                              {/* Dynamic Icon */}
                              <motion.div 
                                className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold shadow-lg"
                                whileHover={{ 
                                  rotateY: 360,
                                  scale: 1.1
                                }}
                                transition={{ duration: 0.6 }}
                              >
                                {highlightIndex === 0 && "⚡"}
                                {highlightIndex === 1 && "🎯"}
                                {highlightIndex === 2 && "🔧"}
                                {highlightIndex === 3 && "🚀"}
                              </motion.div>
                              
                              {/* Benefit Text */}
                              <motion.p 
                                className="text-sm font-medium text-gray-700 flex-grow"
                                whileHover={{ color: "#374151" }}
                              >
                                {highlight}
                              </motion.p>
                              
                              {/* Arrow Indicator */}
                              <motion.div
                                className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 to-orange-400 flex items-center justify-center text-white text-xs opacity-0 group-hover/benefit:opacity-100"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                              >
                                →
                              </motion.div>
                            </div>
                            
                            {/* Glowing Edge Effect */}
                            <motion.div
                              className="absolute inset-0 rounded-xl border-2 border-transparent opacity-0 group-hover/benefit:opacity-100"
                              style={{
                                background: "linear-gradient(45deg, transparent, rgba(99,102,241,0.3), transparent, rgba(249,115,22,0.3), transparent)",
                                backgroundSize: "400% 400%"
                              }}
                              animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Corner Accent Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.div
                  className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-rose-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 0.8, 1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* India & USA Presence Section */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section container with enhanced design */}
          <div className="relative bg-gradient-to-br from-white via-indigo-50/30 to-orange-50/20 rounded-3xl p-12 border border-rose-200/30 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
              }}
            />
            
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Enhanced Badge */}


              <motion.h3
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  animate={{ 
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="bg-gradient-to-r from-indigo-600 via-rose-600 via-orange-600 to-indigo-600 bg-[length:300%_100%] bg-clip-text text-transparent"
                >
                  Two Powerhouse Markets,
                </motion.span>
                <br />
                <motion.span
                  className="text-gray-900"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  One Elite Talent Pool
                </motion.span>
              </motion.h3>
              
              <motion.p 
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Access the best developers from India and the USA—all in one platform
              </motion.p>
            </motion.div>

            {/* Enhanced Market Stats Grid */}
            <motion.div
              className="grid md:grid-cols-4 gap-6 mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { 
                  icon: "🇮🇳", 
                  number: "1000+", 
                  label: "Elite Engineers", 
                  color: "text-indigo-600",
                  description: "Top 1% Indian talent",
                  gradient: "from-rose-500 to-pink-500"
                },
                { 
                  icon: "🇺🇸", 
                  number: "500+", 
                  label: "Senior Developers", 
                  color: "text-indigo-600",
                  description: "Proven US expertise",
                  gradient: "from-indigo-500 to-orange-500"
                },
                { 
                  icon: "⚡", 
                  number: "48h", 
                  label: "Time to Hire", 
                  color: "text-indigo-600",
                  description: "Lightning fast matching",
                  gradient: "from-rose-500 to-orange-500"
                },
                { 
                  icon: "💰", 
                  number: "60%", 
                  label: "Cost Savings", 
                  color: "text-indigo-600",
                  description: "Without quality compromise",
                  gradient: "from-rose-500 to-orange-500"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100/50 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    className="text-4xl mb-3"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div
                    className={`text-3xl font-bold mb-2 ${stat.color}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div className="relative inline-block">
                <motion.button
                  onClick={() => window.open('https://connect.thinkify.io', '_blank')}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-rose-500 to-orange-600 hover:from-indigo-600 hover:via-rose-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="text-xl"
                    >
                      🌟
                    </motion.span>
                    Start Your Global Journey Today
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-xl"
                    >
                      →
                    </motion.span>
                  </span>
                  
                  {/* Animated background overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-indigo-500 opacity-0 group-hover:opacity-30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ForCompanies;