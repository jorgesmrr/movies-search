import format from "date-fns/format";
import Movie from "../../../models/Movie";
import { Heading1, Subtitle } from "../../style/style";

export interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div>
      <Heading1>{movie.title}</Heading1>
      <Subtitle>{movie.tagline}</Subtitle>
      <p>{movie.overview}</p>
      <p>{format(movie.releaseDate, "yyyy")}</p>
      {movie.isAdult && <p></p>}
      <p>
        {movie.genres.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </p>
      <p>{movie.language}</p>
      <p>{movie.runtime}</p>
      <p>{movie.imdbId}</p>
    </div>
  );
};

export default MovieDetails;
