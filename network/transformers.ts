import parse from "date-fns/parse";
import Movie from "../models/Movie";

export const movieTransformer: (responseData: any) => Movie = (
  responseData
) => ({
  id: responseData.id,
  title: responseData.title,

  poster: responseData.poster_path,
  backdrop: responseData.backdrop_path,

  isAdult: responseData.adult,
  genres: responseData.genres || [],
  language: responseData.original_language,
  releaseDate: parse(responseData.release_date, "yyyy-MM-dd", new Date()),
  runtime: responseData.runtime,

  tagline: responseData.tagline,
  overview: responseData.overview,

  imdbId: responseData.imdb_id,
});