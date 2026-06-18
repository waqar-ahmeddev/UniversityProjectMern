import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 md:left-64 right-0 bg-white h-16 md:h-20 shadow-sm flex items-center justify-between px-4 md:px-8 z-50 transition-all duration-300'>

      {/* Left Side */}
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

        <h1 className="text-2xl font-bold text-green-600">
          Fresh Mart
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 md:gap-5">

        <input
          type="text"
          placeholder="Search products..."
          className="hidden md:block border border-gray-300 px-4 py-2 rounded-lg outline-none"
        />

        <button className="text-lg md:text-xl cursor-pointer">🔔</button>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
        />

      </div>

    </div>
  )
}

export default Header
