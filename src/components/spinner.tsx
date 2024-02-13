import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-[5px] bg-opacity-20 bg-black flex justify-center items-center z-50">
      <div className="border-1 border-opacity-100 border-main-deepBlue border-t-4 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Spinner;