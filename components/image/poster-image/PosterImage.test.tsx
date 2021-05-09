import PosterImage from "./PosterImage";
import { getPosterPath } from "../../../network/helpers";
import { customRender } from "../../../utils/testing";
import { PosterSizes } from "../../../network/costants";

const posterFileName = "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg";

describe("component renders", () => {
  test("should show an image", () => {
    const { getByRole } = customRender(
      <PosterImage fileName={posterFileName} size={PosterSizes.Tiny} />
    );
    expect(getByRole("img")).toBeTruthy();
  });

  describe("should use the correct source", () => {
    test("for tiny size", () => {
      const { getByRole } = customRender(
        <PosterImage fileName={posterFileName} size={PosterSizes.Tiny} />
      );
      const image = getByRole("img");
      expect(image.getAttribute("src")).toBe(
        getPosterPath(posterFileName, PosterSizes.Tiny)
      );
    });
  });
});
