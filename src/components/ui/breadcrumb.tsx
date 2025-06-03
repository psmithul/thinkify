"use client";

import React from "react";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/utils";

interface BreadcrumbProps {
  currentSection: string;
  className?: string;
}

const sectionTitles: Record<string, string> = {
  "": "Home",
  "how-it-works": "How It Works",
  "companies": "What We Do",
  "partners": "Who We Work With",
  "testimonials": "Testimonials",
  "contact": "Contact"
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentSection, className = "" }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId) {
      smoothScrollTo(sectionId);
    } else {
      handleScrollToTop();
    }
  };

  return (
    <motion.nav
      className={`fixed top-24 left-8 z-40 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: currentSection ? 1 : 0, x: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Breadcrumb"
    >
      <motion.div
        className="flex items-center space-x-2 bg-white/80 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg border border-white/20"
        style={{ backdropFilter: 'blur(16px) saturate(180%)' }}
        whileHover={{ scale: 1.02 }}
      >
        <button
          onClick={handleScrollToTop}
          className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium"
          title="Go to top (Alt+H)"
        >
          Home
        </button>
        
        {currentSection && (
          <>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path d="M9 18l6-6-6-6" />
            </motion.svg>
            
            <motion.span
              key={currentSection}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm text-indigo-600 font-medium"
            >
              {sectionTitles[currentSection] || currentSection}
            </motion.span>
          </>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Breadcrumb; 