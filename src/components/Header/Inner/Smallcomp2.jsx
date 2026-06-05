import React from 'react'

const Smallcomp2 = (props) => {
  return (
    <div className='flex flex-row items-center gap-3 p-2'>
      {/* Yahan prop se aaya hua icon render hoga */}
      <span className="text-green-700">
        {props.icon} 
      </span>
      
      <div className='flex flex-col leading-tight'>
        <h1 className='text-sm font-bold text-gray-900'>{props.title}</h1>
        <p className='text-xs font-medium text-gray-500'>{props.subtitle}</p>
      </div>
    </div>
  )
}

export default Smallcomp2