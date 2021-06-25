import Head from "next/head";
import MoviesResultsScreen from "../components/screen/movies-results-screen/MoviesResultsScreen";
import { getTrendingMovies } from "../network/resources/trending";

const TrendingPage: React.FC = () => (
  <div>
    <Head>
      <title>Trending Movies</title>
    </Head>

    <MoviesResultsScreen title="Trending" endpointGetter={getTrendingMovies} />
  </div>
);
export default TrendingPage;
