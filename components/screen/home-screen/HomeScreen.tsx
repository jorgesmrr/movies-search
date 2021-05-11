import MovieImageType from "../../../models/MovieImageType";
import TrendingTimeWindow from "../../../models/TrendingTimeWindow";
import { getNowPlayingMovies } from "../../../network/resources/movie";
import { getTrendingMovies } from "../../../network/resources/trending";
import Fetch from "../../fetch/Fetch";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import MovieList from "../../movie/movie-list/MovieList";
import { Heading2, RegularPageContent } from "../../style/style";

const HomeScreen: React.FC = () => {
  return (
    <RegularPageContent>
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
              imageType={MovieImageType.Backdrop}
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
              imageType={MovieImageType.Poster}
              rowCount={6}
            >
              <MovieList.Slider activeSlide={0} />
            </MovieList>
          )}
        />
      </LimitedWidth>
    </RegularPageContent>
  );
};

export default HomeScreen;
