import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({
  id,
  className = "",
  children,
  style,
  delay = 0.3,
  once = true
}) => {
  return (
    <section id={id} className={className} style={style}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        viewport={{ once }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;
