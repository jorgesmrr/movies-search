import { render, screen, waitFor } from "@testing-library/react";
import MovieList from "./MovieList";
import * as useRequest from "../../../hooks/useRequest";
import movies from "../../../fixtures/movies";

jest.mock("../../../hooks/useRequest");
const mockedUseRequest = (useRequest as jest.Mocked<typeof useRequest>).default;

test("should show spinner if loading movies", async () => {
  mockedUseRequest.mockReturnValue({
    loading: true,
    error: false,
    data: null,
  });

  render(<MovieList />);
  await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(1));

  expect(screen.getByTestId("movie-list__spinner")).toBeTruthy();
});

test("should show movies list data is ready", async () => {
  mockedUseRequest.mockReturnValue({
    loading: false,
    error: false,
    data: movies,
  });

  render(<MovieList />);
  await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(1));

  expect(await screen.findByRole("list", { name: "movies list" })).toBeTruthy();

  expect(screen.getByRole("listitem", { name: movies[0].title }));
});
