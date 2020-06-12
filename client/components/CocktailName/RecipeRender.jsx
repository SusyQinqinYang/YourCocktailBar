import React, { useState, useEffect } from "react";

const RecipeRender = ({ drinkWithRecipe }) => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(()=> {
        setIngredients(makeIngredientArr(drinkWithRecipe));
    }, [drinkWithRecipe]);

    const makeIngredientArr = (drinkWithRecipe) => {
        let tempIngredient = [];
        for (var i = 1; i<= 15; i++) {
            let strIngredient = `strIngredient${i}`;
            let strMeasure = `strMeasure${i}`
            if (drinkWithRecipe[strIngredient] !== null & drinkWithRecipe[strIngredient] !== '') {
                tempIngredient.push([drinkWithRecipe[strIngredient], drinkWithRecipe[strMeasure]])
            } else {
                break;
            }
        }
        return tempIngredient;
    };

  return (
    <div className="recipeByName">
      <div className="info">
        <h3 className="name-h3">{drinkWithRecipe.strDrink}</h3>
      </div>
      <div className="flex-container">
        <div className="img-box">
          <img src={drinkWithRecipe.strDrinkThumb} />
        </div>
        <div className="recipe-info">
          <div className="Glass">
            <h5>Glass:</h5>
            <p>{drinkWithRecipe.strGlass}</p>
          </div>
          <div className="Recipe">
            <h5>Recipe:</h5>
            <ul>
                {ingredients.map((ingredient, ind) => {
                    return (
                        <li key={ind}>{ingredient[0]}: {ingredient[1]}</li>
                    )
                })}
              </ul>
          </div>

          <div className="instruction">
            <h5>Instruction:</h5>
            <p>{drinkWithRecipe.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeRender;
