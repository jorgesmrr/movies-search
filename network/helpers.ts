import { BASE_IMAGE_URL } from "./costants";

export const getImagePath = (fileName: string, size: number): string =>
  `${BASE_IMAGE_URL}/w${size}/${fileName}`;
