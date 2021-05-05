import useRequest from "../../../hooks/useRequest";
import Movie from "../../../models/Movie";

const MovieList: React.FC = () => {
  const { data: movies, loading } = useRequest<Movie[]>("");

  if (loading) {
    return <div data-testid="movie-list__spinner" />;
  }

  if (movies) {
    const renderedMovies = movies
      ? movies.map((movie) => (
          <li key={movie.id} aria-label={movie.title}>
            {movie.title}
          </li>
        ))
      : null;

    return <ul aria-label="movies list">{renderedMovies}</ul>;
  }

  return null;
};

export default MovieList;
