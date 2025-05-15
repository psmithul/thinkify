"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Share Requirements",
    description: "Tell us what you're looking for – tech stack, experience level, and specific skills for your startup's needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    title: "We Screen",
    description: "Our ex-Flipkart engineers rigorously evaluate candidates through coding challenges and technical interviews.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
        <path d="M12 13v8"></path>
        <path d="M12 3v3"></path>
      </svg>
    ),
  },
  {
    title: "Hire & Grow",
    description: "Choose from pre-vetted top talent, saving weeks of interviewing. Get engineers who can contribute from day one.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
];

const HowItWorks = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax and animation values
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.9, 1]);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="why-thinkify" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 to-purple-950/60" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, scale }}
      >
        <motion.div 
          className="text-center mb-16 glass rounded-2xl py-8 px-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">How It Works</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our proven process helps startups find the perfect engineering talent without the hassle of extensive interviews.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item}>
              <Card className="glass-card h-full border-0">
                <CardHeader className="pb-2">
                  <div className="mb-4">{step.icon}</div>
                  <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-white/80">{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks; 