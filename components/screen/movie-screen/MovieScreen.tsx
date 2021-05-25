import styled from "styled-components";
import { UseRequestState } from "../../../hooks/useRequest";
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

const Contents = styled.div`
  box-shadow: ${({ theme }) => theme.shadow[2]};
`;

const Grid = styled(LimitedWidth)`
  display: flex;
  padding: 0 2rem;
  gap: 3rem;
`;

const Main = styled.main`
  flex: 1 1 0;
`;

const Aside = styled.aside`
  flex: 0 0 21rem;
`;

const PosterTranslation = styled.div`
  position: relative;
  transform: translateY(calc(-25rem + 5vh));
  z-index: 1;
`;

export type MovieScreenProps = UseRequestState<Movie>;

const MovieScreen: React.FC<MovieScreenProps> = ({
  data: movie,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <Spinner
        dataTestId="movie-details__spinner"
        primaryColor={theme.color.accent.default}
      />
    );
  }

  if (movie) {
    return (
      <section>
        <MovieHero title={movie.title} backdrop={movie.backdrop} />
        <Contents>
          <Grid maxWidth={70}>
            <Main>
              <MovieDetails movie={movie} />
            </Main>
            <Aside>
              <PosterTranslation>
                <MovieImagePlaceholder
                  rounded
                  type={MovieImageType.Poster}
                  shadowLevel={3}
                >
                  <MovieImage
                    type={MovieImageType.Poster}
                    title={movie.title}
                    path={movie.poster}
                    size={PosterSizes.Big}
                  />
                </MovieImagePlaceholder>
                <MovieMetadata movie={movie} />
              </PosterTranslation>
            </Aside>
          </Grid>
        </Contents>
      </section>
    );
  }

  return (
    <LimitedWidth>
      <Alert>Failed to load movie information. Please try again later.</Alert>
    </LimitedWidth>
  );
};

export default MovieScreen;
