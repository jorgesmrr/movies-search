import useRequest from "../../../hooks/useRequest";
import Movie from "../../../models/Movie";

const MovieList: React.FC = () => {
  const { data: movies, loading } = useRequest<Movie[]>("");

  const renderedMovies = movies
    ? movies.map((movie) => (
        <li key={movie.id} aria-label={movie.title}>
          {movie.title}
        </li>
      ))
    : null;

  return loading ? (
    <div data-testid="movie-list__spinner" />
  ) : (
    <ul aria-label="movies list">{renderedMovies}</ul>
  );
};

export default MovieList;
