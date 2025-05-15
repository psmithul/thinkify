"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const AIInterview = () => {
  const conversation = [
    {
      role: "ai",
      message: "Hi there! I'm Thinkify's AI Interviewer. I'll be evaluating your coding skills today. Ready to begin?",
    },
    {
      role: "user",
      message: "Yes, I'm ready.",
    },
    {
      role: "ai",
      message: "Great! Let's start with a problem: Implement a function to find the longest substring without repeating characters in a given string.",
    },
    {
      role: "user",
      message: "I'll solve this using a sliding window approach with a hash map to track characters.",
    },
    {
      role: "user",
      message: `function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();
  
  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    
    if (charMap.has(currentChar)) {
      start = Math.max(charMap.get(currentChar) + 1, start);
    }
    
    charMap.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  
  return maxLength;
}`,
    },
    {
      role: "ai",
      message: "Excellent solution! Your approach using a sliding window is optimal with O(n) time complexity. Can you explain how you handle edge cases?",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Experience Our AI Interview</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered interviews evaluate coding skills, problem-solving abilities, and technical knowledge in real-time.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="p-6 shadow-lg rounded-xl overflow-hidden bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-gray-700">
            <div className="flex items-center border-b pb-4 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <div className="mx-auto text-sm font-medium text-gray-500">Thinkify AI Interview</div>
            </div>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto p-2">
              {conversation.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    <pre className={`whitespace-pre-wrap text-sm font-mono ${
                      message.role === 'user' && message.message.includes('function') 
                        ? 'text-gray-100' 
                        : ''
                    }`}>
                      {message.message}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t flex">
              <input 
                type="text" 
                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600" 
                placeholder="Type your response..." 
                disabled 
              />
              <button 
                className="bg-purple-600 text-white px-4 py-2 rounded-r-lg"
                disabled
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AIInterview; 