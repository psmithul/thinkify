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

                      {/* Highlights Section */}
                      <div className="mt-auto">
                        <motion.h4 
                          className="text-sm font-semibold text-yellow-600 mb-3"
                          initial={{ opacity: 0.8 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          Key Benefits:
                        </motion.h4>
                        <motion.ul
                          className="space-y-2 text-left"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {feature.highlights.map((highlight, highlightIndex) => (
                            <motion.li
                              key={highlightIndex}
                              className="text-gray-600 text-sm flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: highlightIndex * 0.1 }}
                            >
                              <span className="text-yellow-500 mr-2 mt-1 text-xs">•</span>
                              {highlight}
                            </motion.li>
                          ))}
                        </motion.ul>
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
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full border border-blue-200/50 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="text-lg"
                >
                  🌐
                </motion.span>
                <span className="text-sm font-medium text-gray-700">India & USA Expertise</span>
              </motion.div>

              <motion.h3
                className="text-4xl md:text-5xl font-bold mb-4"
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
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-[length:200%_100%] bg-clip-text text-transparent"
                >
                  Serving India & USA Markets
                </motion.span>
              </motion.h3>
              
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We specialize in connecting top Indian engineering talent with innovative companies in both Indian and US markets.
              </motion.p>
            </motion.div>

            {/* Market Stats Grid */}
            <motion.div
              className="grid md:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { icon: "🇮🇳", number: "500+", label: "Engineers in India", color: "text-orange-600" },
                { icon: "🇺🇸", number: "100+", label: "US Clients Served", color: "text-blue-600" },
                { icon: "⏰", number: "24/7", label: "India-US Support", color: "text-purple-600" },
                { icon: "🚀", number: "200+", label: "Projects Delivered", color: "text-green-600" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="text-4xl mb-3"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Market Highlights */}
            <motion.div
              className="grid md:grid-cols-2 gap-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* India Market */}
              <motion.div
                className="space-y-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    🇮🇳
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-800">India Market</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Deep expertise in the Indian tech ecosystem. We understand local talent, market dynamics, and business culture.
                </p>
                <ul className="space-y-2">
                  {[
                    "Local compliance & legal support",
                    "Indian startup ecosystem expertise",
                    "Bangalore, Hyderabad, Pune talent pools",
                    "IST timezone advantages"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* USA Market */}
              <motion.div
                className="space-y-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    🇺🇸
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-800">USA Market</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Strategic partnerships with US companies. We bridge the gap between Indian talent and American innovation needs.
                </p>
                <ul className="space-y-2">
                  {[
                    "Silicon Valley connections",
                    "US time zone coverage",
                    "Cultural integration training",
                    "Remote-first work models"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Market Flags Display */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-gray-600 mb-6">
                Join companies in <strong>India & USA</strong> who trust us with their engineering needs
              </p>
              
              <motion.div
                className="flex justify-center gap-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                {[
                  { flag: "🇮🇳", name: "India", market: "Domestic" },
                  { flag: "🇺🇸", name: "United States", market: "International" }
                ].map((country, index) => (
                  <motion.div
                    key={country.name}
                    className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg"
                    whileHover={{ scale: 1.1, y: -5 }}
                    animate={{
                      y: [0, -10, 0]
                    }}
                    transition={{
                      hover: { duration: 0.3 },
                      y: { 
                        duration: 3 + index, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 1.5
                      }
                    }}
                  >
                    <span className="text-4xl">{country.flag}</span>
                    <span className="text-sm font-semibold text-gray-700">{country.name}</span>
                    <span className="text-xs text-gray-500">{country.market}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ForCompanies; 