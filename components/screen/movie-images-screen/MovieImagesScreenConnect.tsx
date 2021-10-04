import { useRequestEffect } from "@bit/jorgemoreira.headless-react.hooks";
import ImageType from "../../../models/ImageType";
import { getMovie, getMovieImages } from "../../../network/resources/movie";
import MovieImagesScreen from "./MovieImagesScreen";

export interface MovieImagesScreenConnectProps {
  id: number;
  type: ImageType;
}

const MovieImagesScreenConnect: React.FC<MovieImagesScreenConnectProps> = ({
  id,
  type,
}) => {
  const movieState = useRequestEffect(getMovie(id), [id]);
  const imagesState = useRequestEffect(getMovieImages(id), [id]);

  return (
    <MovieImagesScreen
      movieState={movieState}
      imagesState={imagesState}
      type={type}
    />
  );
};

export default MovieImagesScreenConnect;
