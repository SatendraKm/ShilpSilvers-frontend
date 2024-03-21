import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  // Function to toggle user menu visibility
  const handleUserMenuToggle = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-3xl font-serif p-1">
            Shilp Silvers
          </div>
        </div>
        <nav className=" mx-4 flex space-x-4 items-center ">
          <Link
            to="/"
            className="text-white px-4 py-2 m-1 rounded-full hover:text-gray-300 hover:underline hover:underline-offset-4 hover:bg-gray-800"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-white px-4 py-2 m-1 rounded-full hover:text-gray-300 hover:underline hover:underline-offset-4 hover:bg-gray-800"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-white px-4 py-2 m-1 rounded-full hover:text-gray-300 hover:underline hover:underline-offset-4 hover:bg-gray-800"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white px-4 py-2 m-1 rounded-full hover:text-gray-300 hover:underline hover:underline-offset-4 hover:bg-gray-800"
          >
            Contact Us
          </Link>
        </nav>
        <div className="relative flex items-center mx-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-md border w-full border-gray-500 focus:outline-none focus:ring-0 focus:ring-gray-200 ml-4"
          />
          <button
            className="bg-gray-900 absolute rounded-md right-0.5 text-white p-2.5  hover:bg-gray-700 focus:outline-none "
            onClick={() => {
              // Implement search functionality here (e.g., submit search query)
            }}
          >
            <FiSearch />
          </button>
        </div>
        <div className="relative flex items-center">
          <div
            className="text-white cursor-pointer mx-2 relative"
            onClick={handleUserMenuToggle}
          >
            <IoPersonCircleOutline className="h-8 w-8" />
            {isUserMenuOpen && (
              <div className="absolute mt-1 py-2 px-3 rounded-lg shadow-lg bg-white z-10">
                {/* User menu content */}
                <Link
                  to="/profile"
                  className="block text-gray-800 hover:text-gray-600"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block text-gray-800 hover:text-gray-600"
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block text-gray-800 hover:text-gray-600"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
          <div className="text-white relative m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-3 1a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full text-white px-1 text-xs">
              3
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
