'use client';

import { useState } from 'react';

const AnimatedHamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="w-10 h-10 flex items-center justify-center cursor-pointer"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="overflow-visible"
      >
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          className="stroke-current stroke-2 origin-center"
        />
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          className="stroke-current stroke-2"
        />
        <line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          className="stroke-current stroke-2 origin-center"
        />
      </svg>
    </div>
  );
};

export default AnimatedHamburger;
