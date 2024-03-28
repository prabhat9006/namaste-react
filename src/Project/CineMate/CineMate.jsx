import HeaderCineMate from "./HeaderCineMate";
import { useState } from "react";
import { MOVIE_DATA } from "./Movie";
import MovieCard from "./MovieCard";
const CineMate = () => {
  console.log(MOVIE_DATA);
  const [movieList, setMovieList] = useState(MOVIE_DATA.movies);
  const [genresList, setGenresList] = useState(MOVIE_DATA.genres);
  const [filterMovieList, setfilterMovieList] = useState(MOVIE_DATA.movies);

  const [genresValue, setGenres] = useState("");

  const handleChange = (e) => {
    setGenres(e.target.value);
  };
  const handleSearchClick = () => {
    const newMovieList = movieList.filter((item) => {
      const genresArr = item.genres.map((value) => value.toLowerCase());
      return genresArr.includes(genresValue.toLowerCase());
    });
    setfilterMovieList(newMovieList);
  };

  const getLatest = () => {
    const newMovieList = movieList.filter((item) => {
      return item.year > "1980";
    });
    setfilterMovieList(newMovieList);
  };
  const handleSelect = (e) => {
    setGenres(e.target.value);
    handleSearchClick();
  };
  return (
    <>
      <HeaderCineMate />
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              className="search-box"
              type="text"
              onChange={handleChange}
              value={genresValue}
            />
            <button onClick={handleSearchClick} className="search-btn btn-c">
              Search
            </button>
          </div>
          <button onClick={getLatest} className="filter-btn btn-c">
            Latest
          </button>
          <select className="dropdown" onChange={handleSelect}>
            {genresList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="res-container">
          {filterMovieList &&
            filterMovieList.map((item, index) => (
              <MovieCard movie={item} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};
export default CineMate;
