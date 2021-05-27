import Head from "next/head";
import MoviesResultsScreen from "../components/screen/movies-results-screen/MoviesResultsScreen";
import { getPopularMovies } from "../network/resources/movie";

const PopularPage: React.FC = () => (
  <div>
    <Head>
      <title>Popular Movies</title>
    </Head>

    <MoviesResultsScreen title="Popular" endpoint={getPopularMovies()} />
  </div>
);
export default PopularPage;
