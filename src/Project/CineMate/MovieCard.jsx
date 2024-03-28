const MovieCard = (props) => {
  const { title, genres, thumbnail, year, extract, cast } = props.movie;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={thumbnail} />
      <h3>{title}</h3>
      <h4>{cast.join(", ")}</h4>
      <h4>{genres.join(", ")}</h4>
      <h4>{year}</h4>
      {/* <h4>{extract}</h4> */}
    </div>
  );
};

export default MovieCard;
