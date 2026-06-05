import React from 'react'

const Smallcomp = (props) => {
  return (
    // flex-row aur items-center se icon aur text aamne-saamne alignment mein aayenge
    <div className='flex flex-row items-center gap-3 p-2'>
      
      {/* Icon color green karne ke liye text-green-700 use kiya hai */}
      <span className="text-green-700">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" // Fixed: camelCase
          strokeLinecap="round" // Fixed: camelCase
          strokeLinejoin="round" // Fixed: camelCase
          className="lucide lucide-truck"
        >
          <path d="M14 18H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10" />
          <path d="M14 16H4" />
          <path d="M17 14h4l3 3v4a2 2 0 0 1-2 2h-3" />
          <circle cx="7" cy="21" r="2" />
          <circle cx="19" cy="21" r="2" />
        </svg>
      </span>

      {/* Text Container */}
      <div className='flex flex-col leading-tight'>
        <h1 className='text-sm font-bold text-gray-900'>{props.title}</h1>
        <h2 className='text-xs font-medium text-gray-500'>{props.subtitle}</h2>
      </div>

    </div>
  )
}

export default Smallcomp