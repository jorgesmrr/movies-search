import { render, screen, waitFor } from "@testing-library/react";
import MovieDetails from "./MovieDetails";
import * as useRequest from "../../../hooks/useRequest";
import movies from "../../../fixtures/movies";

jest.mock("../../../hooks/useRequest");
const mockedUseRequest = (useRequest as jest.Mocked<typeof useRequest>).default;

describe("component renders", () => {
  test("sahould show spinner when loading a movie", async () => {
    mockedUseRequest.mockReturnValue({
      loading: true,
      error: false,
      data: null,
    });

    render(<MovieDetails id={movies[0].id} />);
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(1));

    expect(screen.getByTestId("movie-details__spinner")).toBeTruthy();
  });

  test("sahould show movie information after load movie", async () => {
    mockedUseRequest.mockReturnValue({
      loading: false,
      error: false,
      data: movies[0],
    });

    const { getByRole } = render(<MovieDetails id={movies[0].id} />);
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(1));

    expect(
      getByRole("heading", { level: 1, name: movies[0].title })
    ).toBeTruthy();
  });
});
