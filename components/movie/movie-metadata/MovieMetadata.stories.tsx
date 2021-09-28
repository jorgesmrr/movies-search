import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieMetadata, { MovieMetadataProps } from "./MovieMetadata";
import { fakeMovie } from "../../../models/__fixtures__/Movie";

export default {
  title: "Movie/MovieMetadata",
  component: MovieMetadata,
} as Meta;

const Template: Story<MovieMetadataProps> = (args) => (
  <MovieMetadata {...args} />
);

export const Default = Template.bind({});
Default.args = {
  movie: fakeMovie,
};
