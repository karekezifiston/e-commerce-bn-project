import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import camera from "../assets/gearcamera.jpg"
import xbox from "../assets/xbox.jpg";
import iwatch from "../assets/shortwatch.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LeftSlide = () => {
    const slideData = [
        {
            discount: "40% OFF",
            category: "ELECTRONICS",
            name: "Samsung Gear 360 Camera",
            price: "$29.00",
            oldPrice: "$48.00",
            sold: 50,
            available: 75,
            img: camera,
        },
        {
            discount: "30% OFF",
            category: "ELECTRONICS",
            name: "Microsoft Xbox One Wireless Controller",
            price: "$499.00",
            oldPrice: "$699.00",
            sold: 25,
            available: 40,
            img: xbox,
        },
        {
            discount: "30% OFF",
            category: "ELECTRONICS",
            name: "Apple Watch Series 5",
            price: "$499.00",
            oldPrice: "$599.00",
            sold: 25,
            available: 40,
            img: iwatch,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slideData.length]);

    const slide = slideData[currentSlide];

    return (
        <div className="flex flex-col gap-7 bg-gray-40 w-[380px] border-2 border-amber-400 rounded-xs shadow-md overflow-hidden">
            {/* Header */}
            <div className="pb-3 px-4 pt-4">
                <h1 className="text-xl font-semibold mb-2">HOT DEALS</h1>
                <div className="flex items-center w-full h-0.5">
                    <div className="w-20 h-[2px] bg-amber-500"></div>
                    <div className="flex-1 h-[1px] bg-black/10"></div>
                </div>
            </div>

            {/* Discount + heart */}
            <div className="flex items-center justify-between px-5">
                <p
                    className="text-white text-sm px-2 py-1 rounded"
                    style={{ backgroundColor: "#188038" }}
                >
                    {slide.discount}
                </p>
                <FiHeart className="text-gray-700 cursor-pointer" />
            </div>

            {/* Image */}
            {/* Image with hover effect */}
            <div className="flex justify-center py-4 relative group">
                <img
                    src={slide.img}
                    alt={slide.name}
                    className="h-40 object-contain"
                />

                {/* Add to Cart button - hidden until hover */}
                <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 
               bg-amber-300 text-black text-sm px-4 py-2  
               opacity-0 translate-y-3 
               group-hover:opacity-100 group-hover:translate-y-0 
               transition-all duration-500 ease-in-out cursor-pointer shadow-md"
                >
                   <p>Add to Cart</p> 
                </div>
            </div>

            {/* Buttons to switch */}
            <div className="flex justify-between px-4 pb-4">
                <button
                    onClick={() =>
                        setCurrentSlide(
                            (prev) => (prev - 1 + slideData.length) % slideData.length
                        )
                    }
                    className=" bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-amber-400 hover:text-white"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slideData.length)}
                    className=" bg-white bg-opacity-50 text-black  p-3 rounded-full hover:bg-amber-400 hover:text-white"
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Details */}
            <div className="px-5 pb-4">
                <p className="text-sm text-gray-500">{slide.category}</p>
                <h4 className="font-semibold">{slide.name}</h4>
                <h4 className="text-lg font-bold">
                    {slide.price}{" "}
                    <span className="line-through text-gray-400 text-sm">
                        {slide.oldPrice}
                    </span>
                </h4>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <p>Already Sold: {slide.sold}</p>
                    <p>Available: {slide.available}</p>
                </div>
            </div>

        </div>
    );
};

export default LeftSlide;
