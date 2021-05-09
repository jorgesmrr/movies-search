import MovieListItemFormat from "../../models/MovieListItemFormat";
import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import { getNowPlayingMovies } from "../../network/resources/movie";
import { getTrendingMovies } from "../../network/resources/trending";
import Fetch from "../fetch/Fetch";
import LimitedWidth from "../limited-width/LimitedWidth";
import MovieList from "../movie/movie-list/MovieList";
import { Heading2 } from "../style/style";

const Home: React.FC = () => {
  return (
    <LimitedWidth>
      <Heading2>Trending Today</Heading2>
      <Fetch
        endpoint={getTrendingMovies(TrendingTimeWindow.Day)}
        dependencies={[]}
        render={({ data, isLoading, error }) => (
          <MovieList
            isLoading={isLoading}
            error={error}
            movies={data?.results}
            count={9}
            format={MovieListItemFormat.Backdrop}
            rowCount={3}
          >
            <MovieList.Slider activeSlide={0} />
          </MovieList>
        )}
      />

      <Heading2>Now In Theaters</Heading2>
      <Fetch
        endpoint={getNowPlayingMovies()}
        dependencies={[]}
        render={({ data, isLoading, error }) => (
          <MovieList
            isLoading={isLoading}
            error={error}
            movies={data?.results}
            count={12}
            format={MovieListItemFormat.Poster}
            rowCount={6}
          >
            <MovieList.Slider activeSlide={0} />
          </MovieList>
        )}
      />
    </LimitedWidth>
  );
};

export default Home;
