import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { StoreContext } from './Context/StoreContext';



const FoodCard = ({ venue }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(StoreContext); // get addToCart from context

  return (
    <div
      onClick={() => {
        navigate(`/venues/${venue._id}`);
        scrollTo(0, 0);
      }}
      className="flex flex-col justify-between p-3 bg-[rgb(250,250,250)] rounded-2xl w-[16.5rem] transition-transform hover:bg-[rgba(164,164,164,0.15)]"
    >
      {/* Image + Button */}
      <div className="relative">
        <img
          src={venue.backdrop_path}
          alt={venue.title}
          className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
        />

        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent navigating to details when clicking button
            addToCart(venue._id); // add this item to cart
          }}
          className="absolute top-47 left-1/2 transform -translate-x-1/2 
                     whitespace-nowrap bg-white text-black border-2 text-yellow-700
                     font-semibold px-5 py-2 text-xs rounded-2xl flex items-center gap-2 
                     hover:bg-black hover:text-white transition"
        >
          <ShoppingCart size={14} />
          Add to Cart
        </button>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-700 opacity-70 truncate w-full mt-5">
        {venue.location}
      </p>

      {/* Title */}
      <p className="text-sm text-black font-medium truncate">{venue.title}</p>

      {/* Price */}
      <p className="flex items-center gap-1 text-sm text-yellow-700 font-semibold mt-1 pr-1">
        ${venue.price}
      </p>
    </div>
  );
};

export default FoodCard;
