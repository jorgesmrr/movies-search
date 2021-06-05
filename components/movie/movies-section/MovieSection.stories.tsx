import React from "react";
import { Story, Meta } from "@storybook/react";
import MoviesSection, { MoviesSectionProps } from "./MoviesSection";
import MovieImageType from "../../../models/MovieImageType";
import TrendingTimeWindow from "../../../models/TrendingTimeWindow";
import { getTrendingMovies } from "../../../network/resources/trending";

export default {
  title: "Movie/MoviesSection",
  component: MoviesSection,
} as Meta;

const Template: Story<MoviesSectionProps> = (args) => (
  <MoviesSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Movies",
  endpoint: getTrendingMovies(TrendingTimeWindow.Day),
  imageType: MovieImageType.Poster,
};
