import Head from "next/head";
import MoviesResultsScreen from "../components/screen/movies-results-screen/MoviesResultsScreen";
import { getTopRatedMovies } from "../network/resources/movie";

export default function TopRatedPage() {
  return (
    <div>
      <Head>
        <title>Top Rated Movies</title>
      </Head>

      <MoviesResultsScreen title="Top Rated" endpoint={getTopRatedMovies()} />
    </div>
  );
}
