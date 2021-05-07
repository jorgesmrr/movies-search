import { API_MOVIES, API_SEARCH_MOVIES, API_TRENDING } from "../costants";
import apiClient from "../apiClient";
import { getMovie, getTrendingMovies, searchMovies } from "./movie";
import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import {
  allMovies,
  dayTrendingMovies,
  searchableMovies,
} from "./__fixtures__/movie";
import { mockResponsePage } from "../../utils/testing";

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
      data: allMovies[0],
    });

    expect.assertions(1);
    return getMovie(1)().then((result) => expect(result).toEqual(allMovies[0]));
  });

  test("after getting trending movies", () => {
    const fakeData = mockResponsePage(dayTrendingMovies);

    mockedApiClient.get.mockResolvedValueOnce({
      data: fakeData,
    });

    expect.assertions(1);
    return getTrendingMovies(TrendingTimeWindow.Day)().then((result) =>
      expect(result).toEqual(fakeData)
    );
  });

  test("after searching movies", () => {
    const fakeData = mockResponsePage(searchableMovies);

    mockedApiClient.get.mockResolvedValueOnce({
      data: fakeData,
    });

    expect.assertions(1);
    return searchMovies("foo")().then((result) =>
      expect(result).toEqual(fakeData)
    );
  });
});
