import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import LimitedWidth from "../limited-width/LimitedWidth";
import TrendingMoviesList from "../movie/sorted-movies-list/TrendingMoviesList";

const Home: React.FC = () => {
  return (
    <LimitedWidth>
      <TrendingMoviesList timeWindow={TrendingTimeWindow.Day} />
    </LimitedWidth>
  );
};

export default Home;
