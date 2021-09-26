import TmdbImage from "./TmdbImage";
import { customRender } from "../../../utils/testing";
import { BackdropSizes, PosterSizes } from "../../../network/constants";
import { getImagePath } from "../../../network/helpers";

const fileName = "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg";

describe("component renders", () => {
  test("should show an image", () => {
    const { getByRole } = customRender(
      <TmdbImage
        title="Just a test"
        path={fileName}
        sizes={{ xs: PosterSizes.Tiny }}
      />
    );
    expect(getByRole("img")).toBeInTheDocument();
  });
});

describe("should use the correct source", () => {
  test("for backdrop image", () => {
    const { getByRole } = customRender(
      <TmdbImage
        title="Just a test"
        path={fileName}
        sizes={{ xs: BackdropSizes.Small }}
      />
    );
    const image = getByRole("img");
    expect(image.getAttribute("src")).toBe(
      getImagePath(fileName, BackdropSizes.Small)
    );
  });

  test("for poster image", () => {
    const { getByRole } = customRender(
      <TmdbImage
        title="Just a test"
        path={fileName}
        sizes={{ xs: PosterSizes.Tiny }}
      />
    );
    const image = getByRole("img");
    expect(image.getAttribute("src")).toBe(
      getImagePath(fileName, PosterSizes.Tiny)
    );
  });
});
