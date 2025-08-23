import React, { useEffect, useRef, useState } from 'react';
import { CiSearch } from "react-icons/ci";

const Input = () => {
  const [input,setInput]=useState("");
  const [recipess,setRecipes]=useState([]);
  const [suggestions,setSuggestions]=useState([]);
  const [loading,setLoading]=useState("");
  const [error,setError]=useState(null);
  const lastChange=useRef();

  function handleChange(e){
    setInput(e.target.value);
    
  }
async function getSuggestions(input){
  setLoading(true);
   try{
        const data=await fetch('https://dummyjson.com/recipes');
          const jsonData=await data.json();
          const recipes=jsonData.recipes;
          console.log(recipes);
          setRecipes(recipes);
          
        
          if(recipess.length > 0){
              let title=recipess.map((item) => {
              
                 return item.name
               });

               console.log(title);
               
               let result=title.filter(item => {
                 return item.toLowerCase().includes(input.toLowerCase());
               });  

               console.log(result);
               if(result.length === 0){
              
            setError("No Recipes found!")
          
               }else{
          
               setSuggestions(result);
               }
               
          }
        
      }catch(error) {
        
        console.error('Error fetching recipes:', error);
        setError(error);
      } finally {
         
        setLoading(false);
        
      }

}

  function getdebouncedSuggestions(input){
    if(lastChange.current){
      clearTimeout(lastChange.current)
    }
    
    lastChange.current=setTimeout(()=>{
      lastChange.current=null;
      getSuggestions(input);
      console.log("in debounced")

    },300)




  }

  useEffect(()=>{
    if(input.length>1){
      getdebouncedSuggestions(input);

    }else{
      setError("");
      setSuggestions([]);


    }

  },[input]);

  return (
   <div className='relative w-1/3'>
    <div className=' hidden md:block md:flex bg-gray-100 border-1 outline-none focus-within:border-red-200 px-2 py-1 rounded-md w-2/3' >
        <CiSearch  className='mt-1 pr-1 w-10'/>
        <input text="text" placeholder='Search recipes...'className='outline-none' value={input} onChange={handleChange}/>
      
    </div>
    <div className='z-10 bg-transparent absolute left-0 w-2/3 mt-2 shadow bg-white'>
        {loading&&<p>Loading...</p>}
        {error &&<p className='text-red-800'>No Recipes found!</p>}
        {!loading && !error && suggestions && <div>
          {suggestions.map(sugg => <p>{sugg}</p>)}
          </div>}
    </div>
    </div>
  )
}

export default Input
