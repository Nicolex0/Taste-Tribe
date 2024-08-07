import React, { useState } from "react";
import {
  FaSearch,
  FaBars,
  FaUser,
  FaSignInAlt,
} from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="w-full">
      <nav className="bg-customGreen text-white py-4 font-urbanist">
        <div className="container mx-auto flex justify-between items-center px-4 w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="TasteTribe Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold">TasteTribe</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {["HOME", "RECIPES", "ABOUT US", "CONTACT US"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => handleNavItemClick(item)}
                className={`hover:text-gray-400 ${
                  selectedItem === item ? "border-b-2 border-red-500" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Icons for larger screens */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaSearch size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaUser size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaSignInAlt size={24} />
            </a>
          </div>

          {/* Toggle Menu and Search Icon for mobile */}
          <div className="flex space-x-4 md:hidden">
            <button onClick={handleMenuToggle} className="hover:text-gray-400">
              <FaBars size={24} />
            </button>
            <a href="#" className="hover:text-gray-400">
              <FaSearch size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaUser size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaSignInAlt size={24} />
            </a>
          </div>

          {/* Dropdown Menu for Mobile */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-customGreen md:hidden">
              {["HOME", "RECIPES", "ABOUT US", "CONTACT US"].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => handleNavItemClick(item)}
                  className={`block py-2 px-4 hover:bg-gray-700 ${
                    selectedItem === item ? "bg-gray-700" : ""
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
