import Movie from "../../models/Movie";
import PagedResponse from "../../models/PagedResponse";

import apiClient from "../apiClient";
import {
  API_MOVIES,
  API_MOVIES_NOW_PLAYING,
  API_MOVIES_POPULAR,
  API_MOVIES_TOP_RATED,
  API_MOVIES_UPCOMING,
} from "../costants";
import Endpoint from "../endpoint";
import { movieTransformer } from "../transformers";

const movieListEndpoint = (url: string): Endpoint<PagedResponse<Movie>> => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(url)
      .then((response) => {
        response.data.results = response.data.results.map(movieTransformer);
        resolve(response.data);
      })
      .catch(reject);
  });

export const getMovie = (id: number): Endpoint<Movie> => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(`${API_MOVIES}/${id}`)
      .then((response) => resolve(movieTransformer(response.data)))
      .catch(reject);
  });

export const getPopularMovies = (): Endpoint<PagedResponse<Movie>> =>
  movieListEndpoint(API_MOVIES_POPULAR);

export const getTopRatedMovies = (): Endpoint<PagedResponse<Movie>> =>
  movieListEndpoint(API_MOVIES_TOP_RATED);

export const getUpcomingMovies = (): Endpoint<PagedResponse<Movie>> =>
  movieListEndpoint(API_MOVIES_UPCOMING);

export const getNowPlayingMovies = (): Endpoint<PagedResponse<Movie>> =>
  movieListEndpoint(API_MOVIES_NOW_PLAYING);
