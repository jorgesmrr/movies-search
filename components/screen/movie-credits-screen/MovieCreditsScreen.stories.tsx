import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieCreditsScreen, {
  MovieCreditsScreenProps,
} from "./MovieCreditsScreen";
import { fakeMovieCredits } from "../../../models/__fixtures__/MovieCredit";
import { fakeMovie } from "../../../models/__fixtures__/Movie";

export default {
  title: "Screen/MovieCreditsScreen",
  component: MovieCreditsScreen,
} as Meta;

const Template: Story<MovieCreditsScreenProps> = (args) => (
  <MovieCreditsScreen {...args} />
);

export const Default = Template.bind({});
Default.args = {
  movieState: { data: fakeMovie },
  creditsState: { data: fakeMovieCredits },
};

export const Loading = Template.bind({});
Loading.args = { isLoading: true };

export const Error = Template.bind({});
Error.args = { error: true };
