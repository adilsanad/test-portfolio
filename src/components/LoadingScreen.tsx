import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onAnimationComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onAnimationComplete }) => {
  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: '#101010' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onAnimationComplete={onAnimationComplete}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-4 animate-spin"
            style={{ borderTopColor: '#4F78FF' }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;