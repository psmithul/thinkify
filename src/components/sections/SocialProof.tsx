"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const partnerships = [
  { name: "Stealth Startup", detail: "Founded by engineers from Palo Alto Networks & Netskope" },
  { name: "Cloud Security Leader", detail: "Funded by Lightspeed" },
  { name: "Social Shopping App", detail: "Backed by Facebook" },
  { name: "Data Viz Unicorn", detail: "Part of Lightspeed's portfolio" },
  { name: "GraphQL Infrastructure", detail: "Founded by Ex-Googlers" },
  { name: "Insure-tech Disruptor", detail: "Backed by Binny Bansal & Amazon" },
  { name: "Food Delivery Giant", detail: "$1B+ investment" },
  { name: "E-commerce Conglomerate", detail: "India's biggest" },
  { name: "Digital Adoption Scale-up", detail: "Fueled by Sequoia's $30M" },
  { name: "Seed & Series A Startups", detail: "Backed by Accel, Sequoia, Lightspeed" },
  { name: "VC Portfolio Companies", detail: "Across India and Southeast Asia" },
  { name: "Ex-Googlers Startup", detail: "Funded by Andreessen Horowitz" },
];

const SocialProof = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.9, 1]);
  
  // Create refs for the ticker containers
  const tickerTrack1Ref = useRef<HTMLDivElement>(null);
  const tickerTrack2Ref = useRef<HTMLDivElement>(null);
  
  // Calculate width dynamically
  useEffect(() => {
    const adjustTickerWidth = () => {
      // Get all ticker items and calculate total width
      const calculateWidth = (trackRef: React.RefObject<HTMLDivElement | null>) => {
        if (!trackRef.current) return;
        
        const items = trackRef.current.querySelectorAll('.ticker-item');
        
        // Reset inline width to recalculate
        trackRef.current.style.width = 'auto';
        
        if (items.length > 0) {
          // Wait for layout to be updated
          setTimeout(() => {
            if (!trackRef.current) return;
            
            // Get the content width
            const trackWidth = Array.from(items).reduce(
              (width, item) => width + item.getBoundingClientRect().width, 0
            );
            
            // Set the width to double to ensure smooth looping
            trackRef.current.style.width = `${trackWidth}px`;
          }, 100);
        }
      };
      
      calculateWidth(tickerTrack1Ref);
      calculateWidth(tickerTrack2Ref);
    };
    
    // Adjust width initially and on window resize
    adjustTickerWidth();
    window.addEventListener('resize', adjustTickerWidth);
    
    return () => {
      window.removeEventListener('resize', adjustTickerWidth);
    };
  }, []);
  
  return (
    <section id="partners" className="py-12 relative overflow-hidden bg-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.01] mix-blend-overlay"></div>
      
      <motion.div 
        className="relative z-10"
        style={{ opacity, scale }}
      >
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Who We Work With</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;ve partnered with some of the most ambitious teams in the world.
          </p>
        </motion.div>
        
        {/* News Ticker Implementation */}
        <div className="mt-4 relative overflow-hidden py-4 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
          {/* First ticker row */}
          <div className="ticker-container relative flex overflow-hidden">
            <div 
              ref={tickerTrack1Ref}
              className="ticker-track flex animate-ticker gap-2"
              onMouseEnter={() => tickerTrack1Ref.current && (tickerTrack1Ref.current.style.animationPlayState = 'paused')}
              onMouseLeave={() => tickerTrack1Ref.current && (tickerTrack1Ref.current.style.animationPlayState = 'running')}
            >
              {partnerships.map((partner, index) => (
                <div 
                  key={`ticker1-${index}`} 
                  className="ticker-item flex-shrink-0 flex items-center px-3 py-1.5 mx-1 rounded-lg border border-indigo-100 bg-white shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900">{partner.name}</h3>
                    <p className="text-xs text-gray-600">{partner.detail}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate items to create seamless loop */}
              {partnerships.map((partner, index) => (
                <div 
                  key={`ticker1-dup-${index}`} 
                  className="ticker-item flex-shrink-0 flex items-center px-3 py-1.5 mx-1 rounded-lg border border-indigo-100 bg-white shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900">{partner.name}</h3>
                    <p className="text-xs text-gray-600">{partner.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second ticker row (reversed) */}
          <div className="ticker-container relative flex overflow-hidden mt-2">
            <div 
              ref={tickerTrack2Ref}
              className="ticker-track flex animate-ticker-reverse gap-2"
              onMouseEnter={() => tickerTrack2Ref.current && (tickerTrack2Ref.current.style.animationPlayState = 'paused')}
              onMouseLeave={() => tickerTrack2Ref.current && (tickerTrack2Ref.current.style.animationPlayState = 'running')}
            >
              {partnerships.slice().reverse().map((partner, index) => (
                <div 
                  key={`ticker2-${index}`} 
                  className="ticker-item flex-shrink-0 flex items-center px-3 py-1.5 mx-1 rounded-lg border border-indigo-100 bg-white shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900">{partner.name}</h3>
                    <p className="text-xs text-gray-600">{partner.detail}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate items to create seamless loop */}
              {partnerships.slice().reverse().map((partner, index) => (
                <div 
                  key={`ticker2-dup-${index}`} 
                  className="ticker-item flex-shrink-0 flex items-center px-3 py-1.5 mx-1 rounded-lg border border-indigo-100 bg-white shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900">{partner.name}</h3>
                    <p className="text-xs text-gray-600">{partner.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SocialProof; 