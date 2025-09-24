"use client";

import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading after a short delay to ensure smooth transition
    const timer = setTimeout(() => {
      if (document.readyState === 'complete') {
        hideLoadingOverlay();
      } else {
        window.addEventListener('load', hideLoadingOverlay);
      }
    }, 2000); // 2 second minimum loading time
    
    // Fallback: hide after 5 seconds maximum
    const fallbackTimer = setTimeout(hideLoadingOverlay, 5000);

    function hideLoadingOverlay() {
      setIsVisible(false);
      // Remove from DOM after animation
      setTimeout(() => {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
          overlay.remove();
        }
      }, 500);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      id="loading-overlay" 
      className="fixed inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 z-50 flex items-center justify-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        transition: 'all 0.5s ease-out'
      }}
    >
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <div 
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-emerald-200 rounded-full animate-spin mx-auto" 
            style={{animationDirection: 'reverse', animationDuration: '0.8s'}}
          ></div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">RevivoEarth</h2>
        <p className="text-emerald-100 text-sm animate-pulse">Loading your sustainable future...</p>
        <div className="mt-4 w-32 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-white/60 rounded-full animate-pulse" style={{width: '60%'}}></div>
        </div>
      </div>
    </div>
  );
}

