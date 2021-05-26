import { BackdropSizes, BASE_IMAGE_URL, PosterSizes } from "./costants";

export const getBackdropPath = (
  fileName: string,
  size: BackdropSizes
): string => `${BASE_IMAGE_URL}w${size}${fileName}`;

export const getPosterPath = (fileName: string, size: PosterSizes): string =>
  `${BASE_IMAGE_URL}/w${size}/${fileName}`;
