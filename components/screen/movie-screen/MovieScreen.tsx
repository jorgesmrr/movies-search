import useRequest from "../../../hooks/useRequest";
import { getMovie } from "../../../network/resources/movie";
import MovieDetails from "../../movie/movie-details/MovieDetails";
import MovieHero from "../../movie/movie-hero/MovieHero";

export interface MovieScreenProps {
  id: number;
}

const MovieScreen: React.FC<MovieScreenProps> = ({ id }) => {
  const { data: movie, isLoading } = useRequest(getMovie(id), [id]);

  if (isLoading) {
    return <div data-testid="movie-details__spinner" />;
  }

  if (movie) {
    return (
      <div>
        <MovieHero backdrop={movie.backdrop} />
        <MovieDetails movie={movie} />
      </div>
    );
  }

  return null;
};

export default MovieScreen;
