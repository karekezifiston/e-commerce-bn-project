import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { BsBarChartLine } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showSettings, setShowSettings] = useState(false);

  const settingsRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => {
    if (isMobile) setIsOpen(false);
  };
  const toggleSettings = () => setShowSettings((prev) => !prev);

  // ✅ Close settings when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowSettings(false);
      }
    };

    if (showSettings) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSettings]);

  // ✅ Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItemStyle = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-colors ${
      isActive ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
    }`;

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && !isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white shadow-md"
        >
          <HiMenuAlt2 size={22} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-60 bg-yellow-300/90  shadow-lg transform transition-transform duration-300 z-40 
          ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0 static"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold text-black">Admin Dashboard </h2>
          {isMobile && (
            <button onClick={closeSidebar} className="text-white text-2xl">
              ×
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 p-4 ">
          <NavLink to="/" className={navItemStyle} onClick={closeSidebar}>
            <TbLayoutDashboard size={20} /> Dashboard
          </NavLink>

          <NavLink
            to="/statistics"
            className={navItemStyle}
            onClick={closeSidebar}
          >
            <BsBarChartLine size={20} /> Statistics
          </NavLink>

          {/* Settings Dropdown */}
          <div ref={settingsRef}>
            <button
              onClick={toggleSettings}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-200 w-full"
            >
              <FiSettings size={20} /> Settings
            </button>

            {showSettings && (
              <div className="ml-4 mt-2 flex flex-col gap-2 p-3 rounded-md bg-gray-800 text-gray-300 text-sm">
                <p className="cursor-pointer hover:underline">Change Password</p>
                <p className="cursor-pointer hover:underline">Toggle Dark Mode</p>
                <p className="cursor-pointer hover:underline">Export Data</p>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
