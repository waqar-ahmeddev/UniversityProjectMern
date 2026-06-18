import React from 'react'

const Card = (props) => {
  return (
    // Card Container: Soft shadow, rounded corners, aur hover par thoda transition effect
    <div className="w-32 sm:w-40 md:w-48 bg-white border border-gray-100 rounded-3xl p-3 sm:p-4 md:p-5 flex flex-col items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out cursor-pointer group">
      
      {/* Image Container: Object-contain lagaya hai taaki sabzian bikhrein nahi */}
      <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex items-center justify-center overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
        <img 
          src={props.image || "https://thumb.photo-ac.com/0a/0a3b5cba844d43a28ab6856414a2ece4_t.jpeg"} // Default fallback image agar prop na aaye
          alt={props.name} 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Category Name */}
      <h3 className="text-gray-900 font-bold text-lg tracking-wide text-center group-hover:text-green-600 transition-colors duration-200">
        {props.name || "Bakery"}
      </h3>
      
    </div>
  )
}

export default Card