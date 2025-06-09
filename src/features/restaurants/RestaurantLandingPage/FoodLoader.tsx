import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
const FoodLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="relative w-16 h-16">
        {/* Rotating Circle */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Center Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-red-600 animate-pulse">
          <GiKnifeFork />
        </div>
      </div>
    </div>
  );
};

export default FoodLoader;
