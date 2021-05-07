import { API_MOVIES, API_SEARCH_MOVIES, API_TRENDING } from "../costants";
import apiClient from "../apiClient";
import {
  getMovie,
  getTrendingMovies,
  movieTransformer,
  searchMovies,
} from "./movie";
import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import {
  getMovieFixture,
  getSearchMoviesFixture,
  getTrendingMoviesFixture,
} from "./__fixtures__/movie";

jest.mock("../apiClient");
const mockedApiClient = apiClient as jest.Mocked<typeof apiClient>;

describe("should call correct URL", () => {
  test("to get a movie", () => {
    getMovie(1)();

    expect(mockedApiClient.get).toHaveBeenCalledWith(`${API_MOVIES}/1`);
  });

  test("to get day trending movies", () => {
    getTrendingMovies(TrendingTimeWindow.Day)();

    expect(mockedApiClient.get).toHaveBeenCalledWith(
      `${API_TRENDING}/movie/day`
    );
  });

  test("to get week trending movies", () => {
    getTrendingMovies(TrendingTimeWindow.Week)();

    expect(mockedApiClient.get).toHaveBeenCalledWith(
      `${API_TRENDING}/movie/week`
    );
  });

  test("to search movies", () => {
    searchMovies("foo bar")();

    expect(mockedApiClient.get).toHaveBeenCalledWith(
      `${API_SEARCH_MOVIES}?query=foo%20bar`
    );
  });
});

describe("should correctly transform received data", () => {
  test("after getting movie", () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: getMovieFixture(),
    });

    expect.assertions(1);
    return getMovie(1)().then((result) => {
      const data = getMovieFixture();
      expect(result).toEqual(movieTransformer(data));
    });
  });

  test("after getting trending movies", () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: getTrendingMoviesFixture(),
    });

    expect.assertions(1);
    return getTrendingMovies(TrendingTimeWindow.Day)().then((result) => {
      const data = getTrendingMoviesFixture();
      expect(JSON.stringify(result)).toEqual(
        JSON.stringify({
          ...data,
          results: data.results.map(movieTransformer),
        })
      );
    });
  });

  test("after searching movies", () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: getSearchMoviesFixture(),
    });

    expect.assertions(1);
    return searchMovies("foo")().then((result) => {
      const data = getSearchMoviesFixture();
      expect(JSON.stringify(result)).toEqual(
        JSON.stringify({
          ...data,
          results: data.results.map(movieTransformer),
        })
      );
    });
  });
});
