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
        <S.ContentsWrapper>
          <S.Contents>
            <S.OverviewWrapper maxWidth={70}>
              <MovieOverview movie={movie} />
            </S.OverviewWrapper>

            <LimitedWidth maxWidth={70}>
              <MovieCreditsSection movieId={movie.id} />

              <MoviesSection
                title="Recommended"
                imageType={ImageType.Poster}
                endpoint={getMovieRecommendations(movie.id)}
              />
            </LimitedWidth>
          </S.Contents>
        </S.ContentsWrapper>
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
