import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieImagesSlider, { MovieImagesSliderProps } from "./MovieImagesSlider";
import { fakeMovieImages } from "../../../models/__fixtures__/MovieImage";
import ImageType from "../../../models/ImageType";
import { fakeMovie } from "../../../models/__fixtures__/Movie";

export default {
  title: "MovieImage/MovieImagesSlider",
  component: MovieImagesSlider,
} as Meta;

const Template: Story<MovieImagesSliderProps> = (args) => (
  <MovieImagesSlider {...args} />
);

export const Default = Template.bind({});
Default.args = {
  images: fakeMovieImages,
  type: ImageType.Backdrop,
  selectedIndex: 0,
  movieId: fakeMovie.id,
  movieTitle: fakeMovie.title,
};
