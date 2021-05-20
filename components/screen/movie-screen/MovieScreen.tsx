import styled from "styled-components";
import useRequest from "../../../hooks/useRequest";
import MovieImageType from "../../../models/MovieImageType";
import { PosterSizes } from "../../../network/costants";
import { getMovie } from "../../../network/resources/movie";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import MovieDetails from "../../movie/movie-details/MovieDetails";
import MovieHero from "../../movie/movie-hero/MovieHero";
import MovieImagePlaceholder from "../../movie/movie-image-placeholder/MovieImagePlaceholder";
import MovieImage from "../../movie/movie-image/MovieImage";
import MovieMetadata from "../../movie/movie-metadata/MovieMetadata";

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

export interface MovieScreenProps {
  id: number;
}

const MovieScreen: React.FC<MovieScreenProps> = ({ id }) => {
  const { data: movie, isLoading } = useRequest(getMovie(id), [id]);

  if (isLoading) {
    return <div data-testid="movie-details__spinner" />;
  }

  if (movie) {
    return (
      <section>
        <MovieHero backdrop={movie.backdrop} />
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

  return null;
};

export default MovieScreen;
