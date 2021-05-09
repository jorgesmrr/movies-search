import BackdropImage from "./BackdropImage";
import { getBackdropPath } from "../../../network/helpers";
import { customRender } from "../../../utils/testing";
import { BackdropSizes } from "../../../network/costants";

const BackdropFileName = "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg";

describe("component renders", () => {
  test("should show an image", () => {
    const { getByRole } = customRender(
      <BackdropImage fileName={BackdropFileName} size={BackdropSizes.Small} />
    );
    expect(getByRole("img")).toBeTruthy();
  });

  test("should use the correct source", () => {
    const { getByRole } = customRender(
      <BackdropImage fileName={BackdropFileName} size={BackdropSizes.Small} />
    );
    const image = getByRole("img");
    expect(image.getAttribute("src")).toBe(
      getBackdropPath(BackdropFileName, BackdropSizes.Small)
    );
  });
});
