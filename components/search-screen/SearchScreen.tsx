import { searchMovies } from "../../network/resources/movie";
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
        <MovieList movies={data.results} {...state} />
      )}
    />
  );
};

export default SearchScreen;
