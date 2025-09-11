import speaker from "../assets/agaspeaker.jpg";
import watch from "../assets/watch.jpg";

const ShortHero = () => {
  return (
  <div className="flex items-center">
        <div className="mt-10 relative w-full h-[450px] flex items-center justify-start px-10">
      {/* Image */}
      <img
        src={speaker}
        alt="Speaker"
        className="w-2xl h-auto object-cover" // width reduced to half, full height
      />

      {/* Text on the left */}
      <div className="absolute top-1/3 left-10 text-white space-y-4 pl-6">
        <h4 className="text-base text-amber-300 font-semibold">DIGITAL SMART</h4>
        <h1 className="text-2xl font-semibold text-black">WIRELESS SPEAKER</h1>
        <h4 className="text-base text-black/70 font-semibold">MIN.30-75% OFF</h4>
        <button className="bg-amber-300 p-2 w-28 text-sm font-semibold hover:bg-black hover:text-white">
          SHOP NOW
        </button>
      </div>
    </div>

            <div className="mt-10 relative w-full h-[450px] flex items-center justify-start px-10">
      {/* Image */}
      <img
        src={watch}
        alt="Speaker"
        className="w-2xl h-auto object-cover" // width reduced to half, full height
      />

      {/* Text on the left */}
      <div className="absolute top-1/3 left-10 text-white space-y-4 pl-6">
        <h4 className="text-base text-amber-300 font-semibold">DIGITAL SMART</h4>
        <h1 className="text-2xl font-semibold text-black">WATCH CHARGER</h1>
        <h4 className="text-base text-black/70 font-semibold">UP TO 75% OFF</h4>
        <button className="bg-amber-300 p-2 w-28 text-sm font-semibold hover:bg-black hover:text-white">
          SHOP NOW
        </button>
      </div>
    </div>
  </div>
  );
};

export default ShortHero;
