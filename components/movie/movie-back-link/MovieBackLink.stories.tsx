import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieBackLink, { MovieBackLinkProps } from "./MovieBackLink";
import { fakeMovie } from "../../../models/__fixtures__/Movie";

export default {
  title: "Movie/MovieBackLink",
  component: MovieBackLink,
} as Meta;

const Template: Story<MovieBackLinkProps> = (args) => (
  <MovieBackLink {...args} />
);

export const Default = Template.bind({});
Default.args = { movie: fakeMovie };
