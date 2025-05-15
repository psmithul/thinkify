"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Tier-1 Screening",
    description: "Our ex-Flipkart engineers apply the same rigorous standards they faced at India's top tech companies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    ),
  },
  {
    title: "Startup-Friendly",
    description: "Designed for growing companies who need quality talent but don't have the bandwidth for lengthy hiring cycles.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 17.2a3 3 0 1 0 0-5.8V5.5a3 3 0 1 1 6 0v.8M15 8a3 3 0 1 0 0 5.8v.7a3 3 0 1 1-6 0v-.8"></path>
      </svg>
    ),
  },
  {
    title: "Technical Depth",
    description: "Comprehensive evaluation of coding ability, system design, and problem-solving that goes beyond typical technical interviews.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11.7l2.5 2.5 4-4"></path>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      </svg>
    ),
  },
  {
    title: "Flexible Hiring",
    description: "From contract specialists to full-time team members, we match the right talent to your startup's specific stage and needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path>
        <path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path>
        <path d="M2 7a5 5 0 0 1 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path>
        <path d="M12 7a5 5 0 0 1 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path>
      </svg>
    ),
  },
];

const ForCompanies = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax and animation values
  const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0.5, 0.7], [100, 0]);
  
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

  return (
    <section id="for-companies" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 to-purple-950/60" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, y }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">For Startups</h2>
            <p className="text-lg text-white/90 mb-6">
              Focus on building your product while we handle the entire tech recruiting process. Our team of ex-Flipkart engineers applies elite standards to every candidate.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-white/90">70% faster engineer onboarding for early-stage startups</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-white/90">Save 100+ interviewing hours per hire</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-white/90">Engineers who contribute from day one, technically vetted by veterans</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="glass-card h-full border-0">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/80">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ForCompanies; 