import React from 'react'
import Smallcomp from './Smallcomp'
import Smallcomp2 from './Smallcomp2'
import Smallcomp3 from './Smallcomp3'
import { useNavigate } from 'react-router-dom'

const Inner1 = ({title}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Shop Now button click handler
    navigate('/first');
    // Yahan aap apne shop page ya categories page par navigate kar sakte hain
  }
  return (
    <div className="bg-[#EEF7EA] w-full h-[360px] rounded-b-3xl px-16 py-10 mt-1">
  <div className="flex items-center justify-between gap-10">

    {/* Left Side */}
    <div className="w-1/2 -mt-8">
      <button className="inline-block bg-[#E5F4E3] text-[#2E7D32] px-5 py-2 rounded-full font-bold text-sm tracking-wide shadow-sm cursor-pointer hover:bg-amber-400">
        100% Fresh Organic
      </button>

      <h1 className="text-4xl font-bold text-green-900 mt-4 leading-tight">
        Fresh Groceries <br />
        Delivered to Your Doorstep
      </h1>

      <p className="text-gray-600 mt-2 text-lg">
        Get the freshest produce and essentials delivered to your
        doorstep with just a few clicks.
      </p>

      <div className="flex gap-8 mt-6">
      <button onClick={handleClick} className="bg-[#156019] text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#114d14] transition duration-300 cursor-pointer">
  Shop Now
  {/* Right Arrow SVG */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
</button>

        <button className="bg-white text-green-600 border border-green-500 px-6 py-3 rounded-xl hover:bg-green-100 transition cursor-pointer">
          View Categories
        </button>
      </div>

      <div className="flex gap-8 mt-4">
        <Smallcomp title="Fast Delivery" subtitle="in 30 Minutes" />
        <Smallcomp2 
      title="Best Quality" 
      subtitle="100% Fresh"
  icon={
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-badge-check"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.74z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  } 
/>
    <Smallcomp3
      title="Affortable Prices" 
      subtitle="Best Deals For you"
  icon={
    <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="32" 
  height="32" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  className="lucide lucide-baggage-claim"
>
  {/* Bag ka main structure */}
  <path d="M22 18H2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2z" />
  {/* Bag ka handle */}
  <path d="M7 7V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
  {/* Beech ka unique design tag */}
  <path d="M11 11h2l1 2.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" />
</svg>
  } 
/>
      </div>
    </div>

    {/* Right Side */}
    {/* Right Side */}
<div className="w-1/2 flex justify-end items-start -mt-20">
  <img
    // 1. Ek high-quality transparent PNG image ka use kiya hai jo background me mix ho jayegi
    src="https://png.pngtree.com/png-clipart/20241121/original/pngtree-supermarket-shopping-basket-png-image_17283317.png"
    alt="Fresh Groceries Basket"
    // 2. max-w-md ko badal kar max-w-lg ya w-full kiya taaki image bari dikhe
    className="w-full max-w-lg h-[350px] object-contain mix-blend-multiply drop-shadow-xl "
  />
</div>

  </div>
</div>
  )
}

export default Inner1
