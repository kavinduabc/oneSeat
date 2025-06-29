import React from 'react';
import { FaCouch } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white shadow-md rounded-2xl w-fit">
      <FaCouch className="text-[36px] text-[#8B4513]" />
      <h2 className="text-3xl font-serif font-semibold text-gray-800 tracking-wide">
        OneSeat
      </h2>
    </div>
  );
};

export default Logo;
