import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ 
  words = ["Designer", "Developer", "Creator"],
  speed = 150,
  delay = 2000,
  className = "text-blue-400 font-bold"
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(speed);

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, delta, currentWordIndex, currentCharIndex, isDeleting]);

  const tick = () => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      setText(currentWord.substring(0, currentCharIndex - 1));
      setCurrentCharIndex(currentCharIndex - 1);
      setDelta(speed / 1.5);
    } else {
      setText(currentWord.substring(0, currentCharIndex + 1));
      setCurrentCharIndex(currentCharIndex + 1);
      setDelta(speed);
    }

    if (!isDeleting && currentCharIndex === currentWord.length) {
      setIsDeleting(true);
      setDelta(delay);
    } else if (isDeleting && currentCharIndex === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    }
  };

  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
      <motion.span 
        className="inline-block w-0.5 h-5 bg-blue-500 ml-1"
        animate={{ 
          opacity: [1, 0, 1],
          transition: { 
            repeat: Infinity, 
            duration: 0.8 
          }
        }} 
      />
    </motion.span>
  );
};

export default TypewriterText;
