import useRequest from "../../../hooks/useRequest";
import { getMovie } from "../../../network/resources/movie";

interface MovieDetailsProps {
  id: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ id }) => {
  const { data: movie, isLoading } = useRequest(getMovie(id));

  if (isLoading) {
    return <div data-testid="movie-details__spinner" />;
  }

  if (movie) {
    return (
      <div>
        <h1>{movie.title}</h1>
      </div>
    );
  }

  return null;
};

export default MovieDetails;
