import { customRender } from "../../../utils/testing";
import HomeScreen from "./HomeScreen";

jest.mock("../../../network/resources/trending");

describe("component renders", () => {
  test("should show content", async () => {
    const { findByRole } = customRender(<HomeScreen />);
    expect(await findByRole("list", { name: "movies list" })).toBeTruthy();
  });
});
