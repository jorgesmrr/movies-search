import Movie from "../../models/Movie";
import MovieSort from "../../models/MovieSort";
import apiClient from "../apiClient";
import { API_MOVIES } from "../costants";
import Endpoint from "../endpoint";

export const getMovies = (sort: MovieSort): Endpoint<Movie[]> => () =>
  apiClient.get(`${API_MOVIES}`);

export const getMovie = (id: number): Endpoint<Movie> => () =>
  apiClient.get(`${API_MOVIES}/${id}`);

export const searchMovies = (search: string): Endpoint<Movie[]> => () =>
  apiClient.get(`${API_MOVIES}?title=${search}`);
