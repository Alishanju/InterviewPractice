import React from 'react';
import { CiForkAndKnife } from "react-icons/ci";
import { GiCookingPot } from "react-icons/gi";
import { Link } from 'react-router-dom';



const RecipeComp = ({id,image,name,rating,reviewCount,cuisine}) => {
  return (
    <div className='xl:w-1/5 xl:h-1/5 md:w-3/12 md:h-4/12 sm:w-5/12 sm:h-4/12 rounded-lg flex flex-col justify-center items-center gap-2 shadow-2xl p-3 '>
        <img src={image} alt={name} className='w-full rounded-lg'/>
        <h1 className='font-bold'>{name}</h1>
       <p>🍴Cuisine: <span>{cuisine}</span></p>
        <p>⭐Rating: <span>{rating}</span> (<span>{reviewCount}</span> reviews)</p>
        <div className='flex gap-2  bg-red-200 hover:bg-pink-900 hover:text-white  w-40 rounded-md p-1' > 
        <GiCookingPot className='mt-1'/>
        <Link to={`/home/${id}`}><button>Click to Cook </button></Link>
       
        </div>
        
      
    </div>
  )
}

export default RecipeComp
