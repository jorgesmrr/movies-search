import Movie from "../../../models/Movie";
import { Subtitle } from "../../style/style";
import * as S from "./MovieDetails.styles";

export interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div>
      <S.BadgesList>
        {movie.isAdult && <S.ExplicitBadge>Explicit</S.ExplicitBadge>}
        {movie.genres.map((genre) => (
          <S.GenreBadge as="li" key={genre.id}>
            {genre.name}
          </S.GenreBadge>
        ))}
      </S.BadgesList>
      <S.AboutCard>
        {movie.tagline && <Subtitle>{movie.tagline}</Subtitle>}
        <p>{movie.overview}</p>
      </S.AboutCard>
    </div>
  );
};

export default MovieDetails;
