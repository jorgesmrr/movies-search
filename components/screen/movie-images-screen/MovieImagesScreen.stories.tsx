import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieImagesScreen, { MovieImagesScreenProps } from "./MovieImagesScreen";
import { fakeMovieImages } from "../../../models/__fixtures__/MovieImage";
import { fakeMovie } from "../../../models/__fixtures__/Movie";
import ImageType from "../../../models/ImageType";

export default {
  title: "Screen/MovieImagesScreen",
  component: MovieImagesScreen,
} as Meta;

const Template: Story<MovieImagesScreenProps> = (args) => (
  <MovieImagesScreen {...args} />
);

export const Grid = Template.bind({});
Grid.args = {
  movieState: { data: fakeMovie },
  imagesState: { data: fakeMovieImages },
  type: ImageType.Backdrop,
};

export const Slider = Template.bind({});
Slider.args = {
  movieState: { data: fakeMovie },
  imagesState: { data: fakeMovieImages },
  type: ImageType.Backdrop,
  selectedImageIndex: 0,
};

export const Loading = Template.bind({});
Loading.args = {
  movieState: { isLoading: true },
  imagesState: { isLoading: true },
};

export const Error = Template.bind({});
Error.args = {
  movieState: { error: true },
  imagesState: { error: true },
};
