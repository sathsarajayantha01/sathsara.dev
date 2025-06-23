import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    
    // Apply the theme class to the body
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  return (    <motion.button
      onClick={toggleDarkMode}
      className="relative p-2 rounded-full ios-button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <motion.div
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative"
      >
        {darkMode ? (
          <Moon 
            size={20} 
            className="text-blue-300" 
            strokeWidth={1.5} 
          />
        ) : (
          <Sun 
            size={20} 
            className="text-yellow-300" 
            strokeWidth={1.5} 
          />
        )}
      </motion.div>
      <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
    </motion.button>
  );
};

export default DarkModeToggle;
