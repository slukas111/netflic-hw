import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, isSmallRow, isMediumRow}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_promo">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_post ${isLargeRow && "row_postLarge"}  ${isSmallRow && "row_postSmall"} ${isMediumRow && "row_postMedium"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
