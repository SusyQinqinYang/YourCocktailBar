import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = (props) => {
  const list = [
    {
      strDrink: "Mojito",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg",
      idDrink: "11000",
    },
    {
      strDrink: "Old Fashioned",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
      idDrink: "11001",
    },
    {
      strDrink: "Long Island Tea",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/tppn6i1589574695.jpg",
      idDrink: "11002",
    },
    {
      strDrink: "Dry Martini",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
      idDrink: "11005",
    },
    {
      strDrink: "Margarita",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      idDrink: "11007",
    },
    {
      strDrink: "Manhattan",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/hz7p4t1589575281.jpg",
      idDrink: "11008",
    },
    {
      strDrink: "Moscow Mule",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
      idDrink: "11009",
    },
  ];
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [cocktails, setCocktails] = useState(list);

  return (
    <div className="home">
      <div className="search">
        <h4 className="search-h4">Find your recipe</h4>
        <form className="recipe-form">
          <input
            type="text"
            placeholder="Search by cocktail name"
            className="search-input"
            onChange={(e) => setName(e.target.value)}
          />
          <Link to={`/cocktail/name/${name}`}>
            <button className="btn-search">Search</button>
          </Link>
          <input
            type="text"
            placeholder="Search by ingredient"
            className="search-input"
            onChange={(e) => setIngredient(e.target.value)}
          />
          <Link to={`/cocktail/ingredient/${ingredient}`}>
            <button className="btn-search">Search</button>
          </Link>
        </form>
      </div>
      <div className="cocktails">
        <h4 className="title-h4">What Is Popular</h4>
        <div className='home-flex-container'>
        {cocktails.map((cocktail, ind) => {
          return (
            <Link key={ind} to={`/cocktail/name/${cocktail.strDrink}`}>
            <div className="each-cocktail">
              <img src={cocktail.strDrinkThumb}/>
              <p>{cocktail.strDrink}</p>
            </div>
            </Link>
          )
        })}
        </div>
      </div>

    </div>
  );
};

export default Home;
