import React from "react";
import { Story, Meta } from "@storybook/react";
import TmdbImage, { TmdbImageProps } from "./TmdbImage";
import { PosterSizes } from "../../../network/constants";
import ImageType from "../../../models/ImageType";

export default {
  title: "Image/TmdbImage",
  component: TmdbImage,
} as Meta;

const Template: Story<TmdbImageProps> = (args) => <TmdbImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
  sizes: { xs: PosterSizes.Tiny },
  type: ImageType.Backdrop,
};
