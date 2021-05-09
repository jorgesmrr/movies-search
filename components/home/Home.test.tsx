import { customRender } from "../../utils/testing";
import Home from "./Home";

jest.mock("../../network/resources/trending");

describe("component renders", () => {
  test("should show content", async () => {
    const { findByRole } = customRender(<Home />);
    expect(await findByRole("list", { name: "movies list" })).toBeTruthy();
  });
});
