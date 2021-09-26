import { screen } from "@testing-library/react";
import ImageType from "../../../models/ImageType";
import { fakeMovie } from "../../../models/__fixtures__/Movie";
import { BackdropSizes, PosterSizes } from "../../../network/constants";
import { customRender } from "../../../utils/testing";
import MovieList from "./MovieList";

describe("component renders", () => {
  test("should show poster placeholder", async () => {
    customRender(
      <MovieList
        isLoading={true}
        error={false}
        count={1}
        imageType={ImageType.Poster}
        sizes={{ xs: PosterSizes.Small }}
      >
        <MovieList.Grid columns={6} />
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
        imageType={ImageType.Backdrop}
        sizes={{ xs: BackdropSizes.Small }}
      >
        <MovieList.Grid columns={6} />
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
        imageType={ImageType.Poster}
        sizes={{ xs: PosterSizes.Small }}
      >
        <MovieList.Grid columns={6} />
      </MovieList>
    );

    expect(
      await screen.findByRole("list", { name: "movies list" })
    ).toBeInTheDocument();

    expect(getByRole("listitem", { name: fakeMovie.title }));
    expect(getAllByRole("listitem").length).toBe(1);
  });
});
