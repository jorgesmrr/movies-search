import { render, screen } from "@testing-library/react";
import { fakeMovies } from "../../../models/__fixtures__/Movie";
import MovieList from "./MovieList";

describe("component renders", () => {
  test("should show spinner when loading movies", async () => {
    render(<MovieList isLoading={true} />);

    expect(screen.getByTestId("movie-list__spinner")).toBeTruthy();
  });

  test("should show movies list after load data", async () => {
    const { getByRole, getAllByRole } = render(
      <MovieList isLoading={false} movies={fakeMovies} />
    );

    expect(
      await screen.findByRole("list", { name: "movies list" })
    ).toBeTruthy();

    expect(getByRole("listitem", { name: fakeMovies[0].title }));
    expect(getAllByRole("listitem").length).toBe(fakeMovies.length);
  });
});
