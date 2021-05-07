import Movie from "../../../models/Movie";

export interface MovieListProps {
  isLoading: boolean;
  movies?: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ isLoading, movies }) => {
  if (isLoading) {
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
