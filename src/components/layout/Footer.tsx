"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { openWhatsApp } from "@/lib/utils";

const Footer = () => {
  const footerLinks = [
    {
      title: "What We Do",
      links: [
        { name: "Recruitment-as-a-Service", href: "https://connect.thinkify.io", external: true },
        { name: "Product Engineering Pods", href: "https://connect.thinkify.io", external: true },
        { name: "Fractional CTOs", href: "https://connect.thinkify.io", external: true },
        { name: "Tech Strategy", href: "https://connect.thinkify.io", external: true },
      ],
    },
    {
      title: "Our Clients",
      links: [
        { name: "Startups", href: "https://connect.thinkify.io", external: true },
        { name: "Series A & Beyond", href: "https://connect.thinkify.io", external: true },
        { name: "VC-Backed Companies", href: "https://connect.thinkify.io", external: true },
        { name: "Case Studies", href: "https://connect.thinkify.io", external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "https://connect.thinkify.io", external: true },
        { name: "Team", href: "https://connect.thinkify.io", external: true },
        { name: "Blog", href: "https://connect.thinkify.io", external: true },
        { name: "Careers", href: "https://connect.thinkify.io", external: true },
      ],
    },
  ];

  const handleContactClick = () => {
    window.open('https://connect.thinkify.io', '_blank');
  };

  const handleWhatsAppClick = () => {
    openWhatsApp("Hi! I'm interested in Thinkify Labs' services and would like to discuss our engineering needs.");
  };

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/thinkifylabs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/thinkifylabs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/thinkifylabs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
        </svg>
      )
    }
  ];

  return (
    <footer id="contact" className="border-t border-gray-100 bg-white relative overflow-hidden">
      {/* Enhanced background animation */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(79, 70, 229, 0.02), rgba(255, 255, 255, 1), rgba(147, 51, 234, 0.02))",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.02), rgba(255, 255, 255, 1), rgba(79, 70, 229, 0.02))",
            "linear-gradient(135deg, rgba(79, 70, 229, 0.02), rgba(255, 255, 255, 1), rgba(147, 51, 234, 0.02))"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-10"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 600,
            }}
            animate={{
              x: [
                Math.random() * 1200,
                Math.random() * 1200,
                Math.random() * 1200,
              ],
              y: [
                Math.random() * 600,
                Math.random() * 600,
                Math.random() * 600,
              ],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-xl font-bold mb-4 text-indigo-600"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(79, 70, 229, 0.3)"
              }}
              transition={{ duration: 0.2 }}
            >
              Thinkify Labs
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6 max-w-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Engineering Excellence for Ambitious Startups. We help visionary startups hire exceptional engineering talent and build their Version 1.
            </motion.p>
            
            {/* Enhanced Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h4 
                className="text-sm font-semibold mb-4 text-gray-900"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: "linear-gradient(45deg, #374151, #4F46E5, #374151)",
                  backgroundSize: "200% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Let&apos;s Build Together
              </motion.h4>
              <div className="flex flex-col gap-4">
                <motion.div 
                  className="flex items-center text-gray-600 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 8 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleContactClick}
                >
                  <motion.div
                    className="mr-3 p-2 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-indigo-600" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </motion.div>
                  <span className="font-medium group-hover:text-indigo-600 transition-colors">
                    Get Started Online
                  </span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center text-gray-600 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 8 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleContactClick}
                >
                  <motion.div
                    className="mr-3 p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors"
                    whileHover={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-blue-600" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </motion.div>
                  <span className="font-medium group-hover:text-blue-600 transition-colors">
                    Schedule a Call
                  </span>
                </motion.div>

                <motion.div 
                  className="flex items-center text-gray-600 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 8 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleWhatsAppClick}
                >
                  <motion.div
                    className="mr-3 p-2 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors"
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="text-green-600"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.687"/>
                    </svg>
                  </motion.div>
                  <span className="font-medium group-hover:text-green-600 transition-colors">
                    Chat on WhatsApp
                  </span>
                </motion.div>

                <motion.div
                  className="mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleContactClick}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full text-white px-6 py-3 relative overflow-hidden group"
                  >
                    <span className="relative z-10 font-medium">Get Started Today</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                      style={{ opacity: 0.9 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                      style={{ opacity: 0.1 }}
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Links */}
          {footerLinks.map((column, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
            >
              <motion.h4 
                className="font-semibold text-gray-900 mb-6"
                whileHover={{ scale: 1.05, color: "#4F46E5" }}
                transition={{ duration: 0.2 }}
              >
                {column.title}
              </motion.h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <motion.li 
                    key={linkIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: linkIdx * 0.1 }}
                    whileHover={{ x: 8, scale: 1.05 }}
                    className="group"
                  >
                    <Link 
                      href={link.href} 
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-gray-600 hover:text-indigo-600 transition-all duration-300 flex items-center group relative"
                    >
                      <motion.div
                        className="absolute -left-2 w-1 h-1 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="group-hover:font-medium transition-all duration-300">
                        {link.name}
                      </span>
                      {link.external && (
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ rotate: 45 }}
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17L17 7" />
                        </motion.svg>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom footer */}
        <motion.div 
          className="pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p 
              className="text-gray-500 text-sm"
              whileHover={{ color: "#6B7280" }}
              transition={{ duration: 0.2 }}
            >
              © {new Date().getFullYear()} Thinkify Labs. All rights reserved. Built with ❤️ for ambitious startups.
            </motion.p>
            
            <div className="flex items-center gap-6">
              <motion.div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50"
                      title={social.name}
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                className="text-xs text-gray-400 flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.span>
                Powered by Innovation
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 