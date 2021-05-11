import { screen } from "@testing-library/react";
import MovieImageType from "../../../models/MovieImageType";
import { fakeMovie } from "../../../models/__fixtures__/Movie";
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
        imageType={MovieImageType.Poster}
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
        imageType={MovieImageType.Backdrop}
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
        movies={[fakeMovie]}
        count={6}
        rowCount={6}
        imageType={MovieImageType.Poster}
      >
        <MovieList.Grid />
      </MovieList>
    );

    expect(
      await screen.findByRole("list", { name: "movies list" })
    ).toBeTruthy();

    expect(getByRole("listitem", { name: fakeMovie.title }));
    expect(getAllByRole("listitem").length).toBe(1);
  });
});
