"use client";

import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import { motion } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';

// Extended interface for Spline application with potential additional methods
interface ExtendedApplication extends Application {
  findObjectsByType?: (type: string) => SplineObject[];
  scene?: {
    background?: {
      color?: string;
      visible?: boolean;
    }
  };
  background?: {
    color?: string;
    visible?: boolean;
  };
}

// Define interfaces for Spline objects
interface SplineObject {
  name?: string;
  scale?: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  position?: { x: number; y: number; z: number };
  material?: {
    opacity?: number;
    emissive?: unknown;
    emissiveIntensity?: number;
  };
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
  const [hasError, setHasError] = useState(false);
  
  // Function to handle the Spline scene loading
  const onLoad = (splineApp: Application) => {
    splineRef.current = splineApp;
    setIsLoading(false);
    setHasError(false);
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
      
      // Attempt to set background to white - various properties based on Spline versions
      try {
        // Cast to extended application type to access scene properties
        const extendedApp = splineApp as ExtendedApplication;
        
        // Try to access scene background
        if (extendedApp.scene && extendedApp.scene.background) {
          // Keep the background visible but set it to white
          extendedApp.scene.background.visible = true;
          
          // Set background color to white
          if (extendedApp.scene.background.color) {
            extendedApp.scene.background.color = '#ffffff';
          }
        }
        
        // Try alternate methods for accessing background
        if (extendedApp.background) {
          extendedApp.background.visible = true;
          if (extendedApp.background.color) {
            extendedApp.background.color = '#ffffff';
          }
        }
        
        // Additional attempt to set background color on the scene directly
        if ((splineApp as unknown as { setBackgroundColor?: (color: string) => void }).setBackgroundColor) {
          (splineApp as unknown as { setBackgroundColor: (color: string) => void }).setBackgroundColor('#ffffff');
        }
        
        // Try to find and modify any background objects
        const bgObject = splineApp.findObjectByName('Background');
        if (bgObject) {
          const obj = bgObject as unknown as { material?: { color?: string } };
          if (obj.material && obj.material.color) {
            obj.material.color = '#ffffff';
          }
        }
      } catch (_) {
        console.log('Could not modify scene background');
      }
      
      // Find the main object in the scene
      const mainObject = splineApp.findObjectByName('Scene');
      if (mainObject) {
        // Adjust scale for better visibility
        if (mainObject.scale) {
          mainObject.scale.x = 1.2;
          mainObject.scale.y = 1.2; 
          mainObject.scale.z = 1.2;
        }
        
        // Position the object better
        if (mainObject.position) {
          // Adjust position if needed - shift slightly to the side or down for better framing
          mainObject.position.x = 0.2; // Slight shift to the right
          mainObject.position.y = 0; // Centered vertically
        }
        
        // Adjust rotation for a better view angle
        if (mainObject.rotation) {
          mainObject.rotation.y = -0.2; // Slight turn for better perspective
          mainObject.rotation.x = 0.1; // Slight tilt down
        }
        
        // Optionally adjust other properties to blend better
        const obj = mainObject as SplineObject;
        if (obj && obj.material && typeof obj.material.opacity !== 'undefined') {
          obj.material.opacity = 1; // Full opacity for better visibility
        }
      }
      
      // Apply to all objects in the scene to ensure better blending
      try {
        // Cast to extended application type
        const extendedApp = splineApp as ExtendedApplication;
        
        // Check if the method exists at runtime
        if (extendedApp.findObjectsByType && typeof extendedApp.findObjectsByType === 'function') {
          const meshes = extendedApp.findObjectsByType('Mesh');
          if (Array.isArray(meshes)) {
            meshes.forEach((mesh: SplineObject) => {
              if (mesh.material && mesh.material.emissive) {
                mesh.material.emissiveIntensity = 1.5; // Increase for better visibility
              }
            });
          }
        }
      } catch (_) {
        console.log('Could not modify mesh materials');
      }
    } catch (_) {
      console.log('Could not find or modify scene elements');
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
          const mainObject = splineRef.current.findObjectByName('Scene');
          if (mainObject && !enableScrollRotation) {
            // Apply subtle rotation based on mouse position
            mainObject.rotation.y = -0.2 + (mousePos.current.x * 0.1); // Base rotation + mouse influence
            mainObject.rotation.x = 0.1 + (-mousePos.current.y * 0.1); // Base rotation + mouse influence
            
            // Optional - add slight position movement for more interactivity
            mainObject.position.x = 0.2 + (mousePos.current.x * 0.03); // Base position + subtle mouse movement
            mainObject.position.y = (mousePos.current.y * 0.03); // Subtle vertical movement with mouse
          }
        } catch (_) {
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
        const rotationY = (scrollPosition / viewportHeight) * 180;
        
        // Find the main object in the scene that we want to rotate
        try {
          const mainObject = splineRef.current.findObjectByName('Scene');
          if (mainObject) {
            // Apply rotation
            mainObject.rotation.y = rotationY * (Math.PI / 180);
          }
        } catch (_) {
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
      // Target all possible watermark elements
      const watermarks = document.querySelectorAll(`
        .spline-watermark, 
        [class*="spline-builder"], 
        [data-name="watermark"],
        [data-source*="spline"],
        [data-powered-by*="spline"],
        a[href*="spline.design"],
        [class*="built-with"],
        [class*="powered-by"],
        [data-variant*="spline"],
        div[class*="attribution"],
        .spline-builder,
        canvas + div,
        #spline-attribution,
        .attribution-badge,
        div[data-variant="dark"],
        div[data-source="spline.design"],
        div[style*="position: absolute; bottom: 0"],
        div[style*="position:absolute;bottom:0"],
        div[style*="right:0;bottom:0"],
        div[style*="right: 0; bottom: 0"]
      `);
      
      watermarks.forEach(el => {
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
          
          // Also try to remove the element from the DOM if possible
          try {
            el.remove();
          } catch (_) {
            // Ignore errors
          }
        }
      });
      
      // Also try to find the attribution element that might be added dynamically
      try {
        const canvasElements = document.querySelectorAll('canvas');
        canvasElements.forEach(canvas => {
          // Find any direct sibling divs of canvas elements
          let sibling = canvas.nextElementSibling;
          while (sibling) {
            if (sibling instanceof HTMLElement && sibling.tagName === 'DIV') {
              // If the div is absolutely positioned near the bottom of the viewport,
              // it's likely the "Built with Spline" banner
              const computedStyle = window.getComputedStyle(sibling);
              if (computedStyle.position === 'absolute' && 
                  (computedStyle.bottom === '0px' || parseInt(computedStyle.bottom) < 30)) {
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
    
    // Initial attempt
    hideWatermark();
    
    // Additional attempts with timeouts to ensure it catches elements that might load later
    const timers = [
      setTimeout(hideWatermark, 500),
      setTimeout(hideWatermark, 1000),
      setTimeout(hideWatermark, 2000),
      setTimeout(hideWatermark, 3000),
      setTimeout(hideWatermark, 5000)
    ];
    
    // Also add a MutationObserver to catch dynamically added elements
    const observer = new MutationObserver((_mutations) => {
      hideWatermark();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      observer.disconnect();
    };
  }, []);

  // Patch the console error with a custom error handler
  useEffect(() => {
    // Save the original console.error
    const originalConsoleError = console.error;
    
    // Create a patched version that filters out Spline errors
    console.error = function(...args) {
      // Filter out specific Spline errors
      const errorMessage = args.join(' ');
      if (
        errorMessage.includes('buildTimeline') ||
        errorMessage.includes('@splinetool') ||
        errorMessage.includes('timeline')
      ) {
        // Suppress the specific Spline errors
        return;
      }
      
      // Pass other errors to the original console.error
      originalConsoleError.apply(console, args);
    };
    
    // Restore the original on cleanup
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  // Attempt to patch the Spline runtime to fix the buildTimeline error
  useEffect(() => {
    const patchSplineRuntime = () => {
      try {
        // Access the window object to find Spline's runtime
        const win = window as unknown as { 
          __SPLINE_RUNTIME__?: { 
            Timeline?: { 
              prototype: { 
                buildTimeline?: (...args: unknown[]) => unknown;
                originalBuildTimeline?: (...args: unknown[]) => unknown;
              } 
            } 
          } 
        };
        
        // Check if we can find the Spline runtime
        if (win.__SPLINE_RUNTIME__ && win.__SPLINE_RUNTIME__.Timeline) {
          // Create a safe buildTimeline method that won't throw errors
          const safeBuildTimeline = function(this: unknown, ...args: unknown[]) {
            try {
              // Call the original method if it exists
              const self = this as { originalBuildTimeline?: (...args: unknown[]) => unknown };
              if (self.originalBuildTimeline) {
                return self.originalBuildTimeline(...args);
              }
              return null;
            } catch (_) {
              // Silently handle errors
              return null;
            }
          };
          
          // Save the original method and replace it with our safe version
          if (win.__SPLINE_RUNTIME__.Timeline.prototype.buildTimeline) {
            win.__SPLINE_RUNTIME__.Timeline.prototype.originalBuildTimeline = 
              win.__SPLINE_RUNTIME__.Timeline.prototype.buildTimeline;
            win.__SPLINE_RUNTIME__.Timeline.prototype.buildTimeline = safeBuildTimeline;
          }
        }
      } catch (_) {
        // Silent catch for any errors during patching
      }
    };
    
    // Try to patch immediately
    patchSplineRuntime();
    
    // Also try after a delay to ensure the runtime is loaded
    const patchTimer = setTimeout(patchSplineRuntime, 1000);
    
    return () => {
      clearTimeout(patchTimer);
    };
  }, []);

  // Using the Spline URL provided in the requirements
  const hostedSplineUrl = "/ai_brain.splinecode";
  // Fallback to a known working URL if local file fails
  const fallbackSplineUrl = "https://prod.spline.design/PNcqVv8xUr3jGA-W/scene.splinecode";
  const [currentSplineUrl, setCurrentSplineUrl] = useState(hostedSplineUrl);

  const handleSplineError = (error: Error | unknown) => {
    console.log('Spline error handled:', error);
    
    // If we're already using the fallback URL, just show the error
    if (currentSplineUrl === fallbackSplineUrl) {
      setIsLoading(false);
      setHasError(true);
      return;
    }
    
    // Try to recover by using the fallback URL
    console.log('Attempting recovery with fallback URL...');
    setCurrentSplineUrl(fallbackSplineUrl);
    
    // Keep loading state active while we try the fallback
    setTimeout(() => {
      if (isLoading) {
        // If still loading after timeout, show error
        setIsLoading(false);
        setHasError(true);
      }
    }, 10000); // 10 second timeout
  };

  return (
    <div 
      ref={containerRef} 
      className={`spline-container relative w-full h-full z-10 ${className || ''}`}
      style={{ backgroundColor: 'white', height: '100%', minHeight: '500px' }}
    >
      {/* Script to intercept and override Spline's attribution methods */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Override any existing or future functions that add attribution
            const originalCreateElement = document.createElement;
            document.createElement = function() {
              const element = originalCreateElement.apply(this, arguments);
              
              // Intercept element creation
              if (arguments[0] === 'div' || arguments[0] === 'a') {
                // Add a brief delay to allow properties to be set
                setTimeout(() => {
                  // Check if this is an attribution or watermark element
                  if (
                    element.dataset && (
                      element.dataset.source === 'spline.design' || 
                      element.dataset.poweredBy === 'spline' ||
                      element.dataset.variant === 'dark'
                    ) ||
                    (element.href && element.href.includes('spline.design')) ||
                    (element.className && (
                      element.className.includes('watermark') || 
                      element.className.includes('built-with') || 
                      element.className.includes('attribution')
                    ))
                  ) {
                    // Hide it
                    element.style.display = 'none';
                    element.style.opacity = '0';
                    element.style.visibility = 'hidden';
                    element.style.pointerEvents = 'none';
                    element.style.height = '0';
                    element.style.width = '0';
                    element.style.position = 'absolute';
                    element.style.top = '-9999px';
                    element.style.left = '-9999px';
                    element.style.zIndex = '-9999';
                    
                    // Or remove from DOM when it's appended
                    const originalAppendChild = element.appendChild;
                    element.appendChild = function() {
                      const result = originalAppendChild.apply(this, arguments);
                      // After appending, try to remove itself from parent
                      setTimeout(() => {
                        try {
                          if (element.parentNode) {
                            element.parentNode.removeChild(element);
                          }
                        } catch(e) {}
                      }, 0);
                      return result;
                    };
                  }
                }, 0);
              }
              return element;
            };
            
            // Also override the appendChild method to intercept elements as they're added to the DOM
            const originalAppendChild = Element.prototype.appendChild;
            Element.prototype.appendChild = function() {
              const element = arguments[0];
              if (element && element instanceof HTMLElement) {
                // Check if this element has attribution-related attributes
                if (
                  (element.tagName === 'DIV' || element.tagName === 'A') &&
                  (
                    (element.dataset && (
                      element.dataset.source === 'spline.design' || 
                      element.dataset.poweredBy === 'spline' ||
                      element.dataset.variant === 'dark'
                    )) ||
                    (element.href && element.href.includes('spline.design')) ||
                    (element.className && (
                      element.className.includes('watermark') || 
                      element.className.includes('built-with') || 
                      element.className.includes('attribution')
                    ))
                  )
                ) {
                  // Don't add it to the DOM
                  return element;
                }
                
                // Also check if this is a newly added element at the bottom of the viewport
                if (element.tagName === 'DIV' && element.style.position === 'absolute' && 
                    (element.style.bottom === '0px' || parseInt(element.style.bottom) < 30)) {
                  // This is likely the "Built with Spline" banner
                  return element; // Don't add it
                }
              }
              return originalAppendChild.apply(this, arguments);
            };
          })();
        `
      }} />
      
      {isLoading && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      <div className="w-full h-full">
        {hasError ? (
          <div className="w-full h-full bg-white flex flex-col items-center justify-center p-8 text-center">
            <div className="text-indigo-600 font-medium mb-2">Sorry, we couldn&apos;t load the 3D model</div>
            <div className="text-gray-500 text-sm mb-4">We&apos;re having trouble loading the 3D visualization</div>
            <button 
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              onClick={() => {
                setIsLoading(true);
                setHasError(false);
                
                // Try the original URL again
                setCurrentSplineUrl(hostedSplineUrl);
                
                // Set a fallback timeout
                setTimeout(() => {
                  if (isLoading) {
                    // If still loading after timeout, try the fallback
                    setCurrentSplineUrl(fallbackSplineUrl);
                  }
                }, 5000);
              }}
            >
              Try Again
            </button>
          </div>
        ) : (
          <ErrorBoundary fallback={<div className="w-full h-full bg-white flex items-center justify-center">
            <div className="text-indigo-600 font-medium">Interactive model loading...</div>
          </div>}>
            <Spline
              scene={currentSplineUrl}
              onLoad={onLoad}
              onError={handleSplineError}
              className="spline-scene w-full h-full"
              style={{ backgroundColor: 'white', height: '100%', minHeight: '500px' }}
            />
          </ErrorBoundary>
        )}
      </div>
      <style jsx global>{`
        .spline-watermark, 
        [class*="spline-builder"], 
        [data-name="watermark"],
        .spline-viewer [data-name="watermark"],
        .spline-viewer [class*="watermark"],
        .spline-viewer [id*="watermark"],
        a[href*="spline.design"],
        [data-source*="spline"],
        [data-powered-by*="spline"],
        [class*="built-with"],
        [class*="powered-by"],
        [data-variant*="spline"],
        div[class*="attribution"],
        .spline-builder,
        canvas + div,
        #spline-attribution,
        .attribution-badge,
        div[data-variant="dark"],
        div[data-source="spline.design"],
        div[style*="position: absolute; bottom: 0"],
        div[style*="position:absolute;bottom:0"],
        div[style*="right:0;bottom:0"],
        div[style*="right: 0; bottom: 0"],
        div:has(> a[href*="spline.design"]) {
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
        
        /* Override any attempts by the Spline library to show these elements */
        body::after {
          content: "";
          position: fixed;
          bottom: 0;
          right: 0;
          width: 200px;
          height: 70px;
          background-color: white;
          z-index: 999999;
          pointer-events: none;
        }
        
        .spline-scene {
          position: relative !important;
          background-color: white !important;
          height: 100% !important;
          width: 100% !important;
          min-height: 500px !important;
        }
        
        .spline-container canvas {
          position: relative !important;
          background: white !important;
          height: 100% !important;
          width: 100% !important;
          min-height: 500px !important;
        }
        
        /* Target Spline background elements */
        .spline-view, .spline-viewer {
          background: white !important;
          height: 100% !important;
          min-height: 500px !important;
        }
      `}</style>
    </div>
  );
};

export default SplineScene; 