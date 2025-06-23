import React from 'react';
import { motion } from 'framer-motion';

const MacosCard = ({
  children,
  className = "",
  hoverEffect = true,
  style = {}
}) => {
  return (
    <motion.div
      className={`macos-card ${hoverEffect ? 'hover:scale-[1.03] hover:-translate-y-1' : ''} ${className}`}
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

export default MacosCard;
