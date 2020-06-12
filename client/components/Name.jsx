import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeRender from "./RecipeRender";

const Name = (props) => {
  const [name, setName] = useState(`${props.match.params.name}`);
  const [drinksWithRecipe, setDrinksWithRecipe] = useState({});

  useEffect(() => {
    fetchDrinksWithRecipeByName(name);
  }, [props.match.params.name]);

  const fetchDrinksWithRecipeByName = (name) => {
    axios({
      method: "get",
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
      params: {
        s: name,
      },
    })
      .then(({ data }) => {
        setDrinksWithRecipe(data);
      })
      .catch((err) => {
        console.log("Get recipe by name axios err", err);
      });
  };

//   console.log("drinksWithRecipe", drinksWithRecipe);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by cocktail name"
        className="search-input"
        onChange={(e) => setName(e.target.value)}
      />
      <Link to={`/cocktail/name/${name}`}>
        <button className="btn-search">Search</button>
      </Link>

      {Object.values(drinksWithRecipe).length > 0 ? drinksWithRecipe.drinks.map((drinkWithRecipe, ind) => {
        return <RecipeRender key={ind} drinkWithRecipe={drinkWithRecipe} />;
      }) : ''}
    </div>
  );
};

export default Name;
