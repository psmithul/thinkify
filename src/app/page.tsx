"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import ForCompanies from "@/components/sections/ForCompanies";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/layout/Footer";
import SplineScene from "@/components/features/SplineScene";

export default function Home() {
  const splineRef = useRef<HTMLDivElement>(null);

  // Remove any Spline watermarks on the global level
  useEffect(() => {
    const removeSplineBranding = () => {
      const elements = document.querySelectorAll(
        '.spline-watermark, [data-name="watermark"], [class*="watermark"], a[href*="spline.design"], div[class*="builder"], div[class*="Watermark"]'
      );
      
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'none';
          el.style.opacity = '0';
          el.style.visibility = 'hidden';
          el.style.pointerEvents = 'none';
        }
      });
    };
    
    // Run immediately and then at intervals
    removeSplineBranding();
    const intervals = [
      setInterval(removeSplineBranding, 1000),
      setInterval(removeSplineBranding, 2000)
    ];
    
    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);
  
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-purple-950 via-indigo-950 to-blue-950">
      {/* Fixed gradient background that extends throughout */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 -z-10" />
      
      {/* Persistent Spline scene that follows throughout the page */}
      <div className="fixed top-0 bottom-0 right-0 w-3/5 md:w-2/3 lg:w-1/2 ml-auto z-5 pointer-events-none" style={{ height: '120vh', width: '120%', right: '-10%', top: '-10vh' }} ref={splineRef}>
        <SplineScene 
          className="opacity-90 mix-blend-lighten" 
          enableScrollRotation={true} 
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero persistentSpline={splineRef} />
        <SocialProof />
        <HowItWorks />
        <Testimonials />
        <ForCompanies />
        <CTABanner />
        <Footer />
      </div>
      
      <style jsx global>{`
        /* Global styles to hide Spline branding */
        .spline-watermark,
        [data-name="watermark"],
        [class*="watermark"],
        a[href*="spline.design"],
        div[class*="builder"],
        div[class*="Watermark"],
        canvas + div:last-child,
        .spline-viewer [data-name="watermark"],
        .spline-viewer [class*="watermark"],
        .spline-viewer [id*="watermark"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          height: 0 !important;
          width: 0 !important;
          position: absolute !important;
          top: -9999px !important;
          left: -9999px !important;
          z-index: -9999 !important;
        }
        
        /* Glassmorphism styles */
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15);
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          transform: translateY(-5px);
        }
        
        /* Global text styles */
        h1, h2, h3, h4, h5, h6 {
          color: white;
        }
        
        p {
          color: rgba(255, 255, 255, 0.85);
        }
        
        /* Improved blending for Spline elements */
        .spline-container canvas {
          mix-blend-mode: lighten !important;
          z-index: 5 !important;
        }
        
        /* Remove default card styles */
        .card {
          background: transparent;
          border: none;
          box-shadow: none;
        }
        
        /* Dark scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </main>
  );
}
