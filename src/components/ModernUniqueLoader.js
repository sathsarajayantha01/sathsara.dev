import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernUniqueLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 10; // Smooth increment
        
        if (newProgress >= 100) {
          setIsComplete(true);
          setTimeout(() => onComplete && onComplete(), 300);
          return 100;
        }
        return newProgress;
      });
    }, 100); // About 1 second total

    return () => {
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Simple Black Background */}
          <div 
            className="absolute inset-0 bg-black"
          />

          {/* Main Content */}
          <div className="relative z-10 text-center px-8">
            {/* Welcome Message */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Welcome!!!
            </motion.h1>

            {/* Portfolio Title */}
            <motion.h2
              className="text-2xl md:text-3xl text-blue-400 mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Sathsara Jayantha's Portfolio
            </motion.h2>

            {/* Progress Bar */}
            <motion.div 
              className="w-80 max-w-full mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative">
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </div>
                
                {/* Progress Text */}
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-400">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModernUniqueLoader;
