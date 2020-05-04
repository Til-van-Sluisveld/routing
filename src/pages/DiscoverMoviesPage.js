import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const [searchState, set_searchState] = useState({ status: "idle" });

  const search = async () => {
    console.log("Start searching for:", searchText);
    set_searchState({ status: "searching" });
    console.log("searchState is:", searchState);
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    // Option A: use the browser-native fetch function
    // const data = await fetch(
    //   `https://omdbapi.com/?apikey=120927c9&s=${queryParam}`
    // ).then((r) => r.json());

    // Option B: use the `axios` library like we did on Tuesday
    const data = await axios.get(
      `https://omdbapi.com/?apikey=120927c9&s=${queryParam}`
    );

    set_searchState({ status: "done", data: data.data.Search });

    console.log("Success!", data.data.Search);
  };

  console.log("searchState is:", searchState);

  let display;
  if (searchState.status === "searching") {
    display = "Searching";
  }
  if (searchState.status === "done") {
    display = searchState.data.map((movie) => {
      return (
        <div className="movie">
          <Link to={`discover/${movie.imdbID}`}>
            <h4 key={movie.imdbID}>{movie.Title}</h4>
          </Link>
          <p> Year of release: {movie.Year}</p>
          <img className="movie_img" alt="movieposter" src={movie.Poster} />
        </div>
      );
    });
  }

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {display}
    </div>
  );
}
