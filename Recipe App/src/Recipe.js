import React from "react";

function Recipe({recipe})
{

  return(
    <div className="indi">
        <h1>{recipe.recipe.label}</h1>
        <p>{recipe.recipe.calories}</p>
        <img src={recipe.recipe.image} alt="" />
        <ul>
            {recipe.recipe.ingredients.map((recipe)=>{
                return(<li key={Math.random()}>{recipe.text}</li>);
            })}
        </ul>
    </div>
  )

}

export default Recipe;