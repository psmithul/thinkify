"use client";

import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import { motion } from 'framer-motion';

// Extended interface for Spline application with potential additional methods
interface ExtendedApplication extends Application {
  findObjectsByType?: (type: string) => any[];
}

interface SplineSceneProps {
  className?: string;
  enableScrollRotation?: boolean;
}

const SplineScene: React.FC<SplineSceneProps> = ({ 
  className, 
  enableScrollRotation = true 
}) => {
  const splineRef = useRef<Application | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  
  // Function to handle the Spline scene loading
  const onLoad = (splineApp: Application) => {
    splineRef.current = splineApp;
    setIsLoading(false);
    console.log('Spline scene loaded');
    
    try {
      // Hide the Spline branding logo if it exists
      const splineLogo = document.querySelector('.spline-watermark');
      if (splineLogo) {
        (splineLogo as HTMLElement).style.display = 'none';
      }

      // Find all UI elements that might be from Spline
      const watermarkElements = document.querySelectorAll('[data-name*="watermark"], [class*="watermark"], [id*="watermark"], [data-name*="logo"], [class*="logo"]:not(.custom-logo)');
      watermarkElements.forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });
      
      // Find the main object in the scene
      const mainObject = splineApp.findObjectByName('Object');
      if (mainObject) {
        // Adjust scale for better visibility
        if (mainObject.scale) {
          mainObject.scale.x = 1.2;
          mainObject.scale.y = 1.2; 
          mainObject.scale.z = 1.2;
        }
        
        // Optionally adjust other properties to blend better
        // This depends on the specific 3D model - using any here because the API types are not fully defined
        const obj = mainObject as any;
        if (obj && obj.material && typeof obj.material.opacity !== 'undefined') {
          obj.material.opacity = 0.85; // Adjust opacity if needed
        }
      }
      
      // Apply to all objects in the scene to ensure better blending
      // Use a more generic approach since the Spline API types might not be fully defined
      try {
        // Cast to extended application type
        const extendedApp = splineApp as ExtendedApplication;
        
        // Check if the method exists at runtime
        if (extendedApp.findObjectsByType && typeof extendedApp.findObjectsByType === 'function') {
          const meshes = extendedApp.findObjectsByType('Mesh');
          if (Array.isArray(meshes)) {
            meshes.forEach((mesh: any) => {
              if (mesh.material && mesh.material.emissive) {
                mesh.material.emissiveIntensity = 1.2;
              }
            });
          }
        }
      } catch (error) {
        console.log('Could not modify mesh materials', error);
      }
    } catch (error) {
      console.log('Could not find or modify scene elements', error);
    }
  };

  // Set up mouse tracking for interactive rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (splineRef.current && containerRef.current) {
        // Calculate mouse position relative to the center of the container
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate normalized mouse position (-1 to 1)
        mousePos.current = {
          x: (e.clientX - centerX) / (rect.width / 2),
          y: (e.clientY - centerY) / (rect.height / 2)
        };
        
        // Find the main object in the scene
        try {
          const mainObject = splineRef.current.findObjectByName('Object');
          if (mainObject && !enableScrollRotation) {
            // Apply subtle rotation based on mouse position
            mainObject.rotation.y = mousePos.current.x * 0.3;
            mainObject.rotation.x = -mousePos.current.y * 0.2;
            
            // Optional - add slight position movement for more interactivity
            mainObject.position.x = mousePos.current.x * 0.1;
            mainObject.position.y = -mousePos.current.y * 0.1;
          }
        } catch (error) {
          console.log('Could not find object to rotate with mouse');
        }
      }
    };

    // Add mouse event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enableScrollRotation]);

  // Set up scroll-based rotation
  useEffect(() => {
    if (!enableScrollRotation) return;
    
    const handleScroll = () => {
      if (splineRef.current && containerRef.current) {
        // Calculate how far down the page we've scrolled as a percentage
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // Create rotation based on scroll position
        // We'll rotate more as we scroll down
        const rotationY = (scrollPosition / viewportHeight) * 360;
        
        // Find the main object in the scene that we want to rotate
        try {
          const mainObject = splineRef.current.findObjectByName('Object');
          if (mainObject) {
            // Apply rotation
            mainObject.rotation.y = rotationY * (Math.PI / 180);
          }
        } catch (error) {
          console.log('Could not find object to rotate');
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enableScrollRotation]);
  
  // Effect to hide the Spline watermark after initial render
  useEffect(() => {
    // Hide the Spline watermark after component mounts
    const hideWatermark = () => {
      const watermarks = document.querySelectorAll('.spline-watermark, [class*="spline-builder"], [data-name="watermark"]');
      watermarks.forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });
    };
    
    // Initial attempt
    hideWatermark();
    
    // Additional attempts with timeouts to ensure it catches elements that might load later
    const timers = [
      setTimeout(hideWatermark, 500),
      setTimeout(hideWatermark, 1000),
      setTimeout(hideWatermark, 2000)
    ];
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  // Using a hosted Spline URL for better compatibility with Vercel deployment
  // The public URL wasn't working based on the logs
  const hostedSplineUrl = "https://prod.spline.design/ru5XINU4lX6iBqei/scene.splinecode";

  return (
    <div 
      ref={containerRef} 
      className={`spline-container relative w-full h-full z-10 ${className || ''}`}
    >
      {isLoading && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-blue-900/90"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      <Spline
        scene={hostedSplineUrl}
        onLoad={onLoad}
        className="spline-scene"
      />
      <style jsx global>{`
        .spline-watermark, 
        [class*="spline-builder"], 
        [data-name="watermark"],
        .spline-viewer [data-name="watermark"],
        .spline-viewer [class*="watermark"],
        .spline-viewer [id*="watermark"],
        a[href*="spline.design"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          height: 0 !important;
          width: 0 !important;
          position: absolute !important;
          top: -9999px !important;
          left: -9999px !important;
        }
        
        .spline-scene {
          mix-blend-mode: lighten;
          z-index: 10;
          position: relative;
        }
        
        .spline-container canvas {
          z-index: 10 !important;
          position: relative !important;
        }
      `}</style>
    </div>
  );
};

export default SplineScene; 