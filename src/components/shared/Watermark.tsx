
import React from 'react';

const Watermark = () => {
  return (
    <div className="fixed top-6 left-6 z-50 select-none pointer-events-none opacity-70">
      <div className="text-xl font-bold text-primary text-outline">
        Skyline Network
      </div>
    </div>
  );
};

export default Watermark;
