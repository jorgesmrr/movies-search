import MovieListItemFormat from "../../../models/MovieListItemFormat";
import { searchMovies } from "../../../network/resources/search";
import Fetch from "../../fetch/Fetch";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import MovieList from "../../movie/movie-list/MovieList";

export interface SearchScreenProps {
  search: string;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ search }) => {
  return (
    <LimitedWidth>
      <Fetch
        endpoint={searchMovies(search)}
        dependencies={[search]}
        render={({ data, isLoading, error }) => (
          <MovieList
            isLoading={isLoading}
            error={error}
            movies={data?.results}
            count={20}
            rowCount={6}
            format={MovieListItemFormat.Poster}
          >
            <MovieList.Grid />
          </MovieList>
        )}
      />
    </LimitedWidth>
  );
};

export default SearchScreen;
