import userEvent from "@testing-library/user-event";
import { customRender } from "../../utils/testing";
import Home from "./Home";

jest.mock("../../network/resources/movie");

describe("component renders", () => {
  test("should show search and movies", async () => {
    const { getByRole, findByRole } = customRender(<Home />);

    expect(getByRole("textbox", { name: "search bar input" })).toBeTruthy();
    expect(await findByRole("list", { name: "movies list" })).toBeTruthy();
  });
});

describe("user interact with the page", () => {
  test("should show search results list after submitting a search", async () => {
    const { getByRole, findByTestId } = customRender(<Home />);

    const searchInput = getByRole("textbox", { name: "search bar input" });

    userEvent.type(searchInput, `foo{enter}`);

    expect(await findByTestId("searched-movies-list")).toBeTruthy();
  });
});
