import React, { useState, ChangeEvent } from "react";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  // State for search input
  const [search, setSearch] = useState<string>("");

  // State for selected category
  const [category, setCategory] = useState<string>("all");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div className="flex items-center justify-between py-7 px-10 gap-10">
      {/* Logo */}
      <div>
        <img src={logo} width={130} alt="Logo" />
      </div>

      {/* Search + Category */}
      <div className="flex-1 flex justify-center items-center">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-1/3 border border-gray-300  border-r-0 px-4 py-2 focus:outline-none  focus:ring-gray-300"
        />
                <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300  px-2 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="movies">Movies</option>
          <option value="shows">Shows</option>
          <option value="hotels">Hotels</option>
          <option value="restaurants">Restaurants</option>
        </select>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <FaUser className="text-black text-xl" />
        <p className="text-gray-700">
          Hello,
          <br />
          SIGN IN
        </p>
      </div>
    </div>
  );
};

export default Navbar;
