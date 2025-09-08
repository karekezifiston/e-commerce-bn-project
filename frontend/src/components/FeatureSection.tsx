
import { useNavigate } from 'react-router-dom';
import { dummyShowsData } from "../../assets/assets";
// ✅ Correct import
import FoodCard from './FoodCard';  // relative path to FoodCard.jsx


const FeatureSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 sm:px-16 lg:px-24 xl:px-44 overflow-hidden">
      {/* Top row: Title + View All button */}
      <div className="pt-20 pb-10 flex items-center justify-between">
        <p className="text-black font-bold text-lg">Desserts</p>


      </div>

      {/* Card Grid */}
      <div className="flex flex-wrap gap-8 mt-8 justify-center sm:justify-start">
        {dummyShowsData.map((show) => (
          <div key={show._id} className="flex-1 min-w-[220px] max-w-[280px]">
            <FoodCard venue={show} />
          </div>
        ))}
      </div>

      {/* Bottom "View More" Button */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate('/Food');
            scrollTo(0, 0);
          }}
          className="py-3 px-10 text-sm font-medium text-black bg-[rgba(101,101,101,0.13)] rounded-md hover:bg-gray-100 transition"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default FeatureSection;