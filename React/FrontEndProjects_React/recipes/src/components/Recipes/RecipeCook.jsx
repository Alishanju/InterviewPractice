import React from 'react'

const RecipeCook = ({name,ingredients,instructions,image,prepTimeMinutes,cookTimeMinutes,servings,caloriesPerServing}) => {
    

  return (
    <div className=' xl:w-[800px] md:w-[600px] sm:w-[600px] xl:pl-40 xl:pr-40 md:pl-10 sm:pl-10 pt-20 bg-amber-100 pb-20 rounded-xl '>
  
      <h1 className='text-red-400 font-extrabold text-2xl text-center mb-10 '>{name}</h1>
      <h1 className='font-bold text-xl italic mb-3 '>Ingredients:</h1>
     <div className='mb-10'>{ingredients.map((i,idx) => <li className='ml-10'>{i}</li>)}</div>
     <h1 className='font-bold text-xl italic mb-3 '> Cooking Instructions:</h1>
     <div className='mb-10'>{instructions.map((i,idx) => <p className='ml-10'>{idx+1}. {i}</p>)}</div>
     <h1 className='font-bold text-xl italic mb-3 '>Additional Information:</h1>
     <div className='ml-10'>
     <p><span className=' italic'>Prepartion Time:</span> {prepTimeMinutes} mins</p>
     <p><span className='italic  '>Cooking Time:</span> {cookTimeMinutes} mins</p>
     <p><span className='italic  '>Servings:</span> {servings}</p>
     <p><span className=' italic '>CaloriesPerServing:</span> {caloriesPerServing}</p>
     </div>

    </div>
   
  )
}

export default RecipeCook
