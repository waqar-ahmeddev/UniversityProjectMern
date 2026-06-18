import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out ${
      isActive
        ? "bg-green-100 text-green-700"
        : "text-gray-700 hover:bg-green-100 hover:text-green-700"
    }`;

  return (
    <>
      <div className="bg-white flex items-center justify-between px-4 md:px-8 py-3 md:py-4 shadow-md sticky top-0 z-50">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-600"
          >
            <path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
            <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
            <rect width="13" height="8" x="8" y="6" rx="1" />
            <circle cx="18" cy="20" r="2" />
            <circle cx="9" cy="20" r="2" />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold text-green-600">
            Fresh Mart
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-green-100 transition"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <NavLink
            to="/"
            className="px-4 py-2 rounded-full text-gray-700 font-medium transition-all duration-300 ease-in-out hover:bg-green-100 hover:text-green-700"
          >
            Home
          </NavLink>
          <NavLink to="/categories" className={linkClass}>
            Categories
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <NavLink to="/product" className={linkClass}>
            Product
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer hover:text-green-600"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>

          {/* Cart */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer hover:text-green-600"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 2h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>

          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer">
            Login / Signup
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col gap-2 p-4">
            <NavLink to="/" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
              🏠 Home
            </NavLink>
            <NavLink to="/categories" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
              📁 Categories
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
              ℹ️ About
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
              📞 Contact
            </NavLink>
            <NavLink to="/product" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
              🛒 Product
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;