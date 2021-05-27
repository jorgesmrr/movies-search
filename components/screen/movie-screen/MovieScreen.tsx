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
import { Alert, Heading1 } from "../../style/style";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Contents = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 1rem;
  flex: 1 0 auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px -10px 20px,
    rgba(0, 0, 0, 0.23) 0px -6px 6px;
`;

const Grid = styled(LimitedWidth)`
  display: grid;
  padding: 0 1rem;
  gap: 1rem;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "poster title"
    "metadata metadata"
    "text text";

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 2rem;
    gap: 0 3rem;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "poster title"
      "poster text";
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 21rem 1fr;
  }
`;

const TitleSlot = styled.div`
  grid-area: title;
  align-self: center;
`;

const Title = styled(Heading1)`
  margin-top: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: revert;
  }
`;

const DetailsSlot = styled.div`
  grid-area: text;
`;

const MobileMetadataSlot = styled.div`
  grid-area: metadata;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const DesktopMetadataSlot = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    margin-top: 1.25rem;
  }
`;

const PosterSlot = styled.div`
  grid-area: poster;
  position: relative;
  z-index: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: translateY(calc(-10rem + 5vh));
  }
`;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export type MovieScreenProps = UseRequestState<Movie>;

const MovieScreen: React.FC<MovieScreenProps> = ({
  data: movie,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner
          dataTestId="movie-details__spinner"
          primaryColor={theme.color.accent.default}
        />
      </SpinnerWrapper>
    );
  }

  if (movie) {
    return (
      <Section>
        <MovieHero title={movie.title} backdrop={movie.backdrop} />
        <Contents>
          <Grid maxWidth={70}>
            <TitleSlot>
              <Title>{movie.title}</Title>
            </TitleSlot>

            <DetailsSlot>
              <MovieDetails movie={movie} />
            </DetailsSlot>

            <PosterSlot>
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
              <DesktopMetadataSlot>
                <MovieMetadata movie={movie} />
              </DesktopMetadataSlot>
            </PosterSlot>

            <MobileMetadataSlot>
              <MovieMetadata movie={movie} />
            </MobileMetadataSlot>
          </Grid>
        </Contents>
      </Section>
    );
  }

  return (
    <LimitedWidth>
      <Alert>Failed to load movie information. Please try again later.</Alert>
    </LimitedWidth>
  );
};

export default MovieScreen;
