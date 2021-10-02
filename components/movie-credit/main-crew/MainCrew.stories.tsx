import React from "react";
import { Meta, Story } from "@storybook/react";
import MainCrew, { MainCrewProps } from "./MainCrew";
import { fakeMovieCredits } from "../../../models/__fixtures__/MovieCredit";

export default {
  title: "MovieCredits/MainCrew",
  component: MainCrew,
} as Meta;

const Template: Story<MainCrewProps> = (args) => <MainCrew {...args} />;

export const Default = Template.bind({});
Default.args = { crew: fakeMovieCredits.crew };
