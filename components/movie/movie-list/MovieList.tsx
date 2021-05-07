import Movie from "../../../models/Movie";
import MovieListItem from "../movie-list-item/MovieListItem";

export interface MovieListProps {
  isLoading: boolean;
  movies?: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ isLoading, movies }) => {
  if (isLoading) {
    return <div data-testid="movie-list__spinner" />;
  }

  if (movies) {
    return (
      <ul aria-label="movies list">
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    );
  }

  return null;
};

export default MovieList;
