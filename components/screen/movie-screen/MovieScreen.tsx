import { UseRequestState } from "@bit/jorgemoreira.headless-react.hooks";
import ImageType from "../../../models/ImageType";
import { PosterSizes } from "../../../network/constants";
import MovieDetails from "../../movie/movie-details/MovieDetails";
import MovieHero from "../../movie/movie-hero/MovieHero";
import ImagePlaceholder from "../../image/image-placeholder/ImagePlaceholder";
import TmdbImage from "../../image/tmdb-image/TmdbImage";
import MovieMetadata from "../../movie/movie-metadata/MovieMetadata";
import Spinner from "@bit/jorgemoreira.headless-react.progress.spinner";
import Movie from "../../../models/Movie";
import { Alert, LimitedWidth } from "../../style/style";
import * as S from "./MovieScreen.styles";
import theme from "../../style/theme";
import MoviesSection from "../../movie/movies-section/MoviesSection";
import { getMovieRecommendations } from "../../../network/resources/movie";

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

              <MoviesSection
                title="Recommended"
                imageType={ImageType.Poster}
                endpoint={getMovieRecommendations(movie.id)}
              />
            </S.DetailsSlot>

            <S.PosterSlot>
              <ImagePlaceholder rounded type={ImageType.Poster} shadowLevel={3}>
                <TmdbImage
                  title={movie.title}
                  path={movie.poster}
                  sizes={{ xs: PosterSizes.Big }}
                />
              </ImagePlaceholder>
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
