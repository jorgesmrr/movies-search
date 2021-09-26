import styled from "styled-components";
import { useEffect, useState } from "react";
import Pagination from "../../pagination/Pagination";
import ImageType from "../../../models/ImageType";
import { PosterSizes } from "../../../network/constants";
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

const sizes = {
  xs: PosterSizes.Big,
  md: PosterSizes.Medium,
  lg: PosterSizes.Regular,
};

const SearchScreen: React.FC<SearchScreenProps> = ({ search }) => {
  const [page, setPage] = useState(1);

  useEffect(
    () =>
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      }),
    [page]
  );

  return (
    <RegularPageContent>
      <LimitedWidth>
        <Heading1>Search results</Heading1>
        <SearchSubtitle>For &quot;{search}&quot;</SearchSubtitle>
        <Fetch
          endpoint={searchMovies(search, page)}
          render={({ data, isLoading, error }) => (
            <>
              {!isLoading && data?.results?.length === 0 && (
                <p>No movies found.</p>
              )}
              <MovieList
                isLoading={isLoading}
                error={error}
                movies={data?.results}
                count={20}
                imageType={ImageType.Poster}
                sizes={sizes}
              >
                <MovieList.Grid columns={5} />
              </MovieList>
              {data && (
                <Pagination
                  disabled={isLoading}
                  page={data.page}
                  totalPages={data.total_pages}
                  totalResults={data.total_results}
                  onPreviousClick={() => setPage(data.page - 1)}
                  onNextClick={() => setPage(data.page + 1)}
                />
              )}
            </>
          )}
        />
      </LimitedWidth>
    </RegularPageContent>
  );
};

export default SearchScreen;
