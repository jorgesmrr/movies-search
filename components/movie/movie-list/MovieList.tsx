import { useEffect, useState } from "react";
import axios from "axios";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState();

  const fetchMovies = async () => {
    const response = await axios.get("");
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderedMovies = movies
    ? movies.map((movie) => (
        <li key={movie.id} aria-label={movie.title}>
          {movie.title}
        </li>
      ))
    : null;

  return movies ? (
    <ul aria-label="movies list">{renderedMovies}</ul>
  ) : (
    <div data-testid="movie-list__spinner" />
  );
};

export default MovieList;
