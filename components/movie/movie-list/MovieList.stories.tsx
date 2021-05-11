import React from "react";
import { Story, Meta } from "@storybook/react";
import { fakeMovies } from "../../../models/__fixtures__/Movie";
import MovieList, { MovieListProps } from "../movie-list/MovieList";
import MovieImageType from "../../../models/MovieImageType";

export default {
  title: "Movie/MovieList",
  component: MovieList,
} as Meta;

const GridTemplate: Story<MovieListProps> = (args) => (
  <MovieList {...args}>
    <MovieList.Grid />
  </MovieList>
);

export const Grid = GridTemplate.bind({});
Grid.args = {
  isLoading: false,
  movies: fakeMovies,
  imageType: MovieImageType.Poster,
  count: 6,
  rowCount: 3,
};

const SliderTemplate: Story<MovieListProps> = (args) => (
  <MovieList {...args}>
    <MovieList.Slider activeSlide={0} />
  </MovieList>
);

export const Slider = SliderTemplate.bind({});
Slider.args = { ...Grid.args };
