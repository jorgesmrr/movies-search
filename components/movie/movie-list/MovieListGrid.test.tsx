import { screen } from "@testing-library/react";
import MovieListItemFormat from "../../../models/MovieListItemFormat";
import { fakeMovies } from "../../../models/__fixtures__/Movie";
import { customRender } from "../../../utils/testing";
import MovieList from "./MovieList";

describe("component renders", () => {
  test("should show poster placeholder", async () => {
    customRender(
      <MovieList
        isLoading={true}
        error={false}
        count={1}
        rowCount={6}
        format={MovieListItemFormat.Poster}
      >
        <MovieList.Grid />
      </MovieList>
    );

    expect(screen.getAllByTestId("poster-placeholder").length).toBe(1);
  });

  test("should show backdrop placeholder", async () => {
    customRender(
      <MovieList
        isLoading={true}
        error={false}
        count={1}
        rowCount={5}
        format={MovieListItemFormat.Backdrop}
      >
        <MovieList.Grid />
      </MovieList>
    );

    expect(screen.getAllByTestId("backdrop-placeholder").length).toBe(1);
  });

  test("should show movies list after load data", async () => {
    const { getByRole, getAllByRole } = customRender(
      <MovieList
        isLoading={false}
        error={false}
        movies={fakeMovies}
        count={fakeMovies.length}
        rowCount={6}
        format={MovieListItemFormat.Poster}
      >
        <MovieList.Grid />
      </MovieList>
    );

    expect(
      await screen.findByRole("list", { name: "movies list" })
    ).toBeTruthy();

    expect(getByRole("listitem", { name: fakeMovies[0].title }));
    expect(getAllByRole("listitem").length).toBe(fakeMovies.length);
  });
});
