import MovieImageType from "../../../models/MovieImageType";
import { getNowPlayingMovies } from "../../../network/resources/movie";
import { getTrendingMovies } from "../../../network/resources/trending";
import MoviesSection from "../../movie/movies-section/MoviesSection";
import { LimitedWidth, RegularPageContent } from "../../style/style";

const HomeScreen: React.FC = () => {
  return (
    <RegularPageContent>
      <LimitedWidth>
        <MoviesSection
          title="Trending Today"
          endpoint={getTrendingMovies()}
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
