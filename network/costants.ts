export const PUBLIC_API_KEY = "46adf19d446a9d45cb333774af099e25";

export const BASE_API_URL = "https://api.themoviedb.org/3";
export const API_MOVIES = "/movie";
export const API_MOVIES_POPULAR = `${API_MOVIES}/popular`;
export const API_MOVIES_TOP_RATED = `${API_MOVIES}/top_rated`;
export const API_MOVIES_UPCOMING = `${API_MOVIES}/upcoming`;
export const API_MOVIES_NOW_PLAYING = `${API_MOVIES}/now_playing`;
export const API_TRENDING = "/trending";
export const API_SEARCH_MOVIES = "/search/movie";

export const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/";

export const BACKDROP_SIZES = [300, 780, 1280];
export const POSTER_SIZES = [92, 154, 185, 342, 500, 780];

export enum BackdropSizes {
  Small,
  Regular,
  Big,
}

export enum PosterSizes {
  Tiny,
  Small,
  Medium,
  Regular,
  Big,
  Large,
}