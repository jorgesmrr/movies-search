import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieDetails, { MovieDetailsProps } from "./MovieDetails";
import { fakeMovie } from "../../../models/__fixtures__/Movie";

export default {
  title: "Movie/MovieDetails",
  component: MovieDetails,
} as Meta;

const Template: Story<MovieDetailsProps> = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = { movie: fakeMovie };
