import { UseRequestState } from "@bit/jorgemoreira.headless-react.hooks";
import MovieImageType from "../../../models/MovieImageType";
import { PosterSizes } from "../../../network/costants";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import MovieDetails from "../../movie/movie-details/MovieDetails";
import MovieHero from "../../movie/movie-hero/MovieHero";
import MovieImagePlaceholder from "../../movie/movie-image-placeholder/MovieImagePlaceholder";
import MovieImage from "../../movie/movie-image/MovieImage";
import MovieMetadata from "../../movie/movie-metadata/MovieMetadata";
import Spinner from "@bit/jorgemoreira.headless-react.progress.spinner";
import theme from "../../../styles/theme";
import Movie from "../../../models/Movie";
import { Alert } from "../../style/style";
import * as S from "./MovieScreen.styles";

export type MovieScreenProps = UseRequestState<Movie>;

const MovieScreen: React.FC<MovieScreenProps> = ({
  data: movie,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner
          dataTestId="movie-details__spinner"
          primaryColor={theme.color.accent.default}
        />
      </S.SpinnerWrapper>
    );
  }

  if (movie) {
    return (
      <S.Section>
        <MovieHero title={movie.title} backdrop={movie.backdrop} />
        <S.Contents>
          <S.Grid maxWidth={70}>
            <S.TitleSlot>
              <S.Title>{movie.title}</S.Title>
            </S.TitleSlot>

            <S.DetailsSlot>
              <MovieDetails movie={movie} />
            </S.DetailsSlot>

            <S.PosterSlot>
              <MovieImagePlaceholder
                rounded
                type={MovieImageType.Poster}
                shadowLevel={3}
              >
                <MovieImage
                  title={movie.title}
                  path={movie.poster}
                  sizes={{ xs: PosterSizes.Big }}
                />
              </MovieImagePlaceholder>
              <S.DesktopMetadataSlot>
                <MovieMetadata movie={movie} />
              </S.DesktopMetadataSlot>
            </S.PosterSlot>

            <S.MobileMetadataSlot>
              <MovieMetadata movie={movie} />
            </S.MobileMetadataSlot>
          </S.Grid>
        </S.Contents>
      </S.Section>
    );
  }

  return (
    <LimitedWidth>
      <Alert>Failed to load movie information. Please try again later.</Alert>
    </LimitedWidth>
  );
};

export default MovieScreen;
