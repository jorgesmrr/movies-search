import Movie from "../../models/Movie";
import PagedResponse from "../../models/PagedResponse";

import apiClient from "../apiClient";
import {
  API_MOVIES,
  API_MOVIES_NOW_PLAYING,
  API_MOVIES_POPULAR,
  API_MOVIES_TOP_RATED,
  API_MOVIES_UPCOMING,
  API_RECOMMENDED_MOVIES,
} from "../constants";
import { RequestEndpoint } from "@bit/jorgemoreira.headless-react.hooks";
import { movieTransformer } from "../transformers";

const movieListEndpoint = (
  url: string
): RequestEndpoint<PagedResponse<Movie>> => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(url)
      .then((response) => {
        response.data.results = response.data.results.map(movieTransformer);
        resolve(response.data);
      })
      .catch(reject);
  });

export const getMovie = (id: number): RequestEndpoint<Movie> => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(`${API_MOVIES}/${id}`)
      .then((response) => resolve(movieTransformer(response.data)))
      .catch(reject);
  });

export const getMovieRecommendations: (
  id: number
) => RequestEndpoint<PagedResponse<Movie>> = (id) =>
  movieListEndpoint(API_RECOMMENDED_MOVIES(id));

export const getPopularMovies: (
  page?: number
) => RequestEndpoint<PagedResponse<Movie>> = (page = 1) =>
  movieListEndpoint(`${API_MOVIES_POPULAR}?page=${page}`);

export const getTopRatedMovies: (
  page?: number
) => RequestEndpoint<PagedResponse<Movie>> = (page = 1) =>
  movieListEndpoint(`${API_MOVIES_TOP_RATED}?page=${page}`);

export const getUpcomingMovies: (
  page?: number
) => RequestEndpoint<PagedResponse<Movie>> = (page = 1) =>
  movieListEndpoint(`${API_MOVIES_UPCOMING}?page=${page}`);

export const getNowPlayingMovies: (
  page?: number
) => RequestEndpoint<PagedResponse<Movie>> = (page = 1) =>
  movieListEndpoint(`${API_MOVIES_NOW_PLAYING}?page=${page}`);
