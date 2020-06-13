import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Ingredient = (props) => {
  const [ingredientName, setIngredientName] = useState(
    `${props.match.params.ingredient}`
  );
  const [ingredientDetail, setIngredientDetail] = useState({});
  const [drinks, setDrinks] = useState({});

  useEffect(() => {
    fetchIngredientDetailByName(ingredientName);
    fetchDrinksByIngredient(ingredientName);
  }, [props.match.params.ingredient]);

  const fetchIngredientDetailByName = (ingredient) => {
    axios({
      method: "get",
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
      params: {
        i: ingredient,
      },
    })
      .then(({ data }) => {
        setIngredientDetail(data);
      })
      .catch((err) => {
        console.log("Get recipe by name axios err", err);
      });
  };

  const fetchDrinksByIngredient = (ingredient) => {
    axios({
      method: "get",
      url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php",
      params: {
        i: ingredient,
      },
    })
      .then(({ data }) => {
        setDrinks(data);
      })
      .catch((err) => {
        console.log("Get recipe by name axios err", err);
      });
  };

  const ingredientDetailExist = (ingredientDetail) => {
    if (Object.values(ingredientDetail).length > 0) {
      if (ingredientDetail.ingredients !== null) {
        return true;
      }
    }
    return false;
  };

  const drinksExist = (drinks) => {
    if (Object.values(drinks).length > 0) {
      if (drinks.drinks !== null) {
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search by ingredient"
          className="searchInSubPage search-input"
          onChange={(e) => {
            setIngredientName(e.target.value);
          }}
        />
        <Link to={`/cocktail/ingredient/${ingredientName}`}>
          <button className="btn-search">Search</button>
        </Link>
      </div>

      {ingredientDetailExist(ingredientDetail) ? (
        <div className="ingredient">
          <div className="info">
            <h3 className="name-h3">
              {ingredientDetail.ingredients[0].strIngredient}
            </h3>
          </div>
          <div className="ingredient-flex flex-container">
            <div className="img-box">
              <img
                src={`https://www.thecocktaildb.com/images/ingredients/${props.match.params.ingredient}-Medium.png`}
              />
            </div>
            <div className="ingredient-info">
              <div className="ABV">
                <h5>ABV:</h5>
                <p>{ingredientDetail.ingredients[0].strABV}</p>
              </div>
              <div className="description">
                <h5>Description:</h5>
                <p>{ingredientDetail.ingredients[0].strDescription}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>
          {`Sorry, there is no record for ${ingredientName} yet`}
        </p>
      )}

      <div className="cocktails-ingredient">
        <h4 className="title-h4">Relevant Cocktails</h4>
        <div className="home-ingredient-flex-container">
          {drinksExist(drinks) ? (
            drinks.drinks.map((cocktail, ind) => {
              return (
                <Link
                  className="each-cocktail-ingredient"
                  key={ind}
                  to={`/cocktail/name/${cocktail.strDrink}`}
                >
                  <div>
                    <img src={cocktail.strDrinkThumb} />
                    <p>{cocktail.strDrink}</p>
                  </div>
                </Link>
              );
            })
          ) : (
           ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
