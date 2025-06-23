import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const SkillCard3D = ({ icon, title, value, color = "from-blue-500 to-cyan-500" }) => {
  const defaultOptions = {
    reverse: false,
    max: 20,
    perspective: 1000,
    scale: 1.05,
    speed: 300,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  
  return (
    <Tilt options={defaultOptions} className="w-full">
      <motion.div 
        className={`relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br ${color} shadow-lg h-full`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-4">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
              {icon}
            </div>
            <div className="text-xl font-bold text-white">{value}%</div>
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
          
          {/* Progress bar */}
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${value}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SkillCard3D;
