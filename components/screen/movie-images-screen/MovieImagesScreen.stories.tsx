import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieImagesScreen, { MovieImagesScreenProps } from "./MovieImagesScreen";
import { fakeMovieImages } from "../../../models/__fixtures__/MovieImage";
import { fakeMovie } from "../../../models/__fixtures__/Movie";

export default {
  title: "Screen/MovieImagesScreen",
  component: MovieImagesScreen,
} as Meta;

const Template: Story<MovieImagesScreenProps> = (args) => (
  <MovieImagesScreen {...args} />
);

export const Default = Template.bind({});
Default.args = {
  movieState: { data: fakeMovie },
  imagesState: { data: fakeMovieImages },
};

export const Loading = Template.bind({});
Loading.args = { isLoading: true };

export const Error = Template.bind({});
Error.args = { error: true };
