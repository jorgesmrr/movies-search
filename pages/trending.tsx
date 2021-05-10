import Head from "next/head";
import MoviesResultsScreen from "../components/screen/movies-results-screen/MoviesResultsScreen";
import TrendingTimeWindow from "../models/TrendingTimeWindow";
import { getTrendingMovies } from "../network/resources/trending";

export default function TrendingPage() {
  return (
    <div>
      <Head>
        <title>Trending Movies</title>
      </Head>

      <MoviesResultsScreen
        title="Trending"
        endpoint={getTrendingMovies(TrendingTimeWindow.Day)}
      />
    </div>
  );
}
