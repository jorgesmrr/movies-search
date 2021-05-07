import { render } from "@testing-library/react";
import PosterImage from "./PosterImage";
import { getSmallPosterPath } from "../../../network/helpers";

const posterFileName = "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg";

describe("component renders", () => {
  test("should show an image", () => {
    const { getByRole } = render(
      <PosterImage fileName={posterFileName} tiny />
    );
    expect(getByRole("img")).toBeTruthy();
  });

  describe("should use the correct source", () => {
    test("for tiny size", () => {
      const { getByRole } = render(
        <PosterImage fileName={posterFileName} tiny />
      );
      const image = getByRole("img");
      expect(image.getAttribute("src")).toBe(
        getSmallPosterPath(posterFileName)
      );
    });
  });
});
