import { screen, waitFor } from "@testing-library/react";
import hooks from "@bit/jorgemoreira.headless-react.hooks";
import { customRender } from "../../../utils/testing";
import MovieImagesScreenConnect from "./MovieImagesScreenConnect";
import { fakeMovieImages } from "../../../models/__fixtures__/MovieImage";
import ImageType from "../../../models/ImageType";

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

    customRender(<MovieImagesScreenConnect id={1} type={ImageType.Backdrop} />);
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(2));

    expect(screen.getByTestId("movie-details__spinner")).toBeInTheDocument();
  });

  test("should show movie information after load movie", async () => {
    mockedUseRequest.mockReturnValue({
      isLoading: false,
      error: false,
      data: fakeMovieImages,
    });

    const { getByRole } = customRender(
      <MovieImagesScreenConnect id={1} type={ImageType.Backdrop} />
    );
    await waitFor(() => expect(mockedUseRequest).toHaveBeenCalledTimes(2));

    expect(
      getByRole("heading", { level: 1, name: "Gallery" })
    ).toBeInTheDocument();
  });
});
