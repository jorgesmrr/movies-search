import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import { getTrendingMovies } from "../../network/resources/movie";
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
            movies={data?.results.slice(0, 5)}
            rowCount={6}
            {...state}
          />
        )}
      />
    </LimitedWidth>
  );
};

export default Home;
