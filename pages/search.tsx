import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import SearchedMoviesList from "../components/movie/searched-movies-list/SearchedMoviesList";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Movies details</title>
        <meta name="description" content="Search results" />
      </Head>

      <SearchedMoviesList search={router.query.q as string} />
    </div>
  );
}
