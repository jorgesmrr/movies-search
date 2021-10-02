import parse from "date-fns/parse";
import { response } from "msw";
import Movie from "../models/Movie";
import MovieCredits from "../models/MovieCredits";

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
  releaseDate: responseData.release_date
    ? parse(responseData.release_date, "yyyy-MM-dd", new Date())
    : null,
  runtime: responseData.runtime,
  voteAverage: responseData.vote_average,

  tagline: responseData.tagline,
  overview: responseData.overview,

  imdbId: responseData.imdb_id,
});

export const movieCreditsTransformer: (responseData: any) => MovieCredits = (
  responseData
) => ({
  id: responseData.id,
  cast: responseData.cast.map((person) => ({
    id: person.id,
    name: person.name,
    character: person.character,
    photo: person.profile_path,
  })),
  crew: responseData.crew.map((person) => ({
    id: person.id,
    name: person.name,
    job: person.job,
    department: person.department,
  })),
});
