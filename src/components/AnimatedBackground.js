import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  });
  
  const [isMobile, setIsMobile] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      setIsMobile(window.innerWidth < 768);
    };

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldAnimate(!mediaQuery.matches);

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reduce particle count on mobile for better performance
  const particleCount = isMobile ? 6 : 12;
  
  // Adjust animation durations for mobile
  const animationSpeeds = {
    orb1: isMobile ? 30 : 20,
    orb2: isMobile ? 35 : 25,
    orb3: isMobile ? 28 : 18,
    grid: isMobile ? 30 : 20,
    pulse: isMobile ? 12 : 8,
  };

  if (!shouldAnimate) {
    return (
      <div className="fixed inset-0 pointer-events-none z-[-10]" aria-hidden="true">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)'
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[-10]" aria-hidden="true">

      {/* Layered animated blobs for Landio/Framer style */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Main blue blob */}
        <motion.div
          className={`absolute ${isMobile ? 'w-72 h-72' : 'w-[32rem] h-[32rem]'} rounded-full opacity-20`}
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: isMobile ? 'blur(32px)' : 'blur(64px)',
            left: isMobile ? '-10%' : '-8%',
            top: isMobile ? '-10%' : '-8%',
            willChange: 'transform',
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Lighter blue blob */}
        <motion.div
          className={`absolute ${isMobile ? 'w-56 h-56' : 'w-96 h-96'} rounded-full opacity-10`}
          style={{
            background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)',
            filter: isMobile ? 'blur(24px)' : 'blur(48px)',
            right: isMobile ? '-12%' : '-10%',
            top: isMobile ? '20%' : '10%',
            willChange: 'transform',
          }}
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Deep blue blob */}
        <motion.div
          className={`absolute ${isMobile ? 'w-64 h-64' : 'w-[28rem] h-[28rem]'} rounded-full opacity-10`}
          style={{
            background: 'radial-gradient(circle, #1e40af 0%, transparent 70%)',
            filter: isMobile ? 'blur(28px)' : 'blur(56px)',
            left: isMobile ? '30%' : '40%',
            bottom: isMobile ? '-18%' : '-12%',
            willChange: 'transform',
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated radial light sweep */}
        <motion.div
          className="absolute w-[120vw] h-[120vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
            filter: 'blur(80px)',
            opacity: 0.18,
            mixBlendMode: 'lighten',
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated highlight sweep */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, transparent 60%, rgba(59,130,246,0.08) 80%, transparent 100%)',
            mixBlendMode: 'screen',
          }}
          animate={{
            x: ['-30%', '100%'],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        />

        {/* Subtle animated particles */}
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              y: [0, isMobile ? -20 : -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Animated grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? '60px 60px' : '100px 100px',
          willChange: 'background-position',
        }}
        animate={{
          backgroundPosition: isMobile ? ['0px 0px', '60px 60px'] : ['0px 0px', '100px 100px'],
        }}
        transition={{
          duration: animationSpeeds.grid,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle pulsing gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)',
          willChange: 'transform, opacity',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: animationSpeeds.pulse,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
