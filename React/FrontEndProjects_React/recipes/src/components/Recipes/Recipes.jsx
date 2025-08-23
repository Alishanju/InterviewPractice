import React, { useEffect,useState } from 'react';
import RecipeComp from './RecipeComp';

const Recipes = () => {
    const [recipes,setRecipes]=useState([]);
    //const [error,setError]=useState("");
    const [loading,setLoading]=useState(true);
    const [FilterRating,setFilterRating]=useState(4);



    async function fetchRecipes(){
        try{
            const data=await fetch('https://dummyjson.com/recipes');
            const jsonData=await data.json();
           setRecipes(jsonData.recipes);
        }catch(error) {
      //console.error('Error fetching recipes:', error);
      //setError(error);
    } finally {
      setLoading(false);
    }
 }

    useEffect(() => {
        fetchRecipes();

    },[]);

    const filteredRecipes=recipes.filter(recipe => recipe.rating >= FilterRating);
    
    


  return (
    <>
    {loading && <p className='ml-35 mb-5'>Loading recipe data...</p> }
     <div className='flex ml-35 gap-2'>
      <label className='font-bold'>Filter by Rating:  </label>
      <select className=' border-3 border-red-200' value={FilterRating} onChange={(e => setFilterRating(e.target.value))}>
            <option value={4}>4.0+</option>
            <option value={4.3}>4.3+</option>
            <option value={4.5}>4.5+</option>
            <option value={4.7}>4.7+</option>
            <option value={4.9}>4.9</option>

      </select>
    </div>
   
     <div className='flex flex-wrap gap-4 justify-center items-center mt-4'>
      
   {filteredRecipes.map(recipe => <RecipeComp key={recipe.id} {...recipe}/>)}
      
    </div>
    </>
  )
}

export default Recipes;

