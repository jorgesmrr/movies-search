import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieImagesTypeNav, {
  MovieImagesTypeNavProps,
} from "./MovieImagesTypeNav";

export default {
  title: "MovieImage/MovieImagesTypeNav",
  component: MovieImagesTypeNav,
} as Meta;

const Template: Story<MovieImagesTypeNavProps> = (args) => (
  <MovieImagesTypeNav {...args} />
);

export const Default = Template.bind({});
Default.args = { movieId: 1 };
