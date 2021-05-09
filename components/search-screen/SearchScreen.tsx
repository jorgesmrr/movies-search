import MovieListItemFormat from "../../models/MovieListItemFormat";
import { searchMovies } from "../../network/resources/search";
import Fetch from "../fetch/Fetch";
import MovieList from "../movie/movie-list/MovieList";

export interface SearchScreenProps {
  search: string;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ search }) => {
  return (
    <Fetch
      endpoint={searchMovies(search)}
      dependencies={[search]}
      render={({ data, ...state }) => (
        <MovieList
          {...state}
          movies={data.results}
          count={6}
          rowCount={6}
          format={MovieListItemFormat.Poster}
        />
      )}
    />
  );
};

export default SearchScreen;
