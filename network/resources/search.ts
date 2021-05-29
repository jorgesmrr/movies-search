import Movie from "../../models/Movie";
import PagedResponse from "../../models/PagedResponse";
import apiClient from "../apiClient";
import { API_SEARCH_MOVIES } from "../costants";
import { RequestEndpoint } from "@bit/jorgemoreira.headless-react.hooks";
import { movieTransformer } from "../transformers";

export const searchMovies = (
  query: string
): RequestEndpoint<PagedResponse<Movie>> => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(`${API_SEARCH_MOVIES}?query=${encodeURI(query)}`)
      .then((response) => {
        response.data.results = response.data.results.map(movieTransformer);
        resolve(response.data);
      })
      .catch(reject);
  });
