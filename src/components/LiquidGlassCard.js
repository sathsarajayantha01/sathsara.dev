import React from 'react';
import { motion } from 'framer-motion';

const LiquidGlassCard = ({ 
  children, 
  className = "", 
  bubbles = true,
  hoverEffect = true,
  style = {}
}) => {
  return (
    <motion.div
      className={`liquid-glass-card ${bubbles ? 'with-bubbles' : ''} ${hoverEffect ? 'hover-effect' : ''} ${className}`}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

export default LiquidGlassCard;
