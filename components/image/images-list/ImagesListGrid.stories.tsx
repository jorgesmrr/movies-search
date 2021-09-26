import React from "react";
import { Story, Meta } from "@storybook/react";
import { fakeMovies } from "../../../models/__fixtures__/Movie";
import ImagesList, { ImagesListProps } from "./ImagesList";
import ImageType from "../../../models/ImageType";
import { ImagesListGridProps } from "./ImagesListGrid";
import { PosterSizes } from "../../../network/constants";
import { LimitedWidth } from "../../style/style";
import { getMoviePosterDescription } from "../../../network/helpers";

export default {
  title: "Movie/MovieList/Grid",
  component: ImagesList,
} as Meta;

const Template: Story<ImagesListProps & ImagesListGridProps> = ({
  columns,
  ...args
}) => (
  <LimitedWidth>
    <ImagesList {...args}>
      <ImagesList.Grid columns={columns} />
    </ImagesList>
  </LimitedWidth>
);

export const Loaded = Template.bind({});
Loaded.args = {
  isLoading: false,
  movies: fakeMovies.map(getMoviePosterDescription),
  imageType: ImageType.Poster,
  count: 6,
  columns: 3,
  sizes: { xs: PosterSizes.Tiny },
};

export const Loading = Template.bind({});
Loading.args = {
  ...Loaded.args,
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Loaded.args,
  error: true,
};
