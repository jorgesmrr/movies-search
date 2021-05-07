import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieList, { MovieListProps } from "./MovieList";
import { allMovies } from "../../../network/resources/__fixtures__/movie";

export default {
  title: "Movie/MovieList",
  component: MovieList,
} as Meta;

const Template: Story<MovieListProps> = (args) => <MovieList {...args} />;

export const Default = Template.bind({});
Default.args = { isLoading: false, movies: allMovies };
