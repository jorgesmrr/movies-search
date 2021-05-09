import { API_SEARCH_MOVIES } from "../costants";
import apiClient from "../apiClient";
import { movieTransformer } from "../transformers";
import { searchMovies } from "./search";
import { getSearchMoviesFixture } from "./__fixtures__/search";

jest.mock("../apiClient");
const mockedApiClient = apiClient as jest.Mocked<typeof apiClient>;

describe("should call correct URL", () => {
  test("to search movies", () => {
    searchMovies("foo bar")();

    expect(mockedApiClient.get).toHaveBeenCalledWith(
      `${API_SEARCH_MOVIES}?query=foo%20bar`
    );
  });
});

describe("should correctly transform received data", () => {
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
