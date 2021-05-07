import useRequest from "../../../hooks/useRequest";
import TrendingTimeWindow from "../../../models/TrendingTimeWindow";
import { getTrendingMovies } from "../../../network/resources/movie";
import MovieList from "../movie-list/MovieList";

export interface TrendingMoviesListProps {
  timeWindow: TrendingTimeWindow;
}

const TrendingMoviesList: React.FC<TrendingMoviesListProps> = ({
  timeWindow,
}) => {
  const { data: movies, isLoading, error } = useRequest(
    getTrendingMovies(timeWindow)
  );

  return error ? <div /> : <MovieList isLoading={isLoading} movies={movies} />;
};

export default TrendingMoviesList;
