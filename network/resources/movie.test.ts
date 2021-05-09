import { API_MOVIES } from "../costants";
import apiClient from "../apiClient";
import { getMovie } from "./movie";
import { getMovieFixture } from "./__fixtures__/movie";
import { movieTransformer } from "../transformers";

jest.mock("../apiClient");
const mockedApiClient = apiClient as jest.Mocked<typeof apiClient>;

describe("should call correct URL", () => {
  test("to get a movie", () => {
    getMovie("1")();

    expect(mockedApiClient.get).toHaveBeenCalledWith(`${API_MOVIES}/1`);
  });
});

describe("should correctly transform received data", () => {
  test("after getting movie", () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: getMovieFixture(),
    });

    expect.assertions(1);
    return getMovie("1")().then((result) => {
      const data = getMovieFixture();
      expect(result).toEqual(movieTransformer(data));
    });
  });
});
