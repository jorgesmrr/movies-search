import styled from "styled-components";
import useRequest from "../../../hooks/useRequest";
import { PosterSizes } from "../../../network/costants";
import { getMovie } from "../../../network/resources/movie";
import PosterImage from "../../image/poster-image/PosterImage";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import MovieDetails from "../../movie/movie-details/MovieDetails";
import MovieHero from "../../movie/movie-hero/MovieHero";

const Contents = styled.div`
  box-shadow: ${(props) => props.theme.shadow[2]};
`;

const Grid = styled(LimitedWidth)`
  display: flex;
  padding: 0 2rem;
  gap: 2rem;
`;

const Main = styled.main`
  flex: 1 1 0;
`;

const Aside = styled.aside`
  flex: 0 0 21rem;
`;

const PosterTranslation = styled.div`
  transform: translateY(-20vh);
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
                <PosterImage
                  fileName={movie.poster}
                  size={PosterSizes.Big}
                  shadowLevel={3}
                />
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
