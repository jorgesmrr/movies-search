export const TMDB_PUBLIC_API_KEY = "46adf19d446a9d45cb333774af099e25";

export const TMDB_BASE_API_URL = "https://api.themoviedb.org/3";
export const TMDB_API_MOVIES = "/movie";
export const TMDB_API_RECOMMENDED_MOVIES = (id: string): string =>
  `/movie/${id}/recommendations`;
export const TMDB_API_MOVIES_POPULAR = `${TMDB_API_MOVIES}/popular`;
export const TMDB_API_MOVIES_TOP_RATED = `${TMDB_API_MOVIES}/top_rated`;
export const TMDB_API_MOVIES_UPCOMING = `${TMDB_API_MOVIES}/upcoming`;
export const TMDB_API_MOVIES_NOW_PLAYING = `${TMDB_API_MOVIES}/now_playing`;
export const TMDB_API_TRENDING = "/trending";
export const TMDB_API_TRENDING_MOVIES = `${TMDB_API_TRENDING}/movie`;
export const TMDB_API_SEARCH_MOVIES = "/search/movie";
