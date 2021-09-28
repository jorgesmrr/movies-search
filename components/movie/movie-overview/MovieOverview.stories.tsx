import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieOverview, { MovieOverviewProps } from "./MovieOverview";
import { fakeMovie } from "../../../models/__fixtures__/Movie";

export default {
  title: "Movie/MovieOverview",
  component: MovieOverview,
} as Meta;

const Template: Story<MovieOverviewProps> = (args) => (
  <MovieOverview {...args} />
);

export const Default = Template.bind({});
Default.args = {
  movie: fakeMovie,
};
