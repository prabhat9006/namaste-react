import ResuturantCard from "./ResuturantCard";
import { restaurantList } from "../utils/constants";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [listOfrestaurant, setListOfrestaurant] = useState(restaurantList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList);
  const resTopRated = () => {
    const filteredList = listOfrestaurant.filter(
      (item) => item.data.avgRating > 3
    );
    setFilteredRestaurant(filteredList);
  };
  if (listOfrestaurant.length === 0) {
    return <Shimmer />;
  }
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearchClick = () => {
    const filteredList = listOfrestaurant.filter((item) =>
      item.data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            onChange={handleChange}
            value={searchValue}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <button onClick={resTopRated} className="filter-btn">
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant &&
          filteredRestaurant.map((item) => (
            <ResuturantCard restaurant={item} key={item.data.id} />
          ))}
      </div>
    </div>
  );
};

export default Body;
