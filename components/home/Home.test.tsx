import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getSearchMoviesFixture } from "../../network/resources/__fixtures__/movie";
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
    const movie = getSearchMoviesFixture().results[0];

    const { getByRole, findByRole } = render(<Home />);

    const searchInput = getByRole("textbox", { name: "search bar input" });

    userEvent.type(searchInput, `${movie.title}{enter}`);

    expect(await findByRole("listitem", { name: movie.title })).toBeTruthy();
  });
});
