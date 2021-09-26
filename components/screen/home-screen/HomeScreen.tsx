import ImageType from "../../../models/ImageType";
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
          imageType={ImageType.Backdrop}
        />

        <MoviesSection
          title="Now In Theaters"
          endpoint={getNowPlayingMovies()}
          imageType={ImageType.Poster}
        />
      </LimitedWidth>
    </RegularPageContent>
  );
};

export default HomeScreen;
