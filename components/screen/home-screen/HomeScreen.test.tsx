import { customRender } from "../../../utils/testing";
import HomeScreen from "./HomeScreen";

jest.mock("../../../network/resources/movie");
jest.mock("../../../network/resources/trending");

describe("component renders", () => {
  test("should show content", async () => {
    const { findAllByRole } = customRender(<HomeScreen />);
    expect((await findAllByRole("list", { name: "movies list" })).length).toBe(
      2
    );
  });
});
