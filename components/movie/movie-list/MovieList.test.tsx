import { render, screen } from "@testing-library/react";
import MovieList from "./MovieList";
import { popularMovies } from "../../../network/resources/__fixtures__/movie";

describe("component renders", () => {
  test("should show spinner when loading movies", async () => {
    render(<MovieList isLoading={true} />);

    expect(screen.getByTestId("movie-list__spinner")).toBeTruthy();
  });

  test("should show movies list after load data", async () => {
    const { getByRole, getAllByRole } = render(
      <MovieList isLoading={false} movies={popularMovies} />
    );

    expect(
      await screen.findByRole("list", { name: "movies list" })
    ).toBeTruthy();

    expect(getByRole("listitem", { name: popularMovies[0].title }));
    expect(getAllByRole("listitem").length).toBe(popularMovies.length);
  });
});
