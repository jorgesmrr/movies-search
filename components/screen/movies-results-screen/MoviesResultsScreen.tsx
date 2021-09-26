import { useState } from "react";
import Movie from "../../../models/Movie";
import ImageType from "../../../models/ImageType";
import PagedResponse from "../../../models/PagedResponse";
import { PosterSizes } from "../../../network/constants";
import { RequestEndpoint } from "@bit/jorgemoreira.headless-react.hooks";
import Fetch from "@bit/jorgemoreira.headless-react.network.fetch";
import ImagesList from "../../image/images-list/ImagesList";
import { Heading1, LimitedWidth, RegularPageContent } from "../../style/style";
import Pagination from "../../pagination/Pagination";
import { getMoviePosterDescription } from "../../../network/helpers";

export interface MoviesResultsScreenProps {
  title: string;
  endpointGetter: (page: number) => RequestEndpoint<PagedResponse<Movie>>;
}

const sizes = {
  xs: PosterSizes.Big,
  md: PosterSizes.Medium,
  lg: PosterSizes.Regular,
};

const MoviesResultsScreen: React.FC<MoviesResultsScreenProps> = ({
  title,
  endpointGetter,
}) => {
  const [page, setPage] = useState(1);

  return (
    <RegularPageContent>
      <LimitedWidth>
        <Heading1>{title}</Heading1>
        <Fetch
          endpoint={endpointGetter(page)}
          render={({ data, isLoading, error }) => (
            <>
              <ImagesList
                isLoading={isLoading}
                error={error}
                images={data?.results.map(getMoviePosterDescription)}
                count={20}
                imageType={ImageType.Poster}
                sizes={sizes}
              >
                <ImagesList.Grid columns={5} />
              </ImagesList>
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

export default MoviesResultsScreen;
