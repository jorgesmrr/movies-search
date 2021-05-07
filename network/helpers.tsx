import { BASE_IMAGE_URL, IMAGE_SIZE_POSTER_1 } from "./costants";

export const getSmallPosterPath = (fileName: string) =>
  `${BASE_IMAGE_URL}/${IMAGE_SIZE_POSTER_1}/${fileName}`;
