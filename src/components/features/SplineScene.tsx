"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Suspense } from 'react';

interface SplineSceneProps {
  className?: string;
  enableScrollRotation?: boolean;
}

// Loading placeholder component
const SplineLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm">Loading 3D Experience...</p>
    </div>
  </div>
);

// Error fallback component
const SplineError = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12h8"></path>
          <path d="M12 8v8"></path>
        </svg>
      </div>
      <p className="text-gray-600 text-sm">3D Experience</p>
    </div>
  </div>
);

// Error boundary component
class SplineErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ComponentType },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ComponentType }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('Spline component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return React.createElement(this.props.fallback);
    }

    return this.props.children;
  }
}

const SplineScene: React.FC<SplineSceneProps> = ({ 
  className = "", 
  enableScrollRotation = true 
}) => {
  const [isClient, setIsClient] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [Spline, setSpline] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    
    // Dynamically import Spline only on client side
    const loadSpline = async () => {
      try {
        const SplineModule = await import('@splinetool/react-spline');
        setSpline(() => SplineModule.default);
      } catch (error) {
        console.warn('Spline could not be loaded:', error);
        setHasError(true);
      }
    };

    loadSpline();
  }, []);

  // Don't render anything on server side
  if (!isClient) {
    return <SplineLoader />;
  }

  // Render error fallback if Spline failed to load
  if (hasError || !Spline) {
    return <SplineError />;
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <Suspense fallback={<SplineLoader />}>
        <SplineErrorBoundary fallback={SplineError}>
          <Spline 
            scene="/ai_brain.splinecode"
            onLoad={(splineApp: any) => {
              console.log('Spline scene loaded successfully');
              
              // Remove watermarks after load
              setTimeout(() => {
                const removeWatermarks = () => {
                  const watermarks = document.querySelectorAll(
                    '.spline-watermark, [data-name="watermark"], [class*="watermark"], a[href*="spline.design"]'
                  );
                  watermarks.forEach(el => {
                    if (el instanceof HTMLElement) {
                      el.style.display = 'none';
                    }
                  });
                };
                removeWatermarks();
              }, 100);
            }}
            onError={(error: any) => {
              console.warn('Spline scene failed to load:', error);
              setHasError(true);
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </SplineErrorBoundary>
      </Suspense>
    </div>
  );
};

export default SplineScene; 