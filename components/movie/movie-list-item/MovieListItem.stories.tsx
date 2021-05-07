import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieListItem, { MovieListItemProps } from "./MovieListItem";
import { getMovieFixture } from "../../../network/resources/__fixtures__/movie";

export default {
  title: "Movie/MovieListItem",
  component: MovieListItem,
} as Meta;

const Template: Story<MovieListItemProps> = (args) => (
  <MovieListItem {...args} />
);

export const Default = Template.bind({});
Default.args = { movie: getMovieFixture() };
