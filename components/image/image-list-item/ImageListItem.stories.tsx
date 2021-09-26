import React from "react";
import { Story, Meta } from "@storybook/react";
import ImageListItem, { ImageListItemProps } from "./ImageListItem";
import { fakeMovie } from "../../../models/__fixtures__/Movie";
import { PosterSizes } from "../../../network/constants";
import ImageType from "../../../models/ImageType";
import { getMoviePosterDescription } from "../../../network/helpers";

export default {
  title: "Image/ImageListItem",
  component: ImageListItem,
} as Meta;

const Template: Story<ImageListItemProps> = (args) => (
  <ImageListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image: getMoviePosterDescription(fakeMovie),
  sizes: { xs: PosterSizes.Tiny },
  imageType: ImageType.Poster,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  isLoading: false,
  movie: null,
};
