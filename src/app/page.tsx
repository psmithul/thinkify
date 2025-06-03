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
import FloatingContact from "@/components/ui/floating-contact";
import LoadingScreen from "@/components/ui/loading-screen";
import Breadcrumb from "@/components/ui/breadcrumb";
import { motion, AnimatePresence } from "framer-motion";
import { createSectionObserver, throttle } from "@/lib/utils";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  // Remove any Spline watermarks on the global level
  useEffect(() => {
    // Mark as loaded with a more realistic delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500); // Increased to show loading screen longer

    // Scroll to top button visibility with throttling
    const handleScroll = throttle(() => {
      setShowScrollTop(window.pageYOffset > 500);
    }, 16);

    window.addEventListener('scroll', handleScroll, { passive: true });

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
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Track current section with Intersection Observer
  useEffect(() => {
    const observer = createSectionObserver((sectionId) => {
      setCurrentSection(sectionId);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard shortcuts for power users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K for quick search (future feature)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Could open a search modal in the future
        console.log('Quick search shortcut triggered');
      }

      // / for focus search (future feature)
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        if (activeElement?.tagName !== 'INPUT' && activeElement?.tagName !== 'TEXTAREA') {
          e.preventDefault();
          console.log('Search focus shortcut triggered');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen isLoading={!isLoaded} />
      
      {/* Main Content */}
      <motion.main 
        className={`min-h-screen bg-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Navigation */}
        <Navbar />
        
        {/* Breadcrumb */}
        <Breadcrumb currentSection={currentSection} className="hidden lg:block" />
        
        {/* Content */}
        <Hero />
        <div className="bg-gradient-to-b from-white to-gray-50">
          <HowItWorks />
          <ForCompanies />
          <SocialProof />
          <Testimonials />
          <CTABanner />
        </div>
        <Footer />

        {/* Floating Contact Button */}
        <FloatingContact />
        
        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-6 left-6 w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Scroll to top"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M18 15l-6-6-6 6" />
              </motion.svg>
            </motion.button>
          )}
        </AnimatePresence>
        
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
          
          /* Smooth scrolling for the entire page */
          html {
            scroll-behavior: smooth;
          }
          
          /* Fix Safari height issues */
          @supports (-webkit-touch-callout: none) {
            .min-h-screen {
              min-height: -webkit-fill-available;
            }
          }

          /* Loading animation */
          .loading-spinner {
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          /* Enhanced glassmorphism styles */
          .glassmorphism {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px) saturate(180%);
            -webkit-backdrop-filter: blur(10px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          /* Accessibility improvements */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          /* Focus styles for better accessibility */
          *:focus {
            outline: 2px solid #4f46e5;
            outline-offset: 2px;
          }

          /* Custom scrollbar for webkit browsers */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #a1a1a1;
          }
        `}</style>
      </motion.main>
    </>
  );
}
