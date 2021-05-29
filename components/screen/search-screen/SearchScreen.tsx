import styled from "styled-components";
import MovieImageType from "../../../models/MovieImageType";
import { PosterSizes } from "../../../network/costants";
import { searchMovies } from "../../../network/resources/search";
import Fetch from "@bit/jorgemoreira.headless-react.network.fetch";
import MovieList from "../../movie/movie-list/MovieList";
import {
  Heading1,
  LimitedWidth,
  RegularPageContent,
  Subtitle,
} from "../../style/style";

const SearchSubtitle = styled(Subtitle)`
  margin-bottom: 1em;
`;

export interface SearchScreenProps {
  search: string;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ search }) => {
  const sizes = {
    xs: PosterSizes.Big,
    md: PosterSizes.Medium,
    lg: PosterSizes.Regular,
  };

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
              sizes={sizes}
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
