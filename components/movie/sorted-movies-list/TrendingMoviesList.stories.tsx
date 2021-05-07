import React from "react";
import { Meta, Story } from "@storybook/react";
import TrendingMoviesList, {
  TrendingMoviesListProps,
} from "./TrendingMoviesList";
import TrendingTimeWindow from "../../../models/TrendingTimeWindow";

export default {
  title: "Movie/TrendingMoviesList",
  component: TrendingMoviesList,
  argTypes: {
    timeWindow: {
      control: {
        type: "radio",
        options: [TrendingTimeWindow.Day, TrendingTimeWindow.Week],
      },
    },
  },
} as Meta;

const Template: Story<TrendingMoviesListProps> = (args) => (
  <TrendingMoviesList {...args} />
);

export const Default = Template.bind({});
Default.args = { timeWindow: TrendingTimeWindow.Day };
