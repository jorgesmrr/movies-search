import React from "react";
import { Meta, Story } from "@storybook/react";
import MoviesResultsScreen, {
  MoviesResultsScreenProps,
} from "./MoviesResultsScreen";

export default {
  title: "Screen/MovieResultsScreen",
  component: MoviesResultsScreen,
} as Meta;

const Template: Story<MoviesResultsScreenProps> = (args) => (
  <MoviesResultsScreen {...args} />
);

export const Default = Template.bind({});
Default.args = { search: "Fight Club" };
