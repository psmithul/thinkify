"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Thinkify Labs helped us scale our engineering team when we were struggling to find quality talent. Their engineers integrated seamlessly and delivered results from day one.",
    name: "Arjun Mehta", 
    title: "CTO, StealthMode Startup",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    quote: "Working with Thinkify has been a game-changer. They understood our startup's urgency and provided engineers who didn't just code, but thought like founders.",
    name: "Harshiv Bargotra",
    title: "SDE-Java @Flipkart via @Thinkifylabs",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    quote: "As a growing startup, we needed senior engineers fast. Thinkify's network delivered exactly what we needed - experienced talent who hit the ground running.",
    name: "Sarath Kishore",
    title: "SDE 2 @ Swiggy via ThinkifyLabs",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    quote: "The quality of engineers from Thinkify is exceptional. They don't just fill positions; they add strategic value to our product development process.",
    name: "Abishek Ilango",
    title: "SDE @ Flipkart via Thinkify",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    quote: "Thinkify Labs helped us transition from a small team to a proper engineering organization. Their fractional CTO guidance was invaluable during our Series A prep.",
    name: "Priya Sharma",
    title: "Founder, EdTech Startup",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    quote: "The engineers we hired through Thinkify didn't just deliver features - they elevated our entire tech culture and best practices.",
    name: "Vikram Gupta",
    title: "VP Engineering, FinTech Scale-up",
    avatar: "/images/avatar-placeholder.png",
  },
];

const Testimonials = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax and animation values
  const y = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-gradient-to-br from-yellow-50/30 via-white to-orange-50/30">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.01] mix-blend-overlay"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-25"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-30"
        />
      </div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 text-gray-900 relative"
            animate={{ 
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: "linear-gradient(45deg, #1F2937, #F59E0B, #F97316, #1F2937)",
              backgroundSize: "300% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            What Our Clients Say
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            See how startups have accelerated their growth with Thinkify&apos;s engineering talent.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="mercor-card overflow-hidden relative group bg-white/80 backdrop-blur-sm border border-yellow-100 hover:border-yellow-200 transition-all duration-300">
                      {/* Enhanced card background animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 via-white to-orange-50/30 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                        <motion.div 
                          className="mb-6"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg 
                            className="h-10 w-10 text-yellow-500" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M4.804 3c-1.682 0-2.563 1.242-2.563 2.484 0 1.599 1.553 2.883.136 2.88l.183-.003c2.293-.055 3.064-2.927 1.56-4.246A4.022 4.022 0 0 0 4.804 3zm-.926 7.676c-1.682 0-2.563 1.241-2.563 2.483 0 1.6 1.553 2.88 3.136 2.88 1.863 0 3.135-1.36 3.135-2.9-.015-1.65-1.329-2.463-3.136-2.463h-.572zm12.295-7.297c-1.682 0-2.563 1.241-2.563 2.483 0 1.6 1.553 2.881 3.136 2.881l.184-.003c2.292-.056 3.063-2.927 1.56-4.247a4.022 4.022 0 0 0-2.317-1.114zm-.927 7.297c-1.681 0-2.563 1.241-2.563 2.483 0 1.6 1.553 2.88 3.136 2.88 1.863 0 3.135-1.36 3.135-2.9-.015-1.65-1.329-2.463-3.135-2.463h-.573z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        <motion.blockquote 
                          className="text-xl font-medium mb-8 text-gray-800"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          &quot;{testimonial.quote}&quot;
                        </motion.blockquote>
                        <div className="flex flex-col items-center">
                          <motion.div 
                            className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full mb-3 overflow-hidden border-2 border-yellow-200"
                            whileHover={{ scale: 1.1, borderColor: "#F59E0B" }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Placeholder for avatar */}
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700 font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                          </motion.div>
                          <motion.h4 
                            className="font-bold text-gray-900"
                            whileHover={{ color: "#F59E0B" }}
                            transition={{ duration: 0.3 }}
                          >
                            {testimonial.name}
                          </motion.h4>
                          <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="bg-white border-yellow-200 text-yellow-600 hover:bg-yellow-50 hover:border-yellow-300" />
              <CarouselNext className="bg-white border-yellow-200 text-yellow-600 hover:bg-yellow-50 hover:border-yellow-300" />
            </div>
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials; 