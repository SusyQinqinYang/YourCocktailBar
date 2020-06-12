import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [name, setName] = useState("margarita");
  const [ingredient, setIngredient] = useState("vodka");

  return (
    <div>
      <h6 className="home-h6">Find your cocktail recipe:</h6>
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
  );
};

export default Home;
