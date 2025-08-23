import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import RecipeCook from './RecipeCook';

const RecipeDetails = () => {
    const params=useParams();
       const [recipes,setRecipes]=useState([]);
      //const [error,setError]=useState("");
      const [loading,setLoading]=useState(true);
      
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

      const filteredRecipe=recipes.filter(recipe => recipe.id == params.id);
      console.log("filteredRecipe:"+filteredRecipe);

  return (
    <div>
     {loading && <p className='ml-35 mb-5'>Loading recipe data...</p> }
     <div className='flex flex-col justify-center items-center bg-red-300 rounded-xl'>
       {filteredRecipe.map(r => <li className='list-none'><RecipeCook key={r.id} {...r}/></li>)}
     </div>
    </div>
  )
}

export default RecipeDetails
