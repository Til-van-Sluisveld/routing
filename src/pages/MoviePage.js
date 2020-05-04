import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const route_parameters = useParams();
  console.log("rendering:", route_parameters);
  // etc.
  const [movieData, set_movieData] = useState();

  //console.log("render", ....);

  useEffect(() => {
    async function fetchData() {
      // getting the data from the API
      const data = await axios.get(
        `https://omdbapi.com/?apikey=120927c9&i=${route_parameters.imdb_id}`
      );
      console.log("data fetched:", data);
      set_movieData(data.data);
    }
    fetchData();
  }, [route_parameters.imdb_id]);

  console.log("movieData is:", movieData);

  if (movieData) {
    return (
      <div>
        <h1>{movieData.Title}</h1>
        <p>Genre: {movieData.Genre}</p>
        <img src={movieData.Poster} />
        <h6>Director</h6>
        <p>{movieData.Director}</p>
        <h6>Language</h6>
        <p>{movieData.Language}</p>
        <h6>Plot:</h6>
        <p>{movieData.Plot}</p>
        <h6>Imdb Rating</h6>
        <p>{movieData.imdbRating}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

//   return (
//     <div>
//       <h1>Now showing page: {route_parameters.imdb_id} </h1>
//     </div>
//   );
// }
