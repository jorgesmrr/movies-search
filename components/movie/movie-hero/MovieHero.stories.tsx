import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieHero, { MovieHeroProps } from "./MovieHero";

export default {
  title: "Movie/MovieHero",
  component: MovieHero,
} as Meta;

const Template: Story<MovieHeroProps> = (args) => <MovieHero {...args} />;

export const Default = Template.bind({});
Default.args = { backdrop: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg" };
