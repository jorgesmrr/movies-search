import { screen, waitFor } from "@testing-library/react";
import hooks from "@bit/jorgemoreira.headless-react.hooks";
import { fakeMovie } from "../../../models/__fixtures__/Movie";
import { customRender } from "../../../utils/testing";
import MovieScreenConnect from "./MovieScreenConnect";

jest.mock("@bit/jorgemoreira.headless-react.hooks", () => ({
  useRequestEffect: jest.fn(),
  useScrollEffect: jest.fn(),
}));
const mockedUseRequest = (hooks as jest.Mocked<typeof hooks>).useRequestEffect;

describe("component renders", () => {
  test("should show spinner when loading a movie", async () => {
    mockedUseRequest.mockReturnValue({
      isLoading: true,
      error: false,
      data: null,
    });

    customRender(<MovieScreenConnect id={fakeMovie.id} />);
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(1));

    expect(screen.getByTestId("movie-details__spinner")).toBeTruthy();
  });

  test("should show movie information after load movie", async () => {
    mockedUseRequest.mockReturnValue({
      isLoading: false,
      error: false,
      data: fakeMovie,
    });

    const { getByRole } = customRender(
      <MovieScreenConnect id={fakeMovie.id} />
    );
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(1));

    expect(
      getByRole("heading", { level: 1, name: fakeMovie.title })
    ).toBeTruthy();
  });
});
