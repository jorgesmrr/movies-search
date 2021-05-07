import { render, screen } from "@testing-library/react";
import MovieList from "./MovieList";
import { dayTrendingMovies } from "../../../network/resources/__fixtures__/movie";

describe("component renders", () => {
  test("should show spinner when loading movies", async () => {
    render(<MovieList isLoading={true} />);

    expect(screen.getByTestId("movie-list__spinner")).toBeTruthy();
  });

  test("should show movies list after load data", async () => {
    const { getByRole, getAllByRole } = render(
      <MovieList isLoading={false} movies={dayTrendingMovies} />
    );

    expect(
      await screen.findByRole("list", { name: "movies list" })
    ).toBeTruthy();

    expect(getByRole("listitem", { name: dayTrendingMovies[0].title }));
    expect(getAllByRole("listitem").length).toBe(dayTrendingMovies.length);
  });
});
