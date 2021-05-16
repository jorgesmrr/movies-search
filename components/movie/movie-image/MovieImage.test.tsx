import MovieImage from "./MovieImage";
import { getBackdropPath, getPosterPath } from "../../../network/helpers";
import { customRender } from "../../../utils/testing";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import MovieImageType from "../../../models/MovieImageType";

const fileName = "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg";

describe("component renders", () => {
  test("should show an image", () => {
    const { getByRole } = customRender(
      <MovieImage
        type={MovieImageType.Poster}
        path={fileName}
        size={PosterSizes.Tiny}
      />
    );
    expect(getByRole("img")).toBeTruthy();
  });
});

describe("should use the correct source", () => {
  test("for backdrop image", () => {
    const { getByRole } = customRender(
      <MovieImage
        type={MovieImageType.Backdrop}
        path={fileName}
        size={BackdropSizes.Small}
      />
    );
    const image = getByRole("img");
    expect(image.getAttribute("src")).toBe(
      getBackdropPath(fileName, BackdropSizes.Small)
    );
  });

  test("for poster image", () => {
    const { getByRole } = customRender(
      <MovieImage
        type={MovieImageType.Poster}
        path={fileName}
        size={PosterSizes.Tiny}
      />
    );
    const image = getByRole("img");
    expect(image.getAttribute("src")).toBe(
      getPosterPath(fileName, PosterSizes.Tiny)
    );
  });
});
