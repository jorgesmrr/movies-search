import Movie from "../../models/Movie";
import apiClient from "../apiClient";
import Endpoint from "../endpoint";

export const getMovies = (): Endpoint<Movie[]> => () => apiClient.get(`/movie`);

export const getMovie = (id: number): Endpoint<Movie> => () =>
  apiClient.get(`/movie/${id}`);
