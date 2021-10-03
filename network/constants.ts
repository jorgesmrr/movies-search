export const BASE_API_URL = "/api";
export const API_MOVIES = "/movie";
export const API_MOVIE_RECOMMENDED = (id: number | string): string =>
  `/movie/${id}/recommendations`;
export const API_MOVIE_CREDITS = (id: number | string): string =>
  `/movie/${id}/credits`;
export const API_MOVIE_IMAGES = (id: number | string): string =>
  `/movie/${id}/images`;
export const API_MOVIES_POPULAR = `${API_MOVIES}/popular`;
export const API_MOVIES_TOP_RATED = `${API_MOVIES}/top_rated`;
export const API_MOVIES_UPCOMING = `${API_MOVIES}/upcoming`;
export const API_MOVIES_NOW_PLAYING = `${API_MOVIES}/now_playing`;
export const API_TRENDING = "/trending";
export const API_TRENDING_MOVIES = `${API_TRENDING}/movie`;
export const API_SEARCH_MOVIES = "/search/movie";

export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p";

export enum BackdropSizes {
  Small = 300,
  Regular = 780,
  Big = 1280,
}

export enum PosterSizes {
  Tiny = 92,
  Small = 154,
  Medium = 185,
  Regular = 342,
  Big = 500,
  Large = 780,
}

export enum ProfileSizes {
  Tiny = 45,
  Medium = 185,
  Big = 632,
}

export type ImageSizes = BackdropSizes | PosterSizes | ProfileSizes;
