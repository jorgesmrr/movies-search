import {
  BackdropSizes,
  BACKDROP_SIZES,
  BASE_IMAGE_URL,
  PosterSizes,
  POSTER_SIZES,
} from "./costants";

export const getBackdropPath = (
  fileName: string,
  size: BackdropSizes
): string => `${BASE_IMAGE_URL}w${BACKDROP_SIZES[size]}${fileName}`;

export const getPosterPath = (fileName: string, size: PosterSizes): string =>
  `${BASE_IMAGE_URL}/w${POSTER_SIZES[size]}/${fileName}`;
