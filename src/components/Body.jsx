import ResuturantCard from "./ResuturantCard";
import { restaurantList } from "../utils/constants";
import { useState } from "react";
const Body = () => {
  const [listOfrestaurant, setListOfrestaurant] = useState(restaurantList);
  const resTopRated = () => {
    const filteredList = listOfrestaurant.filter(
      (item) => item.data.avgRating > 3
    );
    setListOfrestaurant(filteredList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button onClick={resTopRated} className="filter-btn">
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfrestaurant &&
          listOfrestaurant.map((item) => (
            <ResuturantCard restaurant={item} key={item.data.id} />
          ))}
      </div>
    </div>
  );
};

export default Body;
