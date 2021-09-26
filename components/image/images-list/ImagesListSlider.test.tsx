import { screen } from "@testing-library/react";
import ImageType from "../../../models/ImageType";
import { fakeMovie } from "../../../models/__fixtures__/Movie";
import { BackdropSizes, PosterSizes } from "../../../network/constants";
import { getMoviePosterDescription } from "../../../network/helpers";
import { customRender } from "../../../utils/testing";
import ImagesList from "./ImagesList";

const fakeItemsPerSlide = { xs: 3, sm: 4, md: 6 };

describe("component renders", () => {
  test("should show poster placeholder", async () => {
    customRender(
      <ImagesList
        isLoading={true}
        error={false}
        count={1}
        imageType={ImageType.Poster}
        sizes={{ xs: PosterSizes.Small }}
      >
        <ImagesList.Slider activeSlide={0} itemsPerSlide={fakeItemsPerSlide} />
      </ImagesList>
    );

    expect(screen.getAllByTestId("poster-placeholder").length).toBe(1);
  });

  test("should show backdrop placeholder", async () => {
    customRender(
      <ImagesList
        isLoading={true}
        error={false}
        count={1}
        imageType={ImageType.Backdrop}
        sizes={{ xs: BackdropSizes.Small }}
      >
        <ImagesList.Slider activeSlide={0} itemsPerSlide={fakeItemsPerSlide} />
      </ImagesList>
    );

    expect(screen.getAllByTestId("backdrop-placeholder").length).toBe(1);
  });

  test("should show movies list after load data", async () => {
    const { getByRole, getAllByRole } = customRender(
      <ImagesList
        isLoading={false}
        error={false}
        images={[getMoviePosterDescription(fakeMovie)]}
        count={6}
        imageType={ImageType.Poster}
        sizes={{ xs: PosterSizes.Small }}
      >
        <ImagesList.Slider activeSlide={0} itemsPerSlide={fakeItemsPerSlide} />
      </ImagesList>
    );

    expect(
      await screen.findByRole("list", { name: "images list" })
    ).toBeInTheDocument();

    expect(getByRole("listitem", { name: fakeMovie.title }));
    expect(getAllByRole("listitem").length).toBe(1);
  });
});
