import ImageDescription from "../models/ImageDescription";
import ImageType from "../models/ImageType";
import Movie from "../models/Movie";
import { CastMember } from "../models/MovieCredits";
import { MovieImage } from "../models/MovieImages";
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
  path: movie.backdrop,
});

export const getMovieCreditImageDescription = (
  credit: CastMember
): ImageDescription => ({
  key: credit.id,
  title: credit.name,
  path: credit.photo,
});

export const getMovieImageDescription = (
  movieId: number,
  movieName: string,
  type: ImageType
) => (image: MovieImage, index: number): ImageDescription => ({
  key: image.path,
  title: movieName,
  path: image.path,
  link: `/movie/images?id=${movieId}&type=${type}&index=${index}`,
});
