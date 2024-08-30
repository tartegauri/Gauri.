import React from 'react';

function Column() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-500 h-auto md:h-40"> {/* Adjusted grid layout for responsiveness */}
      <div className="flex flex-col justify-center items-center text-center p-4">
        <h2 className="text-lg md:text-xl font-bold text-white">breakdance</h2> {/* Responsive text size */}
        <p className="text-xs md:text-sm text-gray-400">Template Designer - 2022</p> {/* Responsive text size */}
      </div>
      <div className="flex flex-col justify-center items-center text-center p-4">
        <h2 className="text-lg md:text-xl font-bold text-white">replo</h2>
        <p className="text-xs md:text-sm text-gray-400">Product Tester - 2022</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-4">
        <h2 className="text-lg md:text-xl font-bold text-white">SquidX</h2>
        <p className="text-xs md:text-sm text-gray-400">& Web Designer - 2023</p>
      </div>
      
    </div>
  );
}

export default Column;
