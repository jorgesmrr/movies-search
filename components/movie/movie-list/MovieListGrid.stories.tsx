import React from "react";
import { Story, Meta } from "@storybook/react";
import { fakeMovies } from "../../../models/__fixtures__/Movie";
import MovieList, { MovieListProps } from "./MovieList";
import MovieImageType from "../../../models/MovieImageType";
import { MovieListGridProps } from "./MovieListGrid";
import { PosterSizes } from "../../../network/constants";
import { LimitedWidth } from "../../style/style";

export default {
  title: "Movie/MovieList/Grid",
  component: MovieList,
} as Meta;

const Template: Story<MovieListProps & MovieListGridProps> = ({
  columns,
  ...args
}) => (
  <LimitedWidth>
    <MovieList {...args}>
      <MovieList.Grid columns={columns} />
    </MovieList>
  </LimitedWidth>
);

export const Loaded = Template.bind({});
Loaded.args = {
  isLoading: false,
  movies: fakeMovies,
  imageType: MovieImageType.Poster,
  count: 6,
  columns: 3,
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
