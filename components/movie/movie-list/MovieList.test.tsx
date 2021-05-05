import { render, screen, waitFor } from "@testing-library/react";
import MovieList from "./MovieList";
import * as useRequest from "../../../hooks/useRequest";
import movies from "../../../fixtures/movies";

jest.mock("../../../hooks/useRequest");
const mockedUseRequest = (useRequest as jest.Mocked<typeof useRequest>).default;

describe("component renders", () => {
  test("should show spinner when loading movies", async () => {
    mockedUseRequest.mockReturnValue({
      isLoading: true,
      error: false,
      data: null,
    });

    render(<MovieList />);
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(1));

    expect(screen.getByTestId("movie-list__spinner")).toBeTruthy();
  });

  test("should show movies list after load data", async () => {
    mockedUseRequest.mockReturnValue({
      isLoading: false,
      error: false,
      data: movies,
    });

    const { getByRole, getAllByRole } = render(<MovieList />);
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(1));

    expect(
      await screen.findByRole("list", { name: "movies list" })
    ).toBeTruthy();

    expect(getByRole("listitem", { name: movies[0].title }));
    expect(getAllByRole("listitem").length).toBe(movies.length);
  });
});
