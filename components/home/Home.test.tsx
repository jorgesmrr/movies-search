import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { searchableMovies } from "../../network/resources/__fixtures__/movie";
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
  test("user searches for a movie", async () => {
    const { getByRole, findByRole } = render(<Home />);

    const searchInput = getByRole("textbox", { name: "search bar input" });

    userEvent.type(searchInput, `${searchableMovies[0].title}{enter}`);

    expect(
      await findByRole("listitem", { name: searchableMovies[0].title })
    ).toBeTruthy();
  });
});
