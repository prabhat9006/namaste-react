import ResuturantCard from "./ResuturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import FoodCard from "./FoodCard";
const BodyFood = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState("chicken");
  const APP_ID = "ee83e2ba";
  const APP_KEY = "beb74d03b63259d328fcdc0636736e75";
  const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const url1 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

  const getRecipe = async () => {
    const res = await fetch(url1);
    const ress = await res.json();
    if (ress && ress.meals) {
      setRecipes(ress.meals);
    } else {
      setRecipes([]);
    }
  };
  useEffect(() => {
    getRecipe();
  }, []);
  console.log(recipes);

  if (recipes.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="res-container">
        {recipes &&
          recipes.map((item) => (
            <FoodCard restaurant={item} key={item.idMeal} />
          ))}
      </div>
    </div>
  );
};

export default BodyFood;
