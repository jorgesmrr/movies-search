import useRequest from "../../../hooks/useRequest";
import MovieSort from "../../../models/MovieSort";
import { getMovies } from "../../../network/resources/movie";
import MovieList from "../movie-list/MovieList";

interface SortedMoviesListProps {
  sort: MovieSort;
}

const SortedMoviesList: React.FC<SortedMoviesListProps> = ({ sort }) => {
  const { data: movies, isLoading, error } = useRequest(getMovies(sort));

  return error ? <div /> : <MovieList isLoading={isLoading} movies={movies} />;
};

export default SortedMoviesList;
