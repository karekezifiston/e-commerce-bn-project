import React, { useState, useEffect } from "react";
import phone from "../assets/phone.png";
import headphone from "../assets/headphone.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const slideData = [
    {
      title: "BEST EP ON-EAR",
      overview: "PERSONALIZED HEADPHONES",
      backdrop_path: headphone,
      info: "Min.40-80% Off",
    },
    {
      title: "BEST SMARTPHONE",
      overview: "WIRELESS CHARGING STAND.",
      backdrop_path: phone,
      info: "Up To 70% Off",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideData.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slideData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  return (
    <div className=" bg-gray-100 relative w-full h-[450px] overflow-hidden">
      {slideData.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 flex items-center gap-10 px-10 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Text content */}
          <div className="flex flex-col gap-2 text-left max-w-lg">
            <h2 className="text-1xl text-yellow-400 font-semibold mb-4">
              {slide.title}
            </h2>
            <p className="text-5xl font-bold mb-2">{slide.overview}</p>
            <p className="text-4xl font-medium">{slide.info}</p>
            <button className="bg-amber-300 p-3 w-30 text-sm font-semibold hover:bg-black hover:text-white ">
              BUY NOW
            </button>
          </div>

          {/* Image */}
          <div className="w-1/2">
            <img
              src={slide.backdrop_path}
              alt={slide.title}
              className="w h-auto object-contain"
            />
          </div>
        </div>
      ))}

      {/* Left / Right Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-amber-400 hover:text-white transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full  hover:bg-amber-400 hover:text-white  hover:bg-opacity-75 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Hero;
