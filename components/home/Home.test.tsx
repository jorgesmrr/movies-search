import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

jest.mock("../../network/resources/movie");

describe("component renders", () => {
  test("should show search and movies", async () => {
    const { getByRole, findByRole } = render(<Home />);

    expect(getByRole("textbox", { name: "search bar input" })).toBeTruthy();
    expect(await findByRole("list", { name: "movies list" })).toBeTruthy();
  });
});

describe("user interact with the page", () => {
  test("should show search results list after submitting a search", async () => {
    const { getByRole, findByTestId } = render(<Home />);

    const searchInput = getByRole("textbox", { name: "search bar input" });

    userEvent.type(searchInput, `foo{enter}`);

    expect(await findByTestId("searched-movies-list")).toBeTruthy();
  });
});
