import React, { useState } from "react";
import type { ChangeEvent } from "react"; // ✅ type-only importimport { FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";


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
          placeholder="Search for products,categories,brands,sku..."
          className="w-1/3 border border-gray-300  border-r-0 px-4 py-2 h-10 focus:outline-none  focus:ring-gray-300"
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
        <button className="bg-black px-5 h-10 ">
          <FaSearch className="text-amber-300 text-xl font-light" />
        </button>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <FiUser className="text-gray-700 text-2xl" />
          <p className="text-gray-700 text-sm">
            Hello,
            <br />
            <span className="font-medium">SIGN IN</span>
          </p>
        </div>

        {/* Heart */}
        <div className="relative">
          <FiHeart className="text-gray-700 text-2xl" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </div>

        {/* Shopping Bag */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <FiShoppingBag className="text-gray-700 text-2xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <p className="text-gray-700 text-sm">
            Cart
            <br />
            <span className="font-medium">$0.00</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
