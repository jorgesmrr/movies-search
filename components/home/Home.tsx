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
        render={({ data, ...state }) => (
          <MovieList
            {...state}
            movies={data?.results}
            count={3}
            format={MovieListItemFormat.Backdrop}
          />
        )}
      />

      <Heading2>Now In Theaters</Heading2>
      <Fetch
        endpoint={getNowPlayingMovies()}
        dependencies={[]}
        render={({ data, ...state }) => (
          <MovieList
            {...state}
            movies={data?.results}
            count={6}
            format={MovieListItemFormat.Poster}
          />
        )}
      />
    </LimitedWidth>
  );
};

export default Home;
