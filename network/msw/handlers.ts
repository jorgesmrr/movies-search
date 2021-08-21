import { rest } from "msw";
import {
  API_MOVIES,
  API_MOVIES_NOW_PLAYING,
  API_MOVIES_POPULAR,
  API_MOVIES_TOP_RATED,
  API_MOVIES_UPCOMING,
  API_RECOMMENDED_MOVIES,
  API_SEARCH_MOVIES,
  API_TRENDING,
  BASE_API_URL,
} from "../constants";
import {
  getMovieFixture,
  getMovieListFixture,
} from "../resources/__fixtures__/movie";
import { getSearchMoviesFixture } from "../resources/__fixtures__/search";
import { getTrendingMoviesFixture } from "../resources/__fixtures__/trending";

const sucessfulResolver = (data: any) => (_, res, ctx) =>
  res(ctx.status(200), ctx.json(data));

export const handlers = [
  rest.get(
    `${BASE_API_URL}${API_MOVIES_POPULAR}`,
    sucessfulResolver(getMovieListFixture())
  ),
  rest.get(
    `${BASE_API_URL}${API_MOVIES_TOP_RATED}`,
    sucessfulResolver(getMovieListFixture())
  ),
  rest.get(
    `${BASE_API_URL}${API_MOVIES_UPCOMING}`,
    sucessfulResolver(getMovieListFixture())
  ),
  rest.get(
    `${BASE_API_URL}${API_MOVIES_NOW_PLAYING}`,
    sucessfulResolver(getMovieListFixture())
  ),

  rest.get(
    `${BASE_API_URL}${API_MOVIES}/:id`,
    sucessfulResolver(getMovieFixture())
  ),
  rest.get(
    `${BASE_API_URL}${API_RECOMMENDED_MOVIES(":id")}`,
    sucessfulResolver(getMovieListFixture())
  ),

  rest.get(
    `${BASE_API_URL}${API_TRENDING}/movie/:timeWindow`,
    sucessfulResolver(getTrendingMoviesFixture())
  ),

  rest.get(
    `${BASE_API_URL}${API_SEARCH_MOVIES}`,
    sucessfulResolver(getSearchMoviesFixture())
  ),
];
