import { UseRequestState } from "@bit/jorgemoreira.headless-react.network.fetch/dist/hooks";
import Spinner from "@bit/jorgemoreira.headless-react.progress.spinner";
import ImageType from "../../../models/ImageType";
import Movie from "../../../models/Movie";
import MovieImages from "../../../models/MovieImages";
import { Button } from "../../button/Button.styles";
import Link from "next/link";
import MovieImagesTypeNav from "../../movie-image/movie-image-type-nav/MovieImagesTypeNav";
import MovieImagesGrid from "../../movie-image/movie-images-grid/MovieImagesGrid";
import MovieImagesSlider from "../../movie-image/movie-images-slider/MovieImagesSlider";
import MovieBackLink from "../../movie/movie-back-link/MovieBackLink";
import { Alert, LimitedWidth, RegularPageContent } from "../../style/style";

import theme from "../../style/theme";
import * as S from "./MovieImagesScreen.styles";

export interface MovieImagesScreenProps {
  movieState: UseRequestState<Movie>;
  imagesState: UseRequestState<MovieImages>;
  type: ImageType;
  selectedImageIndex?: number;
}

const typeMap = {
  [ImageType.Backdrop]: "backdrops",
  [ImageType.Poster]: "posters",
  [ImageType.Logo]: "logos",
};

const MovieImagesScreen: React.FC<MovieImagesScreenProps> = ({
  movieState: { isLoading: isLoadingMovie, data: movie },
  imagesState: { isLoading: isLoadingImages, data: images, error },
  type,
  selectedImageIndex,
}) => {
  if (isLoadingImages || isLoadingMovie) {
    return (
      <S.SpinnerWrapper>
        <Spinner
          dataTestId="movie-details__spinner"
          primaryColor={theme.color.accent.default}
        />
      </S.SpinnerWrapper>
    );
  }

  if (images && movie) {
    return (
      <RegularPageContent as="main">
        <LimitedWidth>
          <section>
            {movie && <MovieBackLink movie={movie} />}

            <S.Head>
              <S.Heading>Gallery</S.Heading>

              {selectedImageIndex !== undefined && (
                <div>
                  <Link href={`/movie/images?id=${movie.id}&type=${type}`}>
                    <a>
                      <Button>See grid</Button>
                    </a>
                  </Link>
                </div>
              )}

              {movie && (
                <MovieImagesTypeNav
                  movieId={movie.id}
                  selectedImageType={type}
                />
              )}
            </S.Head>

            {selectedImageIndex !== undefined ? (
              <MovieImagesSlider
                selectedIndex={selectedImageIndex}
                images={images[typeMap[type]]}
                type={type}
                movieId={movie.id}
                movieTitle={movie.title}
              />
            ) : (
              <MovieImagesGrid
                images={images[typeMap[type]]}
                isLoading={isLoadingImages}
                error={error}
                type={type}
                movieId={movie.id}
                movieTitle={movie.title}
              />
            )}
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
