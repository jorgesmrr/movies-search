import Head from "next/head";
import MoviesResultsScreen from "../components/screen/movies-results-screen/MoviesResultsScreen";
import { getTopRatedMovies } from "../network/resources/movie";

const TopRatedPage: React.FC = () => (
  <div>
    <Head>
      <title>Top Rated Movies</title>
    </Head>

    <MoviesResultsScreen title="Top Rated" endpoint={getTopRatedMovies()} />
  </div>
);
export default TopRatedPage;
