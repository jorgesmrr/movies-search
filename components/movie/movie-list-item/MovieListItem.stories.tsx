import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieListItem, { MovieListItemProps } from "./MovieListItem";
import { fakeMovie } from "../../../models/__fixtures__/Movie";
import { PosterSizes } from "../../../network/constants";
import ImageType from "../../../models/ImageType";

export default {
  title: "Movie/MovieListItem",
  component: MovieListItem,
} as Meta;

const Template: Story<MovieListItemProps> = (args) => (
  <MovieListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  movie: fakeMovie,
  sizes: { xs: PosterSizes.Tiny },
  imageType: ImageType.Poster,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  isLoading: false,
  movie: null,
};
