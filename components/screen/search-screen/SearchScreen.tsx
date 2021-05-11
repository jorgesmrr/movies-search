import MovieImageType from "../../../models/MovieImageType";
import { searchMovies } from "../../../network/resources/search";
import Fetch from "../../fetch/Fetch";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import MovieList from "../../movie/movie-list/MovieList";
import { RegularPageContent } from "../../style/style";

export interface SearchScreenProps {
  search: string;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ search }) => {
  return (
    <RegularPageContent>
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
              imageType={MovieImageType.Poster}
            >
              <MovieList.Grid />
            </MovieList>
          )}
        />
      </LimitedWidth>
    </RegularPageContent>
  );
};

export default SearchScreen;
