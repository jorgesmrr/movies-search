import React from "react";
import { Meta, Story } from "@storybook/react";
import CastList, { CastListProps } from "./CastList";
import { fakeMovieCredits } from "../../../models/__fixtures__/MovieCredit";

export default {
  title: "MovieCredits/CastList",
  component: CastList,
} as Meta;

const Template: Story<CastListProps> = (args) => <CastList {...args} />;

export const Default = Template.bind({});
Default.args = { cast: fakeMovieCredits.cast };
