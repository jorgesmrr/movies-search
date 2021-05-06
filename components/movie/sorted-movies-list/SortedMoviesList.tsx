import useRequest from "../../../hooks/useRequest";
import { getMovies } from "../../../network/resources/movie";
import MovieList from "../movie-list/MovieList";

export enum MovieSortBy {
  Popular,
  New,
}

interface SortedMoviesListProps {
  sort: MovieSortBy;
}

const SortedMoviesList: React.FC<SortedMoviesListProps> = ({ sort }) => {
  const { data: movies, isLoading, error } = useRequest(getMovies());

  return error ? <div /> : <MovieList isLoading={isLoading} movies={movies} />;
};

export default SortedMoviesList;
