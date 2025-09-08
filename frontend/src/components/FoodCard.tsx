import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { StoreContext } from './Context/StoreContext';

interface FoodCardProps {
  food: {
    _id: string;
    title: string;
    price: number;
    location: string;
    backdrop_path: string;
  };
}

const FoodCard = ({ food }: FoodCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(StoreContext)!;

  return (
    <div
      onClick={() => {
        navigate(`/food/${food._id}`);
        scrollTo(0, 0);
      }}
      className="flex flex-col justify-between p-3 bg-[rgb(250,250,250)] rounded-2xl w-[16.5rem] transition-transform hover:bg-[rgba(164,164,164,0.15)]"
    >
      <div className="relative">
        <img
          src={food.backdrop_path}
          alt={food.title}
          className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(food._id);
          }}
          className="absolute top-47 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white text-black border-2 text-yellow-700 font-semibold px-5 py-2 text-xs rounded-2xl flex items-center gap-2 hover:bg-black hover:text-white transition"
        >
          <ShoppingCart size={14} />
          Add to Cart
        </button>
      </div>
      <p className="text-sm text-gray-700 opacity-70 truncate w-full mt-5">{food.location}</p>
      <p className="text-sm text-black font-medium truncate">{food.title}</p>
      <p className="flex items-center gap-1 text-sm text-yellow-700 font-semibold mt-1 pr-1">
        ${food.price}
      </p>
    </div>
  );
};

export default FoodCard;
