import { getMovieImagesFixture } from "../../network/resources/__fixtures__/movie";
import { movieImagesTransformer } from "../../network/transformers";
import MovieImages from "../MovieImages";

export const fakeMovieImages: MovieImages = movieImagesTransformer(
  getMovieImagesFixture()
);
