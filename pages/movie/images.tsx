import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import MovieImagesScreenConnect from "../../components/screen/movie-images-screen/MovieImagesScreenConnect";
import ImageType from "../../models/ImageType";

const MoviePage: React.FC = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const type = parseInt(router.query.type as string) as ImageType;
  const index =
    router.query.index !== undefined
      ? parseInt(router.query.index as string)
      : undefined;

  return (
    !isNaN(id) && (
      <div>
        <Head>
          <title>Movie images</title>
        </Head>

        <MovieImagesScreenConnect
          id={id}
          type={type}
          selectedImageIndex={index}
        />
      </div>
    )
  );
};
export default MoviePage;
