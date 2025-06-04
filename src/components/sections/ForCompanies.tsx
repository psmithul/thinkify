"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Hire anywhere. Deliver everywhere.",
    description: "Find the right talent and increase productivity when you prioritize skill and experience over location. Andela talent is rigorously qualified and certified, assessed by fully transparent code tests, and identified by our proprietary AI-powered Talent Decision Engine™.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    ),
  },
  {
    title: "Make work happen fast.",
    description: "Get the resources you need, when you need them. Onboard easily. Reduce backlog. Quickly generate proof of concepts. Accelerate time to results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 17.2a3 3 0 1 0 0-5.8V5.5a3 3 0 1 1 6 0v.8M15 8a3 3 0 1 0 0 5.8v.7a3 3 0 1 1-6 0v-.8"></path>
      </svg>
    ),
  },
  {
    title: "Scale with confidence.",
    description: "Build high-performing teams with vetted engineering talent. Our rigorous screening process ensures you get developers who can hit the ground running and deliver results from day one.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

  return (
    <section id="companies" className="py-20 md:pt-32 md:pb-20 relative overflow-hidden bg-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.01] mix-blend-overlay"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mercor-card p-8"
          >
            <motion.p 
              className="text-sm font-medium text-indigo-600 mb-3 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              for startups/scaleups and enterprise
            </motion.p>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Thinkify labs scale exceptional engineering talent</h2>
            
            <Button 
              className="bg-indigo-600 text-white hover:bg-indigo-700 font-medium px-6 py-2.5 rounded-full inline-block shadow-sm transition-all"
            >
              Get in touch
            </Button>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="mercor-card h-full overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{feature.description}</p>
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