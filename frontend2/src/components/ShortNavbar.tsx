import { FaUser, FaRegFileAlt, FaEnvelope, FaFolder } from 'react-icons/fa';

const ShortNavbar = () => {
  return (
    <div className="flex items-center bg-amber-300 justify-between px-40 text-xs h-10">

      {/* Left side */}
      <div className="flex items-center gap-3">
        <p className="border-l border-white/30 px-4 py-3 h-10">ENGLISH</p>
        <p className="border-l border-r border-white/30 px-4 py-3 h-10">$ DOLLAR (US)</p>
      </div>



      {/* Right side */}
      <div className="flex items-center gap-8">
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
