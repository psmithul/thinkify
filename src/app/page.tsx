"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
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

  useEffect(() => {
    // Mark as loaded with a realistic delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);

    // Scroll to top button visibility with throttling
    const handleScroll = throttle(() => {
      setShowScrollTop(window.pageYOffset > 500);
    }, 16);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
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

  // Enhanced keyboard shortcuts for power users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K for quick navigation to contact
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        window.open('https://connect.thinkify.io', '_blank');
      }

      // Ctrl/Cmd + / for help
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        console.log('Keyboard shortcuts: Ctrl+K (contact), Ctrl+Home (top), Ctrl+Arrow (sections)');
      }

      // Ctrl/Cmd + Home for top
      if ((e.metaKey || e.ctrlKey) && e.key === 'Home') {
        e.preventDefault();
        scrollToTop();
      }

      // Escape to close any modals or overlays
      if (e.key === 'Escape') {
        // Future use for closing modals
        console.log('Escape key pressed');
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
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb currentSection={currentSection} />
        
        {/* Main Sections */}
        <AnimatePresence mode="wait">
          {isLoaded && (
            <motion.div
              key="main-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Hero Section */}
              <Hero />
              
              {/* Companies Section */}
              <ForCompanies />
              
              {/* Testimonials */}
              <Testimonials />
              
              {/* CTA Banner */}
              <CTABanner />
              
              {/* Footer */}
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Floating Contact Widget */}
        <FloatingContact />
        
        {/* Enhanced Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-6 left-6 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
              title="Back to top (Ctrl+Home)"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M7 13l5-5 5 5" />
                <path d="M7 19l5-5 5 5" />
              </motion.svg>
              
              {/* Pulse animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-indigo-600"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          )}
        </AnimatePresence>
        
        {/* Performance and Accessibility Enhancements */}
        <div className="sr-only">
          <p>Thinkify Labs - Engineering Excellence for Startups</p>
          <p>Current section: {currentSection || 'hero'}</p>
        </div>
      </motion.main>
    </>
  );
}
