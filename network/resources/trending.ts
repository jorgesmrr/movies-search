import Movie from "../../models/Movie";
import PagedResponse from "../../models/PagedResponse";
import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import apiClient from "../apiClient";
import { API_TRENDING_MOVIES } from "../constants";
import { RequestEndpoint } from "@bit/jorgemoreira.headless-react.hooks";
import { movieTransformer } from "../transformers";

export const getTrendingMovies = (
  timeWindow: TrendingTimeWindow
): RequestEndpoint<PagedResponse<Movie>> => () => {
  const timeWindowValues = {
    [TrendingTimeWindow.Day]: "day",
    [TrendingTimeWindow.Week]: "week",
  };

  return new Promise((resolve, reject) => {
    apiClient
      .get(`${API_TRENDING_MOVIES}/${timeWindowValues[timeWindow]}`)
      .then((response) => {
        response.data.results = response.data.results.map(movieTransformer);
        resolve(response.data);
      })
      .catch(reject);
  });
};
