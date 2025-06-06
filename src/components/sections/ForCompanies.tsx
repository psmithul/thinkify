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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full group"
              >
                <Card className="h-full bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-white to-orange-50/30 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Top accent line */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />
                  
                  <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    {/* Icon Section */}
                    <motion.div 
                      className="mb-6 flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                          {feature.icon}
                        </div>
                        {/* Icon background glow */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="flex-grow flex flex-col text-center">
                      {/* Title - Single Line */}
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-4 leading-tight truncate"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.title}
                      </motion.h3>
                      
                      {/* Description */}
                      <motion.p 
                        className="text-gray-600 leading-relaxed mb-6 text-sm"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>

                      {/* Enhanced Key Benefits Section */}
                      <div className="mt-auto">
                        <motion.h4 
                          className="text-sm font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2"
                          initial={{ opacity: 0.8 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="text-yellow-600"
                          >
                            ⭐
                          </motion.span>
                          Key Benefits
                        </motion.h4>
                        
                        <motion.div
                          className="grid grid-cols-2 gap-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {feature.highlights.map((highlight, highlightIndex) => (
                            <motion.div
                              key={highlightIndex}
                              className="relative group"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: highlightIndex * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/50 rounded-xl p-3 text-center shadow-sm group-hover:shadow-md transition-all duration-300">
                                {/* Icon based on benefit type */}
                                <motion.div 
                                  className="text-lg mb-1"
                                  animate={{ 
                                    scale: [1, 1.1, 1] 
                                  }}
                                  transition={{ 
                                    duration: 2 + highlightIndex * 0.5,
                                    repeat: Infinity,
                                    delay: highlightIndex * 0.3
                                  }}
                                >
                                  {highlightIndex === 0 && "⚡"}
                                  {highlightIndex === 1 && "🎯"}
                                  {highlightIndex === 2 && "🔧"}
                                  {highlightIndex === 3 && "🚀"}
                                </motion.div>
                                
                                <p className="text-xs font-medium text-gray-700 leading-tight">
                                  {highlight}
                                </p>
                                
                                {/* Subtle gradient overlay on hover */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-yellow-100/0 via-yellow-100/30 to-orange-100/0 rounded-xl opacity-0 group-hover:opacity-100"
                                  transition={{ duration: 0.3 }}
                                />
                              </div>
                              
                              {/* Floating micro animation */}
                              <motion.div
                                className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                                animate={{ 
                                  scale: [0, 1, 0],
                                  rotate: [0, 180, 360]
                                }}
                                transition={{ 
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: highlightIndex * 0.2
                                }}
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Hover border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-200/50"
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
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
          <div className="relative bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/20 rounded-3xl p-12 border border-yellow-200/30 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
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
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 via-white to-green-100 rounded-full border-2 border-gradient-to-r from-blue-200 to-green-200 mb-8 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="text-2xl"
                >
                  🌐
                </motion.span>
                <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Bridging India & USA Excellence
                </span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-lg"
                >
                  ⚡
                </motion.span>
              </motion.div>

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
                  className="bg-gradient-to-r from-blue-600 via-purple-600 via-green-600 to-blue-600 bg-[length:300%_100%] bg-clip-text text-transparent"
                >
                  Two Powerhouse Markets,
                </motion.span>
                <br />
                <motion.span
                  animate={{ 
                    backgroundPosition: ["100%", "0%", "100%"]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                  className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-[length:200%_100%] bg-clip-text text-transparent"
                >
                  One Unified Vision
                </motion.span>
              </motion.h3>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We don't just connect talent across borders—we create <span className="font-semibold text-gray-800">strategic partnerships</span> that leverage India's engineering excellence and America's innovation ecosystem. Experience the perfect blend of <span className="text-orange-600 font-semibold">world-class talent</span> and <span className="text-blue-600 font-semibold">global market expertise</span>.
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
                  color: "text-orange-600",
                  description: "Top 1% Indian talent",
                  gradient: "from-orange-500 to-red-500"
                },
                { 
                  icon: "🇺🇸", 
                  number: "250+", 
                  label: "US Success Stories", 
                  color: "text-blue-600",
                  description: "Startups to Fortune 500",
                  gradient: "from-blue-500 to-purple-500"
                },
                { 
                  icon: "⚡", 
                  number: "72hrs", 
                  label: "Time to Deploy", 
                  color: "text-yellow-600",
                  description: "From match to production",
                  gradient: "from-yellow-500 to-orange-500"
                },
                { 
                  icon: "🎯", 
                  number: "99.2%", 
                  label: "Client Satisfaction", 
                  color: "text-green-600",
                  description: "Consistent excellence",
                  gradient: "from-green-500 to-emerald-500"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/50 shadow-xl relative overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  {/* Background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-800 font-semibold text-base mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {stat.description}
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ scale: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Market Highlights */}
            <motion.div
              className="grid md:grid-cols-2 gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* India Market Excellence */}
              <motion.div
                className="space-y-8 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Enhanced Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl relative overflow-hidden group"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    🇮🇳
                  </motion.div>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-800 mb-1">India Market</h4>
                    <p className="text-orange-600 font-semibold">Engineering Powerhouse</p>
                  </div>
                </div>
                
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed mb-6"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Home to the world's largest pool of <span className="font-semibold text-gray-800">STEM graduates</span>, India is where innovation meets excellence. We tap into tier-1 engineering colleges, tech hubs, and startup ecosystems to bring you the <span className="text-orange-600 font-semibold">cream of the crop</span>.
                </motion.p>
                
                {/* Enhanced Capabilities Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { 
                      icon: "🏛️", 
                      title: "Legal & Compliance", 
                      desc: "Full regulatory support",
                      color: "from-orange-100 to-red-100"
                    },
                    { 
                      icon: "🌟", 
                      title: "Startup Ecosystem", 
                      desc: "Bangalore to Mumbai network",
                      color: "from-yellow-100 to-orange-100"
                    },
                    { 
                      icon: "🎯", 
                      title: "Elite Talent Pools", 
                      desc: "IIT, NIT, and top-tier grads",
                      color: "from-red-100 to-orange-100"
                    },
                    { 
                      icon: "🕐", 
                      title: "Timezone Advantage", 
                      desc: "IST overlap optimization",
                      color: "from-orange-100 to-yellow-100"
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className={`bg-gradient-to-br ${item.color} p-4 rounded-xl border border-orange-200/30 shadow-sm group hover:shadow-md transition-all duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <motion.div 
                        className="text-2xl mb-2"
                        animate={{ 
                          rotate: [0, 10, -10, 0] 
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h5>
                      <p className="text-gray-600 text-xs leading-tight">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Floating decorative element */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>

              {/* USA Market Innovation */}
              <motion.div
                className="space-y-8 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Enhanced Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl relative overflow-hidden group"
                    whileHover={{ rotate: -360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                    🇺🇸
                  </motion.div>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-800 mb-1">USA Market</h4>
                    <p className="text-blue-600 font-semibold">Innovation Catalyst</p>
                  </div>
                </div>
                
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed mb-6"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  The epicenter of <span className="font-semibold text-gray-800">global innovation</span>, where unicorns are born and industries transformed. We bridge Indian engineering excellence with American business acumen, creating partnerships that scale from <span className="text-blue-600 font-semibold">Silicon Valley to Wall Street</span>.
                </motion.p>
                
                {/* Enhanced Capabilities Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { 
                      icon: "🌉", 
                      title: "Silicon Valley Network", 
                      desc: "Direct startup connections",
                      color: "from-blue-100 to-purple-100"
                    },
                    { 
                      icon: "🕒", 
                      title: "US Timezone Sync", 
                      desc: "EST/PST coverage model",
                      color: "from-purple-100 to-blue-100"
                    },
                    { 
                      icon: "🎭", 
                      title: "Cultural Integration", 
                      desc: "Cross-cultural excellence",
                      color: "from-blue-100 to-indigo-100"
                    },
                    { 
                      icon: "🚀", 
                      title: "Remote-First Models", 
                      desc: "Distributed team mastery",
                      color: "from-indigo-100 to-blue-100"
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className={`bg-gradient-to-br ${item.color} p-4 rounded-xl border border-blue-200/30 shadow-sm group hover:shadow-md transition-all duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <motion.div 
                        className="text-2xl mb-2"
                        animate={{ 
                          rotate: [0, -10, 10, 0] 
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h5>
                      <p className="text-gray-600 text-xs leading-tight">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Floating decorative element */}
                <motion.div
                  className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
              </motion.div>
            </motion.div>

            {/* Market Flags Display & CTA */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <motion.h4 
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                  animate={{ 
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Ready to Scale Across <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-[length:200%_100%] bg-clip-text text-transparent">Two Continents</span>?
                </motion.h4>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Join <strong className="text-gray-800">250+ companies</strong> in India & USA who've transformed their engineering capabilities with our vetted talent network.
                </p>
              </motion.div>
              
              <motion.div
                className="flex justify-center gap-12 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                {[
                  { flag: "🇮🇳", name: "India", market: "Engineering Hub", clients: "150+ Local Clients" },
                  { flag: "🇺🇸", name: "United States", market: "Innovation Center", clients: "100+ US Partners" }
                ].map((country, index) => (
                  <motion.div
                    key={country.name}
                    className="flex flex-col items-center gap-3 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg relative group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    animate={{
                      y: [0, -8, 0]
                    }}
                    transition={{
                      hover: { duration: 0.3 },
                      y: { 
                        duration: 4 + index, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 2
                      }
                    }}
                  >
                    {/* Floating decoration */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: [0, 1, 0],
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    
                    <span className="text-6xl mb-2">{country.flag}</span>
                    <span className="text-xl font-bold text-gray-800">{country.name}</span>
                    <span className="text-sm font-semibold text-gray-600">{country.market}</span>
                    <span className="text-xs text-gray-500 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full">
                      {country.clients}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <motion.button
                  onClick={() => window.open('https://connect.thinkify.io', '_blank')}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500 hover:from-orange-600 hover:via-yellow-600 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="text-xl"
                    >
                      🚀
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
                  
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                    style={{ opacity: 0.3 }}
                  />
                </motion.button>
                
                <motion.p 
                  className="text-sm text-gray-500 mt-4"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ⚡ Get matched with pre-vetted engineers in 72 hours
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ForCompanies; 