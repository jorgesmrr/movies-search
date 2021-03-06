import { screen, waitFor } from "@testing-library/react";
import hooks from "@bit/jorgemoreira.headless-react.hooks";
import { fakeMovie } from "../../../models/__fixtures__/Movie";
import { customRender } from "../../../utils/testing";
import MovieCreditsScreenConnect from "./MovieCreditsScreenConnect";
import { fakeMovieCredits } from "../../../models/__fixtures__/MovieCredit";

jest.mock("@bit/jorgemoreira.headless-react.hooks", () => ({
  useRequestEffect: jest.fn(),
  useScrollEffect: jest.fn(),
}));
const mockedUseRequest = (hooks as jest.Mocked<typeof hooks>).useRequestEffect;

describe("component renders", () => {
  test("should show spinner when loading data", async () => {
    mockedUseRequest.mockReturnValue({
      isLoading: true,
      error: false,
      data: null,
    });

    customRender(<MovieCreditsScreenConnect id={fakeMovie.id} />);
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(2));

    expect(screen.getByTestId("movie-details__spinner")).toBeInTheDocument();
  });

  test("should show movie information after load data", async () => {
    mockedUseRequest.mockReturnValue({
      isLoading: false,
      error: false,
      data: fakeMovieCredits,
    });

    const { getByRole } = customRender(
      <MovieCreditsScreenConnect id={fakeMovie.id} />
    );

    expect(
      getByRole("heading", { level: 1, name: "Cast & Crew" })
    ).toBeInTheDocument();
  });
});
