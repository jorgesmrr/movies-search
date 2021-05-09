import { BASE_IMAGE_URL, PosterSizes, POSTER_SIZES } from "./costants";

export const getPosterPath = (fileName: string, size: PosterSizes) =>
  `${BASE_IMAGE_URL}/w${POSTER_SIZES[size]}/${fileName}`;
