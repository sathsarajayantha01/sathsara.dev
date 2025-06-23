import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Eye, ExternalLink, X } from 'lucide-react';

const AdvancedProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1,
    speed: 450,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  
  const handlePreview = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  };

  return (
    <>
      <Tilt options={defaultOptions} className="w-full">
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-xl bg-blue-900/10 backdrop-blur-sm border border-blue-500/20 group h-full"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="h-48 md:h-56 overflow-hidden">
            <motion.img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-all"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60"></div>
            
            <motion.div 
              className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >              <motion.button
                onClick={handlePreview}
                className="p-3 rounded-full bg-white/90 text-blue-800 hover:bg-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye size={20} />
              </motion.button>
              {project.category === 'GITHUB' ? (
                <motion.a
                  href={project.githubLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              ) : (
                <motion.a
                  href={project.detailsLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-600/90 text-white hover:bg-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
            </motion.div>
          </div>
          
          <motion.div 
            className="p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.div 
              className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-500/20"
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            {project.tech && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </Tilt>
      
      {/* Modal */}
      {showModal && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative w-full max-w-4xl bg-gradient-to-b from-blue-900/90 to-black/90 rounded-2xl p-2 border border-blue-500/30 overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex justify-end p-2">
              <motion.button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>
            <div className="p-4">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto rounded-lg object-contain max-h-[60vh]" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a 
                href={project.detailsLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
              >
                Visit Project <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AdvancedProjectCard;
