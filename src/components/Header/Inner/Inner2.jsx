import React from 'react'
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

const Inner2 = () => {
  return (
    // Main container ko flex-col kiya taaki heading upar rahe aur cards niche aayein
    <div className='flex flex-col items-center justify-center w-full py-10 bg-white'>
      
      {/* Heading: text-center aur font designs ke sath */}
      <h1 className='text-3xl font-extrabold text-gray-900 mb-8 tracking-wide text-center'>
        Shop by Categories
      </h1>
      
      {/* Cards Container: Yeh saare cards ko ek pyari line mein space ke sath alignment dega */}
      <div className='flex flex-row flex-wrap justify-center gap-5 w-full px-6'>
        <Card/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
        <Card6/>
      </div>

    </div>
  )
}

export default Inner2