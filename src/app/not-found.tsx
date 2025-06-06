"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)`
        }}></div>
        
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 40 + 20,
              height: Math.random() * 40 + 20,
              background: i % 3 === 0 
                ? "linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(249, 115, 22, 0.1))" 
                : i % 3 === 1 
                ? "linear-gradient(45deg, rgba(234, 179, 8, 0.1), rgba(245, 158, 11, 0.1))"
                : "linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1))",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
        {/* 404 Number Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold mb-4"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: "linear-gradient(45deg, #F59E0B, #F97316, #EAB308, #FB923C, #F59E0B)",
              backgroundSize: "300% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 20px rgba(245, 158, 11, 0.3))"
            }}
          >
            404
          </motion.h1>
          
          {/* Glitch Effect */}
          <motion.div
            className="absolute inset-0 text-8xl md:text-9xl font-bold opacity-30"
            animate={{
              x: [0, 2, -2, 0],
              y: [0, -1, 1, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "mirror"
            }}
            style={{
              background: "linear-gradient(45deg, #F97316, #EAB308)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Looks like this page took a different path to innovation.
          </p>
          <p className="text-base text-gray-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Animated Robot/Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl mb-4"
          >
            🤖
          </motion.div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-100 max-w-md mx-auto">
            <motion.p
              className="text-gray-700 font-medium"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "Even the best engineers hit a 404 sometimes. Let's get you back on track!"
            </motion.p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🏠 Back to Home
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ opacity: 0.3 }}
                />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="border-yellow-300 text-yellow-600 hover:bg-yellow-50 px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                ← Go Back
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
                style={{ opacity: 0.8 }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-100 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💡
            </motion.span>
            Need Help?
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <motion.div
              className="text-center p-3 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <Link href="/#companies" className="block">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-medium text-gray-900">Our Services</div>
                <div className="text-gray-600">Explore what we offer</div>
              </Link>
            </motion.div>
            
            <motion.div
              className="text-center p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <Link href="/#testimonials" className="block">
                <div className="text-2xl mb-2">💬</div>
                <div className="font-medium text-gray-900">Testimonials</div>
                <div className="text-gray-600">See what clients say</div>
              </Link>
            </motion.div>
            
            <motion.div
              className="text-center p-3 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => window.open('https://connect.thinkify.io', '_blank')}
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="font-medium text-gray-900">Contact Us</div>
              <div className="text-gray-600">Get in touch</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <motion.p
            className="text-gray-500 text-sm flex items-center justify-center gap-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
            Thinkify - Building Excellence, One Line at a Time
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-12 h-12 border-2 border-yellow-200 rounded-full opacity-30"></div>
      </motion.div>
      
      <motion.div
        className="absolute top-10 right-10"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-8 h-8 border-2 border-orange-200 rounded-full opacity-20"></div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 left-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-25"></div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 right-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-20"></div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage; 