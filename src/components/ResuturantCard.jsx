import { IMG_CDN_URL } from "../utils/constants";
const ResuturantCard = (props) => {
  const {
    name,
    cuisines,
    deliveryTime,
    avgRating,
    costForTwo,
    cloudinaryImageId,
  } = props.restaurant.data;
  const url = `${IMG_CDN_URL}${cloudinaryImageId}`;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={url} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>
        {avgRating} Star. {deliveryTime} mins
      </h4>
    </div>
  );
};

export default ResuturantCard;
