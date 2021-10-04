import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import MovieImagesScreenConnect from "../../components/screen/movie-images-screen/MovieImagesScreenConnect";
import ImageType from "../../models/ImageType";

const typesMap = {
  backdrop: ImageType.Backdrop,
  poster: ImageType.Poster,
  logo: ImageType.Logo,
};

const MoviePage: React.FC = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const type = typesMap[(router.query.type as string) || "backdrop"];

  return (
    !isNaN(id) && (
      <div>
        <Head>
          <title>Movie images</title>
        </Head>

        <MovieImagesScreenConnect id={id} type={type} />
      </div>
    )
  );
};
export default MoviePage;
