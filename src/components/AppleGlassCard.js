import React from 'react';
import { motion } from 'framer-motion';

const AppleGlassCard = ({
  children,
  className = "",
  style = {}
}) => {
  return (
    <motion.div
      className={`apple-glass ${className}`}
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

export default AppleGlassCard;
