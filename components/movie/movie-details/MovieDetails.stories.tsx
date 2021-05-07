import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieDetails, { MovieDetailsProps } from "./MovieDetails";

export default {
  title: "Movie/MovieDetails",
  component: MovieDetails,
} as Meta;

const Template: Story<MovieDetailsProps> = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = { id: 460465 };
