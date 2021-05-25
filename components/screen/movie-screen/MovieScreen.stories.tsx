import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieScreen, { MovieScreenProps } from "./MovieScreen";
import { fakeMovie } from "../../../models/__fixtures__/Movie";

export default {
  title: "Screen/MovieScreen",
  component: MovieScreen,
} as Meta;

const Template: Story<MovieScreenProps> = (args) => <MovieScreen {...args} />;

export const Default = Template.bind({});
Default.args = { data: fakeMovie };

export const Loading = Template.bind({});
Loading.args = { isLoading: true };

export const Error = Template.bind({});
Error.args = { error: true };
