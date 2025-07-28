import React from 'react';

const SimpleLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <div className="text-center">
        {/* Simple spinning loader */}
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        
        {/* Loading text */}
        <p className="text-white text-lg font-medium">Loading Portfolio...</p>
        <p className="text-blue-300 text-sm mt-2">Please wait a moment</p>
      </div>
    </div>
  );
};

export default SimpleLoader;
