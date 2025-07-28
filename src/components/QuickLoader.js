import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 15; // Very fast increment
        
        if (newProgress >= 100) {
          setIsComplete(true);
          setTimeout(() => onComplete && onComplete(), 300);
          return 100;
        }
        return newProgress;
      });
    }, 50); // About 0.8 seconds total

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 0.95,
            filter: "blur(10px)"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Dynamic gradient background */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)
              `
            }}
            animate={{
              background: [
                `radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)`,
                `radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)`,
                `radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)`
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating tech particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                background: i % 2 === 0 ? '#3b82f6' : '#0ea5e9',
                boxShadow: `0 0 ${8 + Math.random() * 4}px currentColor`
              }}
              animate={{
                y: [0, -20 - Math.random() * 10, 0],
                x: [0, (Math.random() - 0.5) * 20, 0],
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.2 + Math.random() * 0.3, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 1,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Main content */}
          <motion.div 
            className="relative z-10 text-center"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Enhanced logo */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Logo container with glassmorphism */}
              <motion.div 
                className="relative w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                style={{
                  background: `
                    linear-gradient(145deg, 
                      rgba(59, 130, 246, 0.2), 
                      rgba(14, 165, 233, 0.1)
                    )
                  `,
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  boxShadow: `
                    0 8px 32px rgba(59, 130, 246, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `
                }}
                animate={{ 
                  rotateY: [0, 360],
                  rotateX: [0, 10, 0, -10, 0]
                }}
                transition={{ 
                  rotateY: { duration: 3, repeat: Infinity, ease: "linear" },
                  rotateX: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Glowing background */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #0ea5e9)',
                    opacity: 0.6,
                    filter: 'blur(8px)'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Logo text */}
                <motion.span 
                  className="relative text-2xl font-bold text-white z-10"
                  style={{ 
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))'
                  }}
                  animate={{ 
                    textShadow: [
                      '0 2px 10px rgba(0,0,0,0.5)',
                      '0 0 20px rgba(59, 130, 246, 0.8)',
                      '0 2px 10px rgba(0,0,0,0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  S
                </motion.span>
              </motion.div>
              
              {/* Enhanced name */}
              <motion.div className="relative">
                <motion.h1 
                  className="text-2xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(90deg, #60a5fa, #3b82f6, #0ea5e9, #06b6d4)',
                    backgroundSize: '300% 100%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                  }}
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Sathsara Jayantha
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                  className="text-sm text-slate-400 font-medium tracking-widest uppercase"
                  animate={{ 
                    opacity: [0.6, 1, 0.6],
                    letterSpacing: ['0.2em', '0.3em', '0.2em']
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Portfolio Loading
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Enhanced progress section */}
            <motion.div 
              className="w-80 max-w-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* Progress container */}
              <div className="relative mb-4">
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 h-2 rounded-full blur-sm"
                  style={{ backgroundColor: 'rgba(59, 130, 246, 0.4)' }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Progress track */}
                <div 
                  className="relative w-full h-2 rounded-full overflow-hidden"
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 8px,
                        rgba(59, 130, 246, 0.1) 8px,
                        rgba(59, 130, 246, 0.1) 16px
                      )`
                    }}
                    animate={{ x: ['0px', '16px'] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Progress fill */}
                  <motion.div
                    className="relative h-full rounded-full overflow-hidden"
                    style={{ 
                      width: `${progress}%`,
                      background: `
                        linear-gradient(90deg, 
                          #3b82f6, 
                          #60a5fa, 
                          #0ea5e9, 
                          #06b6d4
                        )
                      `,
                      boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)'
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 -skew-x-12"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                        width: '40%'
                      }}
                      animate={{ x: ['-40%', '140%'] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Progress percentage */}
                <motion.div 
                  className="absolute -top-8 right-0 px-3 py-1 rounded-lg"
                  style={{
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                  key={Math.floor(progress / 10)}
                  initial={{ scale: 1.1, y: -2 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm font-bold text-blue-400">
                    {Math.floor(progress)}%
                  </span>
                </motion.div>
              </div>

              {/* Loading status */}
              <motion.div
                className="flex items-center justify-center space-x-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-1 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-1 h-1 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-1 h-1 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickLoader;
