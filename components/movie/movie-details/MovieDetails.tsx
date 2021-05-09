import format from "date-fns/format";
import useRequest from "../../../hooks/useRequest";
import { getPosterPath } from "../../../network/helpers";
import { getMovie } from "../../../network/resources/movie";
import PosterImage from "../../image/poster-image/PosterImage";

export interface MovieDetailsProps {
  id: string;
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

        <PosterImage fileName={movie.poster} tiny />
      </div>
    );
  }

  return null;
};

export default MovieDetails;
