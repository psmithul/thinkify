"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = [
    {
      title: "What We Do",
      links: [
        { name: "Recruitment-as-a-Service", href: "#" },
        { name: "Product Engineering Pods", href: "#" },
        { name: "Fractional CTOs", href: "#" },
        { name: "Tech Strategy", href: "#" },
      ],
    },
    {
      title: "Our Clients",
      links: [
        { name: "Startups", href: "#" },
        { name: "Series A & Beyond", href: "#" },
        { name: "VC-Backed Companies", href: "#" },
        { name: "Case Studies", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "#" },
        { name: "Team", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
  ];

  return (
    <footer id="contact" className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-indigo-600">Thinkify Labs</h3>
            <p className="text-gray-600 mb-6 max-w-sm">
              Engineering Excellence for Ambitious Startups. We help visionary startups hire exceptional engineering talent and build their Version 1.
            </p>
            
            {/* Contact Form */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-900">Let&apos;s Build Together</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <a href="mailto:karthik@thinkify.io" className="hover:text-indigo-600 transition-colors">
                    karthik@thinkify.io
                  </a>
                </div>
                <Button
                  onClick={() => window.location.href = "mailto:karthik@thinkify.io"} 
                  className="bg-indigo-600 hover:bg-indigo-700 rounded-full text-white w-fit"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-gray-900 mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Thinkify Labs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 