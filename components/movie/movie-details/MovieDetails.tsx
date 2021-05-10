import format from "date-fns/format";
import Movie from "../../../models/Movie";
import { PosterSizes } from "../../../network/costants";
import PosterImage from "../../image/poster-image/PosterImage";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";

export interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <LimitedWidth>
      <h1>{movie.title}</h1>
      <p>{movie.tagline}</p>
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

      <PosterImage fileName={movie.poster} size={PosterSizes.Tiny} />
    </LimitedWidth>
  );
};

export default MovieDetails;
