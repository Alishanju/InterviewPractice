import { useState } from "react";

const ValidCase = () => {
  const [recipes, setRecipes] = useState("");

  async function handleClick() {
    const data = await fetch("https://dummyjson.com/recipes");
    const dataJson = await data.json();
    setRecipes(dataJson.recipes);
  }

  return (
    <div>
      <button onClick={handleClick}>Get Recipes</button>
      {recipes?.map((recipe) => (
        <p key={recipe.id}>{recipe.name}</p>
      ))}
    </div>
  );
};

export default ValidCase;  // ✅ MUST be here
