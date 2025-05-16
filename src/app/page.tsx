"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import ForCompanies from "@/components/sections/ForCompanies";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Remove any Spline watermarks on the global level
  useEffect(() => {
    // Mark as loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const removeSplineBranding = () => {
      // Target all possible branding elements
      const elements = document.querySelectorAll(`
        .spline-watermark, 
        [data-name="watermark"], 
        [class*="watermark"], 
        a[href*="spline.design"], 
        div[class*="builder"], 
        div[class*="Watermark"],
        canvas + div:last-child,
        .spline-viewer [data-name="watermark"],
        .spline-viewer [class*="watermark"],
        .spline-viewer [id*="watermark"],
        [data-source*="spline"],
        [data-powered-by*="spline"],
        [class*="built-with"],
        [class*="powered-by"],
        [data-variant*="spline"],
        div[class*="attribution"],
        .spline-builder,
        #spline-attribution,
        .attribution-badge,
        div[data-variant="dark"],
        div[data-source="spline.design"],
        div[style*="position: absolute; bottom: 0"],
        div[style*="position:absolute;bottom:0"],
        div[style*="right:0;bottom:0"],
        div[style*="right: 0; bottom: 0"]
      `);
      
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'none';
          el.style.opacity = '0';
          el.style.visibility = 'hidden';
          el.style.pointerEvents = 'none';
          el.style.height = '0';
          el.style.width = '0';
          el.style.position = 'absolute';
          el.style.top = '-9999px';
          el.style.left = '-9999px';
          el.style.zIndex = '-9999';
          
          // Try to remove the element from the DOM if possible
          try {
            el.remove();
          } catch (_) {
            // Ignore removal errors
          }
        }
      });
      
      // Specific check for the "Built with Spline" banner that appears in bottom corners
      try {
        const canvasElements = document.querySelectorAll('canvas');
        canvasElements.forEach(canvas => {
          // Check all siblings after the canvas element
          let sibling = canvas.nextElementSibling;
          while (sibling) {
            if (sibling instanceof HTMLElement && sibling.tagName === 'DIV') {
              const computedStyle = window.getComputedStyle(sibling);
              
              // Check if it's positioned at the bottom of the container
              if (computedStyle.position === 'absolute' && 
                  (computedStyle.bottom === '0px' || parseFloat(computedStyle.bottom) < 30)) {
                // This is likely the Spline attribution
                sibling.style.display = 'none';
                sibling.style.opacity = '0';
                sibling.style.visibility = 'hidden';
                
                // Try to remove it completely
                try {
                  sibling.remove();
                } catch (_) {
                  // Ignore errors
                }
              }
            }
            sibling = sibling.nextElementSibling;
          }
        });
      } catch (_) {
        // Ignore errors in this more aggressive approach
      }
    };
    
    // Run immediately and then at intervals
    removeSplineBranding();
    const intervals = [
      setInterval(removeSplineBranding, 1000),
      setInterval(removeSplineBranding, 2000),
      setInterval(removeSplineBranding, 5000)
    ];
    
    // Also use a MutationObserver to detect when new elements are added to the DOM
    const observer = new MutationObserver(() => {
      removeSplineBranding();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
  
  return (
    <main className={`min-h-screen bg-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Content */}
      <Navbar />
      <Hero />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HowItWorks />
        <ForCompanies />
        <SocialProof />
        <Testimonials />
        <CTABanner />
      </div>
      <Footer />
      
      {/* Spline Badge Blocker - position fixed in bottom right corner */}
      <div className="fixed bottom-0 right-0 w-48 h-16 bg-white z-[99999] pointer-events-none"></div>
      
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
        
        /* Fix Safari height issues */
        @supports (-webkit-touch-callout: none) {
          .min-h-screen {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>
    </main>
  );
}
