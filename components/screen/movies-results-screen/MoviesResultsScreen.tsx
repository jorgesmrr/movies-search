import { DependencyList } from "react";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import PagedResponse from "../../../models/PagedResponse";
import { PosterSizes } from "../../../network/costants";
import { RequestEndpoint } from "@bit/jorgemoreira.headless-react.hooks";
import Fetch from "@bit/jorgemoreira.headless-react.network.fetch";
import MovieList from "../../movie/movie-list/MovieList";
import { Heading1, LimitedWidth, RegularPageContent } from "../../style/style";

export interface MoviesResultsScreenProps {
  title: string;
  endpoint: RequestEndpoint<PagedResponse<Movie>>;
  dependencies?: DependencyList;
}

const MoviesResultsScreen: React.FC<MoviesResultsScreenProps> = ({
  title,
  endpoint,
  dependencies = [],
}) => {
  const sizes = {
    xs: PosterSizes.Big,
    md: PosterSizes.Medium,
    lg: PosterSizes.Regular,
  };

  return (
    <RegularPageContent>
      <LimitedWidth>
        <Heading1>{title}</Heading1>
        <Fetch
          endpoint={endpoint}
          dependencies={dependencies}
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

export default MoviesResultsScreen;
