import format from "date-fns/format";
import useRequest from "../../../hooks/useRequest";
import { getSmallPosterPath } from "../../../network/helpers";
import { getMovie } from "../../../network/resources/movie";

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
      <div>
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

        <img src={getSmallPosterPath(movie.poster)} />
      </div>
    );
  }

  return null;
};

export default MovieDetails;
