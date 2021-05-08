import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import { getTrendingMovies } from "../../network/resources/movie";
import Fetch from "../fetch/Fetch";
import LimitedWidth from "../limited-width/LimitedWidth";
import MovieList from "../movie/movie-list/MovieList";

const Home: React.FC = () => {
  return (
    <LimitedWidth>
      <Fetch
        endpoint={getTrendingMovies(TrendingTimeWindow.Day)}
        dependencies={[]}
        render={({ data, ...state }) => (
          <MovieList movies={data?.results} {...state} />
        )}
      />
    </LimitedWidth>
  );
};

export default Home;
