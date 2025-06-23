import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IosBottomSheet = ({
  children,
  className = "",
  isOpen = false,
  onClose,
  style = {}
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Bottom sheet */}
          <motion.div
            className={`ios-bottom-sheet fixed bottom-0 left-0 right-0 z-50 ${className}`}
            style={style}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default IosBottomSheet;
