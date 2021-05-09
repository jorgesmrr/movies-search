import Movie from "../../models/Movie";

import apiClient from "../apiClient";
import { API_MOVIES } from "../costants";
import Endpoint from "../endpoint";
import { movieTransformer } from "../transformers";

export const getMovie = (id: string): Endpoint<Movie> => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(`${API_MOVIES}/${id}`)
      .then((response) => resolve(movieTransformer(response.data)))
      .catch(reject);
  });
