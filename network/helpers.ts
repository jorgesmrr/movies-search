import ImageDescription from "../models/ImageDescription";
import Movie from "../models/Movie";
import { BASE_IMAGE_URL } from "./constants";

export const getImagePath = (fileName: string, size: number): string =>
  `${BASE_IMAGE_URL}/w${size}${fileName}`;

const getPartialMovieImageDescription = (movie: Movie) => ({
  key: movie.id,
  title: movie.title,
  link: `movie?id=${movie.id}`,
});

export const getMoviePosterDescription = (movie: Movie): ImageDescription => ({
  ...getPartialMovieImageDescription(movie),
  path: movie.poster,
});

export const getMovieBackdropDescription = (
  movie: Movie
): ImageDescription => ({
  ...getPartialMovieImageDescription(movie),
  path: movie.poster,
});
