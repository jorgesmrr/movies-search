import Movie from "../../models/Movie";
import MovieSort from "../../models/MovieSort";
import apiClient from "../apiClient";
import Endpoint from "../endpoint";

export const getMovies = (sort: MovieSort): Endpoint<Movie[]> => () =>
  apiClient.get(`/movie`);

export const getMovie = (id: number): Endpoint<Movie> => () =>
  apiClient.get(`/movie/${id}`);

export const searchMovies = (search: string): Endpoint<Movie[]> => () =>
  apiClient.get(`/movie?title=${search}`);
