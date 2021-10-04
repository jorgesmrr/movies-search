import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import MovieCreditsScreenConnect from "../../components/screen/movie-credits-screen/MovieCreditsScreenConnect";

const MoviePage: React.FC = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);

  return (
    !isNaN(id) && (
      <div>
        <Head>
          <title>Movie cast & crew</title>
        </Head>

        <MovieCreditsScreenConnect id={id} />
      </div>
    )
  );
};
export default MoviePage;
