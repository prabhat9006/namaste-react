const FoodCard = (props) => {
  console.log(props);
  const { strMeal, strMealThumb, strArea, strCategory } = props.restaurant;

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={strMealThumb} />
      <h3>{strMeal}</h3>
      <h4>{strArea}</h4>
      <h4>{strCategory}</h4>
    </div>
  );
};

export default FoodCard;
