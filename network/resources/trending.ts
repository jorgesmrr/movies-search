import Movie from "../../models/Movie";
import PagedResponse from "../../models/PagedResponse";
import apiClient from "../apiClient";
import { API_TRENDING_MOVIES } from "../constants";
import { RequestEndpoint } from "@bit/jorgemoreira.headless-react.hooks";
import { movieTransformer } from "../transformers";

export const getTrendingMovies: (
  page?: number
) => RequestEndpoint<PagedResponse<Movie>> = (page = 1) => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(`${API_TRENDING_MOVIES}/day?page=${page}`)
      .then((response) => {
        response.data.results = response.data.results.map(movieTransformer);
        resolve(response.data);
      })
      .catch(reject);
  });
