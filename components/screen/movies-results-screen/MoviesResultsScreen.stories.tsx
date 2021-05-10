import React from "react";
import { Meta, Story } from "@storybook/react";
import MoviesResultsScreen, {
  MoviesResultsScreenProps,
} from "./MoviesResultsScreen";

export default {
  title: "Input/SearchScreen",
  component: MoviesResultsScreen,
} as Meta;

const Template: Story<MoviesResultsScreenProps> = (args) => (
  <MoviesResultsScreen {...args} />
);

export const Default = Template.bind({});
Default.args = { search: "Fight Club" };
