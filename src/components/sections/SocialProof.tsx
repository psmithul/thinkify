"use client";

import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useScroll, useTransform } from "framer-motion";

const partnerLogos = [
  { name: "Flipkart", logo: "/images/logo-placeholder.svg" },
  { name: "Razorpay", logo: "/images/logo-placeholder.svg" },
  { name: "Swiggy", logo: "/images/logo-placeholder.svg" },
  { name: "Thinkify Inc", logo: "/images/logo-placeholder.svg" },
  { name: "Netomi", logo: "/images/logo-placeholder.svg" },
  { name: "GreyOrange", logo: "/images/logo-placeholder.svg" },
];

const SocialProof = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax and animation values
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-indigo-950/30 z-0" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay z-0"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2 text-white">Trusted by ambitious startups</h2>
            <p className="text-white/80">Our ex-Flipkart engineering team connects top talent with India's fastest-growing companies</p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partnerLogos.map((partner, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/6">
                    <div className="p-6 flex items-center justify-center h-24 backdrop-blur-sm bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition-all group">
                      <span className="text-white/90 font-medium group-hover:text-white">{partner.name}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="relative static bg-white/10 border-white/20 text-white hover:bg-white/20" />
                <CarouselNext className="relative static bg-white/10 border-white/20 text-white hover:bg-white/20" />
              </div>
            </Carousel>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SocialProof; 