import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieList, { MovieListProps } from "./MovieList";
import { fakeMovies } from "../../../models/__fixtures__/Movie";

export default {
  title: "Movie/MovieList",
  component: MovieList,
} as Meta;

const Template: Story<MovieListProps> = (args) => <MovieList {...args} />;

export const Default = Template.bind({});
Default.args = { isLoading: false, movies: fakeMovies };
