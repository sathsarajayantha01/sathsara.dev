import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ name, icon, level = 80, index }) => {
  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="relative backdrop-blur-md bg-gradient-to-b from-black/70 to-blue-900/20 p-4 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg flex items-center"
        whileHover={{ 
          y: -5,
          boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)'
        }}
      >
        <div className="mr-3 text-blue-400">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-blue-300 font-medium text-sm mb-1">{name}</h3>
          <div className="h-2 bg-blue-900/30 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
            />
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
          {level}%
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillBadge;
