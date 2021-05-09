import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import apiClient from "../apiClient";
import { API_TRENDING } from "../costants";
import { movieTransformer } from "../transformers";
import { getTrendingMovies } from "./trending";
import { getTrendingMoviesFixture } from "./__fixtures__/trending";

jest.mock("../apiClient");
const mockedApiClient = apiClient as jest.Mocked<typeof apiClient>;

describe("should call correct URL", () => {
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
});

describe("should correctly transform received data", () => {
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
});
