import Head from "next/head";
import MoviesResultsScreen from "../components/screen/movies-results-screen/MoviesResultsScreen";
import { getNowPlayingMovies } from "../network/resources/movie";

export default function NowPlayingPage() {
  return (
    <div>
      <Head>
        <title>In Movies In Theaters</title>
      </Head>

      <MoviesResultsScreen
        title="In Theaters"
        endpoint={getNowPlayingMovies()}
      />
    </div>
  );
}
