import { screen, waitFor } from "@testing-library/react";
import MovieDetails from "./MovieDetails";
import * as useRequest from "../../../hooks/useRequest";
import { fakeMovie } from "../../../models/__fixtures__/Movie";
import { customRender } from "../../../utils/testing";

jest.mock("../../../hooks/useRequest");
const mockedUseRequest = (useRequest as jest.Mocked<typeof useRequest>).default;

describe("component renders", () => {
  test("should show spinner when loading a movie", async () => {
    mockedUseRequest.mockReturnValue({
      isLoading: true,
      error: false,
      data: null,
    });

    customRender(<MovieDetails id={fakeMovie.id} />);
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(1));

    expect(screen.getByTestId("movie-details__spinner")).toBeTruthy();
  });

  test("should show movie information after load movie", async () => {
    mockedUseRequest.mockReturnValue({
      isLoading: false,
      error: false,
      data: fakeMovie,
    });

    const { getByRole } = customRender(<MovieDetails id={fakeMovie.id} />);
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(1));

    expect(
      getByRole("heading", { level: 1, name: fakeMovie.title })
    ).toBeTruthy();
  });
});
