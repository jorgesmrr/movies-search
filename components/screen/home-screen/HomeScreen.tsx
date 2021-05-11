import MovieImageType from "../../../models/MovieImageType";
import TrendingTimeWindow from "../../../models/TrendingTimeWindow";
import { getNowPlayingMovies } from "../../../network/resources/movie";
import { getTrendingMovies } from "../../../network/resources/trending";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import MoviesSection from "../../movie/movies-section/MoviesSection";
import { RegularPageContent } from "../../style/style";

const HomeScreen: React.FC = () => {
  return (
    <RegularPageContent>
      <LimitedWidth>
        <MoviesSection
          title="Trending Today"
          endpoint={getTrendingMovies(TrendingTimeWindow.Day)}
          imageType={MovieImageType.Backdrop}
        />

        <MoviesSection
          title="Now In Theaters"
          endpoint={getNowPlayingMovies()}
          imageType={MovieImageType.Poster}
        />
      </LimitedWidth>
    </RegularPageContent>
  );
};

export default HomeScreen;
