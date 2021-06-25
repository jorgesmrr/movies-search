import {
  API_MOVIES,
  API_MOVIES_NOW_PLAYING,
  API_MOVIES_POPULAR,
  API_MOVIES_TOP_RATED,
  API_MOVIES_UPCOMING,
} from "../constants";
import apiClient from "../apiClient";
import {
  getMovie,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "./movie";
import { getMovieFixture, getMovieListFixture } from "./__fixtures__/movie";
import { movieTransformer } from "../transformers";

jest.mock("../apiClient");
const mockedApiClient = apiClient as jest.Mocked<typeof apiClient>;

describe("should call correct URL", () => {
  test("to get a movie", () => {
    getMovie(1)();

    expect(mockedApiClient.get).toHaveBeenCalledWith(`${API_MOVIES}/1`);
  });

  test("to get popular movies", () => {
    getPopularMovies(2)();

    expect(mockedApiClient.get).toHaveBeenCalledWith(
      `${API_MOVIES_POPULAR}?page=2`
    );
  });

  test("to get top rated movies", () => {
    getTopRatedMovies(2)();

    expect(mockedApiClient.get).toHaveBeenCalledWith(
      `${API_MOVIES_TOP_RATED}?page=2`
    );
  });

  test("to get upcoming movies", () => {
    getUpcomingMovies(2)();

    expect(mockedApiClient.get).toHaveBeenCalledWith(
      `${API_MOVIES_UPCOMING}?page=2`
    );
  });

  test("to get now playing movies", () => {
    getNowPlayingMovies(2)();

    expect(mockedApiClient.get).toHaveBeenCalledWith(
      `${API_MOVIES_NOW_PLAYING}?page=2`
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

  test("after getting popular movies", () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: getMovieListFixture(),
    });

    expect.assertions(1);
    return getPopularMovies()().then((result) => {
      const data = getMovieListFixture();
      expect(JSON.stringify(result)).toEqual(
        JSON.stringify({
          ...data,
          results: data.results.map(movieTransformer),
        })
      );
    });
  });

  test("after getting top rated movies", () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: getMovieListFixture(),
    });

    expect.assertions(1);
    return getTopRatedMovies()().then((result) => {
      const data = getMovieListFixture();
      expect(JSON.stringify(result)).toEqual(
        JSON.stringify({
          ...data,
          results: data.results.map(movieTransformer),
        })
      );
    });
  });

  test("after getting upcoming movies", () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: getMovieListFixture(),
    });

    expect.assertions(1);
    return getUpcomingMovies()().then((result) => {
      const data = getMovieListFixture();
      expect(JSON.stringify(result)).toEqual(
        JSON.stringify({
          ...data,
          results: data.results.map(movieTransformer),
        })
      );
    });
  });

  test("after getting now playing movies", () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: getMovieListFixture(),
    });

    expect.assertions(1);
    return getNowPlayingMovies()().then((result) => {
      const data = getMovieListFixture();
      expect(JSON.stringify(result)).toEqual(
        JSON.stringify({
          ...data,
          results: data.results.map(movieTransformer),
        })
      );
    });
  });
});
