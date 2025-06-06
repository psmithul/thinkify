"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { createEmailTemplate, smoothScrollTo, createSectionObserver, throttle } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Update scroll state with throttling for better performance
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use Intersection Observer for active section tracking
  useEffect(() => {
    const observer = createSectionObserver((sectionId) => {
      setActiveSection(sectionId);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + M to toggle mobile menu
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
      }
      
      // Escape to close mobile menu
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }

      // Alt + C for CTA
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        handleCTAClick();
      }

      // Alt + H for home
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Number keys for quick navigation
      const numberKeys = ['1', '2', '3', '4', '5'];
      if (e.altKey && numberKeys.includes(e.key)) {
        e.preventDefault();
        const index = parseInt(e.key) - 1;
        if (navLinks[index]) {
          handleNavClick(new MouseEvent('click') as any, navLinks[index].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { title: "Who we are", href: "#companies", id: "companies" },
    { title: "Testimonials", href: "#testimonials", id: "testimonials" },
    { title: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
    setIsMenuOpen(false);
  };

  const handleCTAClick = () => {
    window.open('https://connect.thinkify.io', '_blank');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-2xl border border-yellow-200/50"
          : "bg-white/75 backdrop-blur-xl shadow-lg border border-yellow-100/30"
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(24px) saturate(200%)' : 'blur(20px) saturate(180%)',
        backgroundColor: isScrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(255, 255, 255, 0.8)',
      }}
    >
      {/* Enhanced glassmorphism border glow */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-70'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/10 to-yellow-400/20 rounded-2xl" />
        <div className="absolute inset-[1px] bg-white/40 rounded-2xl" />
        <div className="absolute inset-[2px] bg-gradient-to-b from-white/50 to-transparent rounded-2xl" />
      </div>

      <div className="container mx-auto px-6 h-16 flex items-center justify-between relative z-10">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="flex items-center">
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
              animate={{
                backgroundPosition: isScrolled ? ["0%", "100%", "0%"] : "0%"
              }}
              transition={{
                duration: 3,
                repeat: isScrolled ? Infinity : 0,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 100%",
                textShadow: isScrolled 
                  ? "0 0 20px rgba(251, 191, 36, 0.3)" 
                  : "0 0 10px rgba(251, 191, 36, 0.2)"
              }}
            >
              ⚡ Thinkify Labs
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === link.id
                    ? "text-yellow-600"
                    : "text-gray-700 hover:text-yellow-600"
                }`}
                title={`Navigate to ${link.title} (Alt+${index + 1})`}
              >
                {link.title}
                <motion.span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  layoutId="activeSection"
                />
                {/* Enhanced glassmorphism hover effect */}
                <motion.div
                  className="absolute inset-0 -m-2 rounded-lg bg-yellow-100/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  whileHover={{ scale: 1.05, y: -1 }}
                />
                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute -top-1 -right-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity 
                  }}
                >
                  ✨
                </motion.div>
              </button>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button 
              onClick={handleCTAClick}
              className="relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              title="Get Started (Alt+C)"
            >
              <span className="relative z-10 font-medium">🚀 Start Today - Free Call</span>
              
              {/* Enhanced glassmorphism overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 bg-yellow-400 rounded-lg opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
              />
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-yellow-600 hover:bg-yellow-100/50 backdrop-blur-sm transition-all duration-300 border border-yellow-200/30 relative overflow-hidden group"
                aria-label="Open menu (Alt+M)"
                title="Open menu (Alt+M)"
              >
                <AnimatePresence mode="wait">
                  <motion.svg
                    key={isMenuOpen ? "close" : "menu"}
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {isMenuOpen ? (
                      <>
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                      </>
                    ) : (
                      <>
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                      </>
                    )}
                  </motion.svg>
                </AnimatePresence>
                <motion.div
                  className="absolute inset-0 bg-yellow-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </Button>
            </motion.div>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="bg-white/95 backdrop-blur-xl border-l border-yellow-200/30"
            style={{ backdropFilter: 'blur(20px) saturate(180%)' }}
          >
            <motion.div 
              className="flex flex-col gap-6 mt-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-lg font-medium transition-all duration-300 text-left relative group ${
                    activeSection === link.id
                      ? "text-yellow-600"
                      : "text-gray-800 hover:text-yellow-600"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {activeSection === link.id ? "🌟" : "⭐"}
                      </motion.span>
                      {link.title}
                    </span>
                    <span className="text-xs text-gray-400">Alt+{index + 1}</span>
                  </span>
                  <motion.div
                    className="absolute inset-0 -m-2 rounded-lg bg-yellow-100/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    whileHover={{ scale: 1.02, x: 5 }}
                  />
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                className="relative"
              >
                <Button 
                  onClick={handleCTAClick}
                  className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">🚀 Start Today</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                    style={{ opacity: 0.3 }}
                  />
                </Button>
              </motion.div>

              {/* Keyboard shortcuts info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-6 pt-6 border-t border-yellow-200"
              >
                <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-1">
                  <span>⌨️</span>
                  Keyboard Shortcuts
                </h4>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>Alt + M: Toggle Menu</div>
                  <div>Alt + C: Get Started</div>
                  <div>Alt + H: Go to Top</div>
                  <div>Alt + 1-5: Quick Navigate</div>
                  <div>Esc: Close Menu</div>
                </div>
              </motion.div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Progress indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 origin-left"
        style={{
          scaleX: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.header>
  );
};

export default Navbar; 