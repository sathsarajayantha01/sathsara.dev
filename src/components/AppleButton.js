import React from 'react';
import { motion } from 'framer-motion';

const AppleButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  fullWidth = false,
  style = {},
  variant = "ios" // ios, macos, dynamic
}) => {
  // Determine the variant class
  let variantClass = '';
  switch (variant) {
    case 'macos':
      variantClass = 'macos-button';
      break;
    case 'dynamic':
      variantClass = 'dynamic-glass-button';
      break;
    case 'ios':
    default:
      variantClass = 'ios-button';
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClass} ${className}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      style={style}
      whileHover={!disabled ? { y: -2, scale: 1.02 } : {}}
      whileTap={!disabled ? { y: 1, scale: 0.98 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default AppleButton;
