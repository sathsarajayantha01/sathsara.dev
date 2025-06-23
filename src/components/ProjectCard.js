import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  category,
  previewLink, 
  detailsLink,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 300,
          perspective: 1000,
        }}
        className="h-full"
      >
        <div className="relative h-full overflow-hidden rounded-xl macos-card group transition-all duration-300">
          {/* Category Badge */}
          <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-md text-xs uppercase font-semibold tracking-wider py-1 px-3 rounded-full z-10">
            {category}
          </div>
          
          {/* Image Container */}
          <div className="w-full h-56 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Content */}
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-200 transition-colors">
              {title}
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              {description}
            </p>
            
            {/* Action buttons */}
            <div className="flex space-x-3">              <motion.a 
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center ios-button bg-blue-500/40 text-white text-sm font-medium px-3 py-1.5 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={16} className="mr-1" />
                Preview
              </motion.a>
              <motion.a 
                href={detailsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center apple-glass text-blue-400 text-sm font-medium px-3 py-1.5 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} className="mr-1" />
                Details
              </motion.a>
            </div>
          </div>
          
          {/* Hover Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
