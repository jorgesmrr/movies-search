import useRequest from "../../../hooks/useRequest";
import { searchMovies } from "../../../network/resources/movie";
import MovieList from "../movie-list/MovieList";

interface SearchedMoviesListProps {
  search: string;
}

const SearchedMoviesList: React.FC<SearchedMoviesListProps> = ({ search }) => {
  const { data: movies, isLoading, error } = useRequest(searchMovies(search));

  return error ? <div /> : <MovieList isLoading={isLoading} movies={movies} />;
};

export default SearchedMoviesList;
