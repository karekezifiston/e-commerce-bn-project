import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyShowsData } from '../assets/assets';
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react';
import FoodCard from '../components/FoodCard';

// Define a type for your Food data
interface Food {
  _id: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  // Add other fields if you need them
}

const FoodDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<{ food: Food } | null>(null);

  const getShow = async () => {
    const found = dummyShowsData.find((item: Food) => item._id === id);
    if (found) {
      setShow({ food: found });
    }
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="px-6 pt-30">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1200px] mx-auto">
        <img
          src={show.food.poster_path}
          alt=""
          className="max-w-[280px] rounded-xl object-cover mx-auto"
        />
        <div className="relative flex flex-col gap-4">
          <p className="text-[#b5b5b5] font-bold uppercase">ENGLISH</p>
          <h1 className="font-semibold max-w-[400px] text-2xl">{show.food.title}</h1>
          <div className="flex items-center gap-2 text-[#bbb]">
            <StarIcon className="text-white fill-white/80 w-5 h-5" />
            {show.food.vote_average.toFixed(1)} User Rating
          </div>
          <p className="text-[#999] text-sm leading-relaxed max-w-[600px]">
            {show.food.overview}
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 px-8 py-3 text-sm bg-black text-white rounded-lg hover:bg-[#444] transition">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>
            <a
              href="#dateSelect"
              className="flex items-center gap-2 px-8 py-3 text-sm bg-[#ededed] text-[#585858] rounded-lg hover:bg-white/60 transition"
            >
              Book 
            </a>
            <button className="bg-[#444] p-2 rounded-lg cursor-pointer">
              <Heart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* SUGGESTED VENUES */}
      <p className="text-lg font-medium mt-16 mb-4">You May Also Like</p>
      <div className="flex flex-wrap gap-8 justify-center">
        {dummyShowsData.slice(0, 5).map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>

      {/* SHOW MORE BUTTON */}
      <div className="flex justify-center mt-16">
        <button
          className="px-8 py-3 text-sm bg-white text-black rounded-lg hover:bg-white/60 transition"
          onClick={() => {
            navigate('/food');
            scrollTo(0, 0);
          }}
        >
          Show More
        </button>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default FoodDetails;
