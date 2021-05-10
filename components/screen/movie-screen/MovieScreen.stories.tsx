import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieScreen, { MovieScreenProps } from "./MovieScreen";

export default {
  title: "Input/MovieScreen",
  component: MovieScreen,
} as Meta;

const Template: Story<MovieScreenProps> = (args) => <MovieScreen {...args} />;

export const Default = Template.bind({});
Default.args = { id: 460465 };
