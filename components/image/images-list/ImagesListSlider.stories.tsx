import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { fakeMovies } from "../../../models/__fixtures__/Movie";
import ImagesList, { ImagesListProps } from "./ImagesList";
import ImageType from "../../../models/ImageType";
import { ImagesListSliderProps } from "./ImagesListSlider";
import { PosterSizes } from "../../../network/constants";
import { LimitedWidth } from "../../style/style";
import { getMoviePosterDescription } from "../../../network/helpers";

export default {
  title: "Movie/MovieList/Slider",
  component: ImagesList,
} as Meta;

const Template: Story<ImagesListProps & ImagesListSliderProps> = ({
  itemsPerSlide,
  ...args
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <LimitedWidth>
      <button onClick={() => setActiveSlide(activeSlide - 1)}>Previous</button>
      <button onClick={() => setActiveSlide(activeSlide + 1)}>Next</button>
      <ImagesList {...args}>
        <ImagesList.Slider
          activeSlide={activeSlide}
          itemsPerSlide={itemsPerSlide}
        />
      </ImagesList>
    </LimitedWidth>
  );
};

export const Loaded = Template.bind({});
Loaded.args = {
  isLoading: false,
  movies: fakeMovies.map(getMoviePosterDescription),
  imageType: ImageType.Poster,
  count: 12,
  itemsPerSlide: { xs: 2, sm: 3, md: 4 },
  sizes: { xs: PosterSizes.Tiny },
};

export const Loading = Template.bind({});
Loading.args = {
  ...Loaded.args,
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Loaded.args,
  error: true,
};
