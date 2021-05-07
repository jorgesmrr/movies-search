import useRequest from "../../../hooks/useRequest";
import { searchMovies } from "../../../network/resources/movie";
import MovieList from "../movie-list/MovieList";

export interface SearchedMoviesListProps {
  search: string;
}

const SearchedMoviesList: React.FC<SearchedMoviesListProps> = ({ search }) => {
  const { data, isLoading, error } = useRequest(searchMovies(search), [search]);

  return (
    <div data-testid="searched-movies-list">
      {error ? (
        <div />
      ) : (
        <MovieList isLoading={isLoading} movies={data?.results} />
      )}
    </div>
  );
};

export default SearchedMoviesList;
