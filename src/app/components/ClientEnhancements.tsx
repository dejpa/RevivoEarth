"use client";

import { useEffect } from "react";

export default function ClientEnhancements() {
  useEffect(() => {
    // Custom cursor follower
    let cursor = { x: 0, y: 0 };
    let cursorFollower = { x: 0, y: 0 };
    
    const handleMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };
    
    function animateCursor() {
      const diffX = cursor.x - cursorFollower.x;
      const diffY = cursor.y - cursorFollower.y;
      
      cursorFollower.x += diffX * 0.1;
      cursorFollower.y += diffY * 0.1;
      
      const follower = document.getElementById('cursor-follower');
      if (follower) {
        follower.style.left = cursorFollower.x - 12 + 'px';
        follower.style.top = cursorFollower.y - 12 + 'px';
      }
      
      requestAnimationFrame(animateCursor);
    }
    
    // Scroll progress indicator
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.transform = `translateX(${scrollPercent - 100}%)`;
      }
    };

    // Smooth reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Modern hover effects
    const setupHoverEffects = () => {
      const hoverElements = document.querySelectorAll('[data-hover]');
      hoverElements.forEach(el => {
        const handleMouseEnter = () => {
          (el as HTMLElement).style.transform = 'translateY(-4px) scale(1.02)';
          (el as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        };
        
        const handleMouseLeave = () => {
          (el as HTMLElement).style.transform = 'translateY(0) scale(1)';
          (el as HTMLElement).style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        };

        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Parallax scrolling effect
    const handleParallaxScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach(el => {
        const speed = (el as HTMLElement).dataset.parallax || '0.5';
        (el as HTMLElement).style.transform = `translateY(${scrolled * parseFloat(speed)}px)`;
      });
    };

    // Setup reveal animations
    const setupRevealAnimations = () => {
      const revealElements = document.querySelectorAll('[data-reveal]');
      revealElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
        observer.observe(el);
      });
    };

    // Initialize everything
    const initialize = () => {
      setupRevealAnimations();
      setupHoverEffects();
      animateCursor();
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleParallaxScroll);
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initialize);
    } else {
      initialize();
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallaxScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Modern cursor follower */}
      <div 
        id="cursor-follower" 
        className="fixed w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
      />
      
      {/* Modern scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 z-50 transform -translate-y-full transition-transform duration-150" 
        id="scroll-progress"
      />
    </>
  );
}
