import { UseRequestState } from "@bit/jorgemoreira.headless-react.hooks";
import ImageType from "../../../models/ImageType";
import MovieHero from "../../movie/movie-hero/MovieHero";
import Spinner from "@bit/jorgemoreira.headless-react.progress.spinner";
import Movie from "../../../models/Movie";
import { Alert, LimitedWidth } from "../../style/style";
import * as S from "./MovieScreen.styles";
import theme from "../../style/theme";
import MoviesSection from "../../movie/movies-section/MoviesSection";
import { getMovieRecommendations } from "../../../network/resources/movie";
import MovieCreditsSection from "../../movie/movie-credits-section/MovieCreditsSection";
import MovieOverview from "../../movie/movie-overview/MovieOverview";
import MovieImagesSection from "../../movie-image/movie-images-section/MovieImagesSection";

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
      <S.Root>
        <MovieHero title={movie.title} backdrop={movie.backdrop} />
        <S.ContentsWrapper>
          <S.ContentsSection>
            <S.OverviewWrapper maxWidth={70}>
              <MovieOverview movie={movie} />
            </S.OverviewWrapper>

            <LimitedWidth maxWidth={70}>
              <MovieCreditsSection movieId={movie.id} />
              <MovieImagesSection movieId={movie.id} movieTitle={movie.title} />

              <aside>
                <MoviesSection
                  title="Recommended"
                  imageType={ImageType.Poster}
                  endpoint={getMovieRecommendations(movie.id)}
                  showImagesTitle
                />
              </aside>
            </LimitedWidth>
          </S.ContentsSection>
        </S.ContentsWrapper>
      </S.Root>
    );
  }

  return (
    <LimitedWidth>
      <Alert>Failed to load movie information. Please try again later.</Alert>
    </LimitedWidth>
  );
};

export default MovieScreen;
