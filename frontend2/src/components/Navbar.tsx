import React, { useState } from "react";
import type { ChangeEvent } from "react"; 
import axios from "axios"; // ✅ added axios
import { FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Track form type

  // ✅ form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);

  const toggleUserPopup = () => setIsUserPopupOpen(!isUserPopupOpen);
  const switchForm = () => setIsSignUp(!isSignUp); // Toggle between sign in / sign up

  // ✅ handle auth
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        const res = await axios.post("http://localhost:5000/api/user/register", {
          email,
          password,
        });
        alert("✅ Registered successfully!");
        console.log(res.data);
      } else {
        const res = await axios.post("http://localhost:5000/api/user/login", {
          email,
          password,
        });
        alert("✅ Logged in successfully!");
        console.log(res.data);
      }
      setIsUserPopupOpen(false); // close popup after success
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-between py-7 px-10 gap-10 relative">
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
          placeholder="Search for products, categories, brands, sku..."
          className="w-1/3 border border-gray-300 border-r-0 px-4 py-2 h-10 focus:outline-none focus:ring-gray-300"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="movies">Movies</option>
          <option value="shows">Shows</option>
          <option value="hotels">Hotels</option>
          <option value="restaurants">Restaurants</option>
        </select>
        <button className="bg-black px-5 h-10">
          <FaSearch className="text-amber-300 text-xl font-light" />
        </button>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 cursor-pointer" onClick={toggleUserPopup}>
          <FiUser className="text-gray-700 text-2xl hover:text-gray-400" />
          <p className="text-gray-700 text-sm hover:text-gray-500">
            Hello,
            <br />
            <span className="font-medium">{isSignUp ? "SIGN UP" : "SIGN IN"}</span>
          </p>
        </div>

        <div className="relative">
          <FiHeart className="text-gray-700 text-2xl" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <FiShoppingBag className="text-gray-700 text-2xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </div>
          <p className="text-gray-700 text-sm">
            Cart
            <br />
            <span className="font-medium">$0.00</span>
          </p>
        </div>
      </div>

      {/* User Popup */}
      {isUserPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={toggleUserPopup}
            >
              ✕
            </button>
            <h2 className="text-lg font-bold mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
            <form className="flex flex-col gap-3" onSubmit={handleAuthSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black-500"
              />
              {isSignUp && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black-500"
                />
              )}
              <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
              <p className="text-xs text-center">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <span className="font-semibold cursor-pointer " onClick={switchForm}>
                  {isSignUp ? "Sign In" : "Sign Up"}
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
