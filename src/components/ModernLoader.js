import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EnhancedLoader.css';

const ModernLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 8; // Much faster increment
        
        if (newProgress >= 100) {
          setIsComplete(true);
          setTimeout(() => onComplete && onComplete(), 300); // Faster exit
          return 100;
        }
        return newProgress;
      });
    }, 40); // Faster interval

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Fast gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-black" />
          
          {/* Minimal particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${30 + Math.random() * 40}%`,
                top: `${30 + Math.random() * 40}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: Math.random(),
              }}
            />
          ))}

          {/* Compact main content */}
          <motion.div 
            className="relative z-10 flex flex-col items-center text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {/* Compact logo */}
            <motion.div
              className="mb-6"
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.08, 1]
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1, repeat: Infinity }
                }}
              >
                <span className="text-lg font-bold text-white">S</span>
              </motion.div>
              
              <motion.h1 
                className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Sathsara Jayantha
              </motion.h1>
            </motion.div>

            {/* Fast progress bar */}
            <motion.div 
              className="w-48"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="relative mb-3">
                <div className="w-full h-0.5 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </div>
                
                <motion.div 
                  className="absolute -top-5 right-0 text-xs text-cyan-400 font-medium"
                  key={Math.floor(progress / 10)}
                  initial={{ scale: 1.1, opacity: 0.9 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  {Math.floor(progress)}%
                </motion.div>
              </div>

              <motion.p 
                className="text-slate-400 text-xs"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Loading...
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModernLoader;
