import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import MovieScreenConnect from "../components/screen/movie-screen/MovieScreenConnect";

export default function HomePage() {
  const router = useRouter();
  const id = parseInt(router.query.id as string);

  return (
    !isNaN(id) && (
      <div>
        <Head>
          <title>Movie details</title>
        </Head>

        <MovieScreenConnect id={id} />
      </div>
    )
  );
}
