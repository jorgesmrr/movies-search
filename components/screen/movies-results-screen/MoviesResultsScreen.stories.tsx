import React from "react";
import { Meta, Story } from "@storybook/react";
import MoviesResultsScreen, {
  MoviesResultsScreenProps,
} from "./MoviesResultsScreen";
import { getTopRatedMovies } from "../../../network/resources/movie";

export default {
  title: "Screen/MovieResultsScreen",
  component: MoviesResultsScreen,
} as Meta;

const Template: Story<MoviesResultsScreenProps> = (args) => (
  <MoviesResultsScreen {...args} />
);

export const Default = Template.bind({});
Default.args = { title: "Lorem", endpointGetter: getTopRatedMovies };
