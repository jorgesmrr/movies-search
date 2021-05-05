import { useEffect, useState } from "react";
import axios from "axios";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios.get("").then((response) => setMovies(response.data));
  }, []);

  return movies ? (
    <ul data-testid="movie-list__movies"></ul>
  ) : (
    <div data-testid="movie-list__spinner" />
  );
};

export default MovieList;
