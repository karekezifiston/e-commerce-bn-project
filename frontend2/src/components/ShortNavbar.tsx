import React from 'react';
import { FaUser, FaRegFileAlt, FaEnvelope, FaFolder } from 'react-icons/fa';

const ShortNavbar = () => {
  return (
    <div className="flex items-center bg-amber-300 justify-between px-6 text-xs py-3">
      
      {/* Left side */}
      <div className="flex items-center gap-3">
        <p>ENGLISH</p>
        <p>$ DOLLAR (US)</p>
      </div>
      
      {/* Right side */}
      <div className="flex items-center gap-4">
        <p className="flex items-center gap-1">
          <FaUser className="text-black/50 bla" /> WELCOME TO OUR STORE!
        </p>
        <p className="flex items-center gap-1">
          <FaFolder className="text-black/50" /> SHOP
        </p>
        <p className="flex items-center gap-1">
          <FaRegFileAlt className="text-black/50" /> FAQ
        </p>
        <p className="flex items-center gap-1">
          <FaEnvelope className="text-black/50" /> CONTACT US
        </p>
      </div>
    </div>
  );
};

export default ShortNavbar;
