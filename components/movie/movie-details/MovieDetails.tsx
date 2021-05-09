import format from "date-fns/format";
import useRequest from "../../../hooks/useRequest";
import { PosterSizes } from "../../../network/costants";
import { getMovie } from "../../../network/resources/movie";
import PosterImage from "../../image/poster-image/PosterImage";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";

export interface MovieDetailsProps {
  id: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ id }) => {
  const { data: movie, isLoading } = useRequest(getMovie(id), [id]);

  if (isLoading) {
    return <div data-testid="movie-details__spinner" />;
  }

  if (movie) {
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
  }

  return null;
};

export default MovieDetails;
