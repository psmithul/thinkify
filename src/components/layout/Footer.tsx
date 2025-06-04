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
        { name: "Recruitment-as-a-Service", href: "/#companies", internal: true },
        { name: "Product Engineering Pods", href: "/#companies", internal: true },
        { name: "Fractional CTOs", href: "/#companies", internal: true },
        { name: "Tech Strategy", href: "/#testimonials", internal: true },
      ],
    },
    {
      title: "Our Clients",
      links: [
        { name: "Startups", href: "/#companies", internal: true },
        { name: "Series A & Beyond", href: "/#testimonials", internal: true },
        { name: "VC-Backed Companies", href: "/#testimonials", internal: true },
        { name: "Case Studies", href: "/#testimonials", internal: true },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "/#companies", internal: true },
        { name: "Team", href: "https://connect.thinkify.io", internal: false },
        { name: "Blog", href: "https://connect.thinkify.io", internal: false },
        { name: "Careers", href: "https://connect.thinkify.io", internal: false },
      ],
    },
  ];

  const handleContactClick = () => {
    window.open('https://connect.thinkify.io', '_blank');
  };

  const handleWhatsAppClick = () => {
    openWhatsApp("Hi! I'm interested in Thinkify Labs' services and would like to discuss our engineering needs.");
  };

  const handleScheduleCall = () => {
    window.open('https://calendly.com/thinkify-labs', '_blank');
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
      href: "https://linkedin.com/company/thinkify-labs",
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
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <footer id="contact" className="border-t border-yellow-100 bg-gradient-to-br from-yellow-50/30 via-white to-amber-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-25"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -25, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20"
        />
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
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
              whileHover={{ 
                scale: 1.05,
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundSize: "200% 100%"
              }}
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
              Engineering Excellence for Ambitious Startups. We help visionary startups hire exceptional engineering talent and build innovative solutions that scale.
            </motion.p>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-sm font-semibold mb-4 text-gray-900 flex items-center">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2 text-yellow-600"
                >
                  ⚡
                </motion.span>
                Let&apos;s Build Together
              </h4>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center text-gray-600 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleContactClick}
                >
                  <motion.div 
                    className="h-10 w-10 mr-3 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#FEF3C7",
                      rotate: 360 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </motion.div>
                  <div>
                    <div className="font-medium group-hover:text-yellow-600 transition-colors">Get Started Online</div>
                    <div className="text-sm text-gray-500">Visit our contact portal</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center text-gray-600 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleScheduleCall}
                >
                  <motion.div 
                    className="h-10 w-10 mr-3 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#DBEAFE",
                      rotate: 15 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </motion.div>
                  <div>
                    <div className="font-medium group-hover:text-blue-600 transition-colors">Schedule a Call</div>
                    <div className="text-sm text-gray-500">Book a consultation</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center text-gray-600 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleWhatsAppClick}
                >
                  <motion.div 
                    className="h-10 w-10 mr-3 bg-green-100 rounded-full flex items-center justify-center text-green-600"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#DCFCE7",
                      rotate: -15 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.687"/>
                    </svg>
                  </motion.div>
                  <div>
                    <div className="font-medium group-hover:text-green-600 transition-colors">Chat on WhatsApp</div>
                    <div className="text-sm text-gray-500">+91 99024 17369</div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                className="mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-full px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                    style={{ opacity: 0.9 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
            >
              <motion.h4 
                className="font-semibold text-gray-900 mb-4"
                whileHover={{ 
                  color: "#D97706",
                  x: 5 
                }}
                transition={{ duration: 0.2 }}
              >
                {column.title}
              </motion.h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <motion.li 
                    key={linkIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.1 * (idx + 1) + 0.05 * linkIdx 
                    }}
                    whileHover={{ x: 10, scale: 1.05 }}
                  >
                    <Link 
                      href={link.href} 
                      target={link.internal ? "_self" : "_blank"}
                      rel={link.internal ? "" : "noopener noreferrer"}
                      className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center group"
                      aria-label={`Navigate to ${link.name}`}
                    >
                      <motion.span
                        className="mr-2 opacity-0 group-hover:opacity-100 text-yellow-600"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.internal ? "↓" : "→"}
                      </motion.span>
                      {link.name}
                      {!link.internal && (
                        <motion.span
                          className="ml-1 opacity-0 group-hover:opacity-100 text-xs"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          ↗
                        </motion.span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom footer */}
        <motion.div 
          className="pt-8 border-t border-yellow-100 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p 
            className="text-gray-500 text-sm mb-4 md:mb-0"
            animate={{ 
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity 
            }}
          >
            © {new Date().getFullYear()} Thinkify Labs. All rights reserved. Made with ❤️ in India
          </motion.p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 360,
                  y: -5 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link 
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-yellow-600 transition-colors duration-300 block p-2 rounded-full hover:bg-yellow-50"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional contact info */}
        <motion.div
          className="mt-8 pt-6 border-t border-yellow-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.p 
            className="text-sm text-gray-500"
            animate={{ 
              scale: [1, 1.02, 1] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity 
            }}
          >
            🚀 Ready to scale your engineering team? Let&apos;s build something amazing together!
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 