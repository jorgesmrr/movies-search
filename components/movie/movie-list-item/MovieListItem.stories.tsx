import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieListItem, { MovieListItemProps } from "./MovieListItem";
import { fakeMovie } from "../../../models/__fixtures__/Movie";
import { PosterSizes } from "../../../network/costants";
import MovieImageType from "../../../models/MovieImageType";

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
  size: PosterSizes.Regular,
  imageType: MovieImageType.Poster,
};
