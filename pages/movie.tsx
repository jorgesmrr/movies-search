import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import MovieScreen from "../components/screen/movie-screen/MovieScreen";

export default function HomePage() {
  const router = useRouter();
  const id = parseInt(router.query.id as string);

  return (
    !isNaN(id) && (
      <div>
        <Head>
          <title>Movie details</title>
        </Head>

        <MovieScreen id={id} />
      </div>
    )
  );
}
