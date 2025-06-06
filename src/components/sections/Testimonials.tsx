"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Thinkify Labs helped us scale our engineering team when we were struggling to find quality talent. Their engineers integrated seamlessly and delivered results from day one.",
    name: "Arjun Mehta", 
    title: "CTO, StealthMode Startup",
    avatar: "/images/avatar-placeholder.png",
    rating: 5,
    company: "StealthMode",
    impact: "50% faster shipping",
    techStack: ["React", "Node.js", "AWS"]
  },
  {
    quote: "Working with Thinkify has been a game-changer. They understood our startup's urgency and provided engineers who didn't just code, but thought like founders.",
    name: "Harshiv Bargotra",
    title: "SDE-Java @Flipkart via @Thinkifylabs",
    avatar: "/images/avatar-placeholder.png",
    rating: 5,
    company: "Flipkart",
    impact: "Zero onboarding time",
    techStack: ["Java", "Spring", "Microservices"]
  },
  {
    quote: "As a growing startup, we needed senior engineers fast. Thinkify's network delivered exactly what we needed - experienced talent who hit the ground running.",
    name: "Sarath Kishore",
    title: "SDE 2 @ Swiggy via ThinkifyLabs",
    avatar: "/images/avatar-placeholder.png",
    rating: 5,
    company: "Swiggy",
    impact: "3x productivity boost",
    techStack: ["Python", "Django", "Redis"]
  },
  {
    quote: "The quality of engineers from Thinkify is exceptional. They don't just fill positions; they add strategic value to our product development process.",
    name: "Abishek Ilango",
    title: "SDE @ Flipkart via Thinkify",
    avatar: "/images/avatar-placeholder.png",
    rating: 5,
    company: "Flipkart",
    impact: "Cut development costs by 40%",
    techStack: ["JavaScript", "React", "GraphQL"]
  },
  {
    quote: "Thinkify Labs helped us transition from a small team to a proper engineering organization. Their fractional CTO guidance was invaluable during our Series A prep.",
    name: "Priya Sharma",
    title: "Founder, EdTech Startup",
    avatar: "/images/avatar-placeholder.png",
    rating: 5,
    company: "EduTech",
    impact: "Series A ready in 6 weeks",
    techStack: ["Vue.js", "Laravel", "PostgreSQL"]
  },
  {
    quote: "The engineers we hired through Thinkify didn't just deliver features - they elevated our entire tech culture and best practices.",
    name: "Vikram Gupta",
    title: "VP Engineering, FinTech Scale-up",
    avatar: "/images/avatar-placeholder.png",
    rating: 5,
    company: "FinTech",
    impact: "95% code quality score",
    techStack: ["Go", "Docker", "Kubernetes"]
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Parallax and animation values
  const y = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);

  // Auto-rotate testimonials continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-yellow-50/30">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.05) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
        
        {/* Floating tech icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-4xl opacity-10"
        >
          ⚛️
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute top-40 right-20 text-3xl opacity-10"
        >
          🚀
        </motion.div>
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 6 }}
          className="absolute bottom-32 left-1/4 text-5xl opacity-10"
        >
          ⚡
        </motion.div>
      </div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y, opacity }}
      >
        {/* Header with real-time stats */}
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full border border-yellow-200 mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-yellow-500 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Live: 98% satisfaction rate across all placements
              </motion.span>
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              className="bg-gradient-to-r from-gray-900 via-yellow-600 to-orange-600 bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              Engineers Love Working With Us
            </motion.span>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          
          {/* Success metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-gray-600"
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-yellow-500"
              >
                ✅
              </motion.div>
              <span className="font-medium">100% Success Rate</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-orange-500"
              >
                ⚡
              </motion.div>
              <span className="font-medium">48hr Integration</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-yellow-500"
              >
                🚀
              </motion.div>
              <span className="font-medium">Zero Ramp-up Time</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main testimonial display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main testimonial card */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="relative overflow-hidden bg-white/90 backdrop-blur-xl border-2 border-yellow-200/50 shadow-2xl">
                {/* Card background animation */}
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(251, 191, 36, 0.05), rgba(255, 255, 255, 0.9))",
                      "linear-gradient(135deg, rgba(251, 146, 60, 0.05), rgba(255, 255, 255, 0.9))",
                      "linear-gradient(135deg, rgba(251, 191, 36, 0.05), rgba(255, 255, 255, 0.9))"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0"
                />
                
                <CardContent className="p-8 relative z-10">
                  <StarRating rating={testimonials[activeIndex].rating} />
                  
                  <motion.blockquote 
                    className="text-xl md:text-2xl font-medium mb-8 text-gray-800 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    &quot;{testimonials[activeIndex].quote}&quot;
                  </motion.blockquote>
                  
                  {/* Author info with enhanced styling */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {testimonials[activeIndex].name.charAt(0)}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonials[activeIndex].title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                          {testimonials[activeIndex].company}
                        </span>
                        <span className="text-green-600 text-xs font-medium">
                          {testimonials[activeIndex].impact}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {testimonials[activeIndex].techStack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Floating mini testimonials */}
            <div className="relative h-96 lg:h-[500px]">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`absolute cursor-pointer ${
                      index === activeIndex ? 'z-30' : 'z-10'
                    }`}
                    style={{
                      left: `${20 + (index % 3) * 30}%`,
                      top: `${10 + Math.floor(index / 3) * 35}%`,
                    }}
                    animate={{
                      scale: index === activeIndex ? 1.1 : 0.8,
                      opacity: index === activeIndex ? 1 : 0.6,
                      y: [0, -10, 0],
                    }}
                    transition={{
                      scale: { duration: 0.3 },
                      opacity: { duration: 0.3 },
                      y: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 0.9, opacity: 0.8 }}
                    onClick={() => {
                      setActiveIndex(index);
                    }}
                  >
                    <Card className="w-32 h-32 bg-white/80 backdrop-blur-sm border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-3 flex flex-col items-center justify-center text-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">
                          {testimonial.name.charAt(0)}
                        </div>
                        <p className="text-xs font-medium text-gray-800 truncate w-full">
                          {testimonial.name.split(' ')[0]}
                        </p>
                        <p className="text-xs text-gray-500 truncate w-full">
                          {testimonial.company}
                        </p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center gap-6 mt-12"
          >
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ←
            </motion.button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              →
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials; 