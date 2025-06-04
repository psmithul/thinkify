"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Hire anywhere. Deliver everywhere.",
    description: "Find the right talent and increase productivity when you prioritize skill and experience over location. Thinkify talent is rigorously qualified and certified, assessed by fully transparent code tests, and identified by our proprietary AI-powered Talent Decision Engine™.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    ),
  },
  {
    title: "Make work happen fast.",
    description: "Get the resources you need, when you need them. Onboard easily. Reduce backlog. Quickly generate proof of concepts. Accelerate time to results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 17.2a3 3 0 1 0 0-5.8V5.5a3 3 0 1 1 6 0v.8M15 8a3 3 0 1 0 0 5.8v.7a3 3 0 1 1-6 0v-.8"></path>
      </svg>
    ),
  },
  {
    title: "Scale with confidence.",
    description: "Build high-performing teams with vetted engineering talent. Our rigorous screening process ensures you get developers who can hit the ground running and deliver results from day one.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11.7l2.5 2.5 4-4"></path>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
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
    <section id="companies" className="py-20 md:pt-32 md:pb-20 relative overflow-hidden bg-gradient-to-br from-white via-yellow-50/20 to-orange-50/20">
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
          <motion.p 
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
              ⚡ for startups/scaleups and enterprise
              <motion.div
                className="absolute -inset-1 bg-yellow-200 rounded-lg opacity-20 -z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.p>
          
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
              Thinkify labs scale exceptional engineering talent
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
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
              We're your execution partner — with skin in the game we believe in speed quality and ownership
            </motion.span>
          </motion.p>
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.h3 
              className="text-xl font-semibold text-gray-900 mb-8 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-yellow-600"
              >
                🚀
              </motion.span>
              Get all of your initiatives back on the table
            </motion.h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get in touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ opacity: 0.3 }}
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
            <motion.div key={index} variants={item}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mercor-card h-full overflow-hidden text-center relative group bg-white/80 backdrop-blur-sm border border-yellow-100 hover:border-yellow-200 transition-all duration-300">
                  {/* Enhanced card background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 via-white to-orange-50/30 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardHeader className="pb-2 relative z-10">
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
                      <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <motion.p 
                      className="text-sm text-gray-600"
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