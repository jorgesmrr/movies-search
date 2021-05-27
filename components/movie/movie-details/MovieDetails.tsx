import styled from "styled-components";
import Movie from "../../../models/Movie";
import { Badge, Card, ListNone, Subtitle } from "../../style/style";

const Badges = styled(ListNone)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const ExplicitBadge = styled(Badge)`
  text-transform: uppercase;
`;

const GenreBadge = styled(Badge)`
  color: ${({ theme }) => theme.color.neutral.darkest};
  background-color: ${({ theme }) => theme.color.neutral.lighter};
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
      <Badges>
        {movie.isAdult && <ExplicitBadge>Explicit</ExplicitBadge>}
        {movie.genres.map((genre) => (
          <GenreBadge as="li" key={genre.id}>
            {genre.name}
          </GenreBadge>
        ))}
      </Badges>
      <AboutCard>
        {movie.tagline && <Subtitle>{movie.tagline}</Subtitle>}
        <p>{movie.overview}</p>
      </AboutCard>
    </div>
  );
};

export default MovieDetails;
