import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { fakeMovies } from "../../../models/__fixtures__/Movie";
import MovieList, { MovieListProps } from "./MovieList";
import MovieImageType from "../../../models/MovieImageType";
import { MovieListSliderProps } from "./MovieListSlider";
import { PosterSizes } from "../../../network/costants";
import { LimitedWidth } from "../../style/style";

export default {
  title: "Movie/MovieList/Slider",
  component: MovieList,
} as Meta;

const Template: Story<MovieListProps & MovieListSliderProps> = ({
  itemsPerSlide,
  ...args
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <LimitedWidth>
      <button onClick={() => setActiveSlide(activeSlide - 1)}>Previous</button>
      <button onClick={() => setActiveSlide(activeSlide + 1)}>Next</button>
      <MovieList {...args}>
        <MovieList.Slider
          activeSlide={activeSlide}
          itemsPerSlide={itemsPerSlide}
        />
      </MovieList>
    </LimitedWidth>
  );
};

export const Loaded = Template.bind({});
Loaded.args = {
  isLoading: false,
  movies: fakeMovies,
  imageType: MovieImageType.Poster,
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
