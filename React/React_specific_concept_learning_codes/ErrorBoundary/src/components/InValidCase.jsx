import React, { useState } from 'react'

const InvalidCase = () => {
    
  const [recipes, setRecipes] = useState("");

  async function handleClick() {
    const data = await fetch("https://dummyjson.com/recipes/invalid"); //invalid url 
    const dataJson = await data.json();
    setRecipes(dataJson.recipes);
  }

  return (
    <div>
      <button onClick={handleClick}>Get Recipes</button>
      { recipes?.map((recipe) => (
        <p key={recipe.id}>{recipe.name}</p>
      ))}
    </div>
  );
}

export default InvalidCase
