import useRequest from "../../../hooks/useRequest";
import Movie from "../../../models/Movie";

interface MovieDetailsProps {
  id: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ id }) => {
  const { data: movie, isLoading } = useRequest<Movie>("");

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
