import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import MovieDetails from "../components/movie/movie-details/MovieDetails";

export default function HomePage() {
  const router = useRouter();
  const id = parseInt(router.query.id as string);

  return (
    !isNaN(id) && (
      <div>
        <Head>
          <title>Movie details</title>
        </Head>

        <MovieDetails id={id} />
      </div>
    )
  );
}
