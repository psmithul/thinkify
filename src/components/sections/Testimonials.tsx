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
    quote: "Finding engineering talent was our biggest bottleneck until we worked with Thinkify. They've helped us hire 3 senior engineers who've transformed our tech stack in just months.",
    name: "Karthik Kulkarni",
    title: "Founder Thinkify Labs | Angel Investor",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    quote: "The quality of candidates Thinkify sent us was exceptional. As a growing startup, we don't have time for lengthy hiring processes - their pre-vetted engineers hit the ground running.",
    name: "Harshiv Bargotra",
    title: "SDE-Java @Flipkart via @Thinkifylabs",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    quote: "With Thinkify's help, we cut our hiring time by 70%. Their ex-Flipkart engineers really understand what makes a standout technical candidate for startups.",
    name: "Sarath Kishore",
    title: "SDE 2 @ Swiggy via ThinkifyLabs",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    quote: "As a technical founder, I know exactly what I'm looking for. Thinkify is the only recruiting partner that consistently delivers engineers who match our high standards.",
    name: "Abishek Ilango",
    title: "SDE @ Flipkart via Thinkify",
    avatar: "/images/avatar-placeholder.png",
  },
];

const Testimonials = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax and animation values
  const y = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  
  return (
    <section id="success-stories" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/60 to-indigo-950/60" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          className="text-center mb-16 glass rounded-2xl py-8 px-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Success Stories</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            See how startups have accelerated their growth with Thinkify's engineering talent.
          </p>
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
                  <Card className="glass-card border-0">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="mb-6">
                        <svg 
                          className="h-10 w-10 text-purple-300 opacity-70" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M4.804 3c-1.682 0-2.563 1.242-2.563 2.484 0 1.599 1.553 2.88 3.136 2.88l.183-.003c2.293-.055 3.064-2.927 1.56-4.246A4.022 4.022 0 0 0 4.804 3zm-.926 7.676c-1.682 0-2.563 1.241-2.563 2.483 0 1.6 1.553 2.88 3.136 2.88 1.863 0 3.135-1.36 3.135-2.9-.015-1.65-1.329-2.463-3.136-2.463h-.572zm12.295-7.297c-1.682 0-2.563 1.241-2.563 2.483 0 1.6 1.553 2.881 3.136 2.881l.184-.003c2.292-.056 3.063-2.927 1.56-4.247a4.022 4.022 0 0 0-2.317-1.114zm-.927 7.297c-1.681 0-2.563 1.241-2.563 2.483 0 1.6 1.553 2.88 3.136 2.88 1.863 0 3.135-1.36 3.135-2.9-.015-1.65-1.329-2.463-3.135-2.463h-.573z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <blockquote className="text-xl font-medium mb-8 text-white">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full mb-3 overflow-hidden backdrop-blur-sm border border-purple-500/30">
                          {/* Placeholder for avatar */}
                          <div className="w-full h-full flex items-center justify-center bg-purple-600/30 text-white font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                        </div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-white/70">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
              <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
            </div>
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials; 