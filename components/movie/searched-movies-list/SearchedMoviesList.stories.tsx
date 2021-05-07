import React from "react";
import { Story, Meta } from "@storybook/react";
import SearchedMoviesList, {
  SearchedMoviesListProps,
} from "./SearchedMoviesList";

export default {
  title: "Movie/SearchedMoviesList",
  component: SearchedMoviesList,
} as Meta;

const Template: Story<SearchedMoviesListProps> = (args) => (
  <SearchedMoviesList {...args} />
);

export const Default = Template.bind({});
Default.args = { search: "Mortal" };
