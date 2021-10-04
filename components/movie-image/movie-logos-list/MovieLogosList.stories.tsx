import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieLogosList, { MovieLogosListProps } from "./MovieLogosList";
import { fakeMovieImages } from "../../../models/__fixtures__/MovieImage";

export default {
  title: "MovieImage/MovieLogosList",
  component: MovieLogosList,
} as Meta;

const Template: Story<MovieLogosListProps> = (args) => (
  <MovieLogosList {...args} />
);

export const Default = Template.bind({});
Default.args = { images: fakeMovieImages.logos };
