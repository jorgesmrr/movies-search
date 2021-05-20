import styled from "styled-components";
import MovieImageType from "../../../models/MovieImageType";
import { searchMovies } from "../../../network/resources/search";
import Fetch from "../../fetch/Fetch";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import MovieList from "../../movie/movie-list/MovieList";
import { Heading1, RegularPageContent, Subtitle } from "../../style/style";

const SearchSubtitle = styled(Subtitle)`
  margin-bottom: 1em;
`;

export interface SearchScreenProps {
  search: string;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ search }) => {
  return (
    <RegularPageContent>
      <LimitedWidth>
        <Heading1>Search results</Heading1>
        <SearchSubtitle>For &quot;{search}&quot;</SearchSubtitle>
        <Fetch
          endpoint={searchMovies(search)}
          dependencies={[search]}
          render={({ data, isLoading, error }) => (
            <MovieList
              isLoading={isLoading}
              error={error}
              movies={data?.results}
              count={20}
              imageType={MovieImageType.Poster}
            >
              <MovieList.Grid columns={6} />
            </MovieList>
          )}
        />
      </LimitedWidth>
    </RegularPageContent>
  );
};

export default SearchScreen;
