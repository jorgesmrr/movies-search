import Head from "next/head";
import MoviesResultsScreen from "../components/screen/movies-results-screen/MoviesResultsScreen";
import { getNowPlayingMovies } from "../network/resources/movie";

const NowPlayingPage: React.FC = () => (
  <div>
    <Head>
      <title>In Movies In Theaters</title>
    </Head>

    <MoviesResultsScreen title="In Theaters" endpoint={getNowPlayingMovies()} />
  </div>
);

export default NowPlayingPage;
