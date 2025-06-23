import React from 'react';
import { motion } from 'framer-motion';

const LiquidButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  fullWidth = false,
  style = {},
  variant = "primary" // primary, secondary, outline
}) => {
  // Determine the variant class
  let variantClass = '';
  switch (variant) {
    case 'secondary':
      variantClass = 'bg-white/10 hover:bg-white/15';
      break;
    case 'outline':
      variantClass = 'bg-transparent border-2 border-white/20 hover:bg-white/10';
      break;
    case 'primary':
    default:
      variantClass = 'bg-gradient-to-r from-blue-600/70 to-cyan-500/70 hover:from-blue-600/80 hover:to-cyan-500/80';
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        liquid-button ${variantClass} ${className}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      style={style}
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { y: 1 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default LiquidButton;
