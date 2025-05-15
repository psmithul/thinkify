"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bootcamps = [
  {
    title: "Front-End Development",
    description: "Master React, Next.js, and modern front-end technologies to build responsive web applications.",
    duration: "12 weeks",
    outcomes: "Job placement assistance, Industry-recognized certification",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12Z"></path>
        <path d="m9 22 3-3 3 3"></path>
        <path d="M9 6h6"></path>
        <path d="M9 10h6"></path>
      </svg>
    ),
  },
  {
    title: "Back-End Development",
    description: "Build scalable server-side applications with Node.js, Express, databases, and cloud deployment.",
    duration: "14 weeks",
    outcomes: "Job placement assistance, Industry-recognized certification",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
  },
  {
    title: "SDET",
    description: "Learn software development engineering in test with automated testing frameworks and CI/CD pipelines.",
    duration: "10 weeks",
    outcomes: "Job placement assistance, Industry-recognized certification",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4"></path>
        <path d="m6 8-4 4 4 4"></path>
        <path d="m14.5 4-5 16"></path>
      </svg>
    ),
  },
  {
    title: "Data Engineering",
    description: "Build data pipelines, work with big data technologies, and implement ETL processes.",
    duration: "14 weeks",
    outcomes: "Job placement assistance, Industry-recognized certification",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v0Z"></path>
        <path d="M3 13c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v0Z"></path>
        <path d="M10 6v13"></path>
        <path d="M3 20c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v0Z"></path>
      </svg>
    ),
  },
  {
    title: "DevOps",
    description: "Learn containerization, orchestration, infrastructure as code, and modern deployment strategies.",
    duration: "12 weeks",
    outcomes: "Job placement assistance, Industry-recognized certification",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 1 0 9 9"></path>
        <path d="M12 16.2V12l5.5-2.4"></path>
        <path d="M21 12a9 9 0 0 0-9.5-8.9"></path>
      </svg>
    ),
  },
];

const BootcampPrograms = () => {
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
    <section id="bootcamps" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Bootcamp Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intensive, mentor-led training programs to help developers level up their skills and land their dream jobs.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {bootcamps.map((bootcamp, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="mb-4">{bootcamp.icon}</div>
                  <CardTitle>{bootcamp.title}</CardTitle>
                  <CardDescription className="text-sm">
                    Duration: {bootcamp.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{bootcamp.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-1">Outcomes:</h4>
                    <p className="text-xs text-muted-foreground">{bootcamp.outcomes}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn more</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BootcampPrograms; 