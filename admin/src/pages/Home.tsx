import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Dashboard
      </h1>

      {/* Dashboard Boxes */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Latest Reports */}
        <div
          onClick={() => navigate("/latest")}
          className="flex flex-col items-center gap-6 w-72 h-56 p-6 bg-yellow-300/90 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <div className="flex justify-between items-center w-full mb-2">
            <h2 className="text-black text-base font-semibold">
              All Products
            </h2>
            <p className="text-gray-400 text-sm">More</p>
          </div>

          <FaFileAlt size={50} className="text-white" />
          <p className="text-gray-400 text-sm text-center">
            View newly submitted reports
          </p>
        </div>

        {/* Accepted Reports */}
        <div
          onClick={() => navigate("/accepted")}
          className="flex flex-col items-center gap-6 w-72 h-56 p-6  rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <div className="flex justify-between items-center w-full mb-2">
            <h2 className="text-black text-base font-semibold">
              Add Products
            </h2>
            <p className="text-gray-400 text-sm">/100</p>
          </div>

          <FaCheckCircle size={50} className="text-green-400" />
          <p className="text-gray-400 text-sm text-center">
            Reports currently being worked on
          </p>
        </div>

        {/* Done Reports */}
        <div
          onClick={() => navigate("/done")}
          className="flex flex-col items-center gap-6 w-72 h-56 p-6 bg-gray-900 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <div className="flex justify-between items-center w-full mb-2">
            <h2 className="text-white text-base font-semibold">
              Ordered Products
            </h2>
            <p className="text-gray-400 text-sm">....</p>
          </div>

          <FaRegCheckCircle size={50} className="text-green-500" />
          <p className="text-gray-400 text-sm text-center">
            Reports that have been solved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
