import { UseRequestState } from "@bit/jorgemoreira.headless-react.network.fetch/dist/hooks";
import Spinner from "@bit/jorgemoreira.headless-react.progress.spinner";
import ImageType from "../../../models/ImageType";
import Movie from "../../../models/Movie";
import MovieImages from "../../../models/MovieImages";
import MovieImagesTypeNav from "../../movie-image/movie-image-type-nav/MovieImagesTypeNav";
import MovieImagesGrid from "../../movie-image/movie-images-grid/MovieImagesGrid";
import MovieBackLink from "../../movie/movie-back-link/MovieBackLink";
import { Alert, LimitedWidth, RegularPageContent } from "../../style/style";

import theme from "../../style/theme";
import * as S from "./MovieImagesScreen.styles";

export interface MovieImagesScreenProps {
  movieState: UseRequestState<Movie>;
  imagesState: UseRequestState<MovieImages>;
  type: ImageType;
}

const MovieImagesScreen: React.FC<MovieImagesScreenProps> = ({
  movieState: { data: movie },
  imagesState: { isLoading: isLoadingImages, data: images, error },
  type,
}) => {
  if (isLoadingImages) {
    return (
      <S.SpinnerWrapper>
        <Spinner
          dataTestId="movie-details__spinner"
          primaryColor={theme.color.accent.default}
        />
      </S.SpinnerWrapper>
    );
  }

  if (images) {
    return (
      <RegularPageContent as="main">
        <LimitedWidth>
          <section>
            {movie && <MovieBackLink movie={movie} />}
            <S.Heading>Gallery</S.Heading>

            {movie && <MovieImagesTypeNav movieId={movie.id} />}

            <MovieImagesGrid
              images={images}
              isLoading={isLoadingImages}
              error={error}
              type={type}
              movieTitle={movie?.title}
            />
          </section>
        </LimitedWidth>
      </RegularPageContent>
    );
  }

  return (
    <LimitedWidth>
      <Alert>Failed to load movie information. Please try again later.</Alert>
    </LimitedWidth>
  );
};

export default MovieImagesScreen;
