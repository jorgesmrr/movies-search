import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieImage, { MovieImageProps } from "./MovieImage";
import { BackdropSizes } from "../../../network/costants";
import MovieImageType from "../../../models/MovieImageType";

export default {
  title: "Movie/MovieImage",
  component: MovieImage,
} as Meta;

const Template: Story<MovieImageProps> = (args) => <MovieImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
  size: BackdropSizes.Regular,
  type: MovieImageType.Backdrop,
};
