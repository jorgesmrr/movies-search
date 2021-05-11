import styled from "styled-components";
import Movie from "../../../models/Movie";
import { Badge, Card, Heading1, ListNone, Subtitle } from "../../style/style";

const GenresWrapper = styled.dl`
  margin: 1.25rem 0;

  > dt {
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.5em;
  }
  > dd {
    margin-left: 0;
    margin-start: 0;
  }
`;

const GenresList = styled(ListNone)`
  display: flex;
  gap: 0.75rem;

  li {
    color: ${({ theme }) => theme.color.neutral.darkest};
    background-color: ${({ theme }) => theme.color.neutral.lighter};
    padding: 0.25rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.color.neutral.lighter};
    border-radius: ${({ theme }) => theme.radius};
  }
`;

const ExplicitBadge = styled(Badge)`
  text-transform: uppercase;
`;

const AboutCard = styled(Card)`
  margin: 1rem 0;
`;

export interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div>
      <Heading1>{movie.title}</Heading1>
      {movie.isAdult && <ExplicitBadge>Explicit</ExplicitBadge>}
      <GenresWrapper>
        <dt>Genres</dt>
        <dd>
          <GenresList>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
        </dd>
      </GenresWrapper>
      <AboutCard>
        {movie.tagline && <Subtitle>{movie.tagline}</Subtitle>}
        <p>{movie.overview}</p>
      </AboutCard>
    </div>
  );
};

export default MovieDetails;
