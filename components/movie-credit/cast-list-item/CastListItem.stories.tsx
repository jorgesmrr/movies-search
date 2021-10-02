import React from "react";
import { Meta, Story } from "@storybook/react";
import CastListItem, { CastListItemProps } from "./CastListItem";
import { fakeMovieCredits } from "../../../models/__fixtures__/MovieCredit";

export default {
  title: "MovieCredits/CastListItem",
  component: CastListItem,
} as Meta;

const Template: Story<CastListItemProps> = (args) => <CastListItem {...args} />;

export const Default = Template.bind({});
Default.args = { credit: fakeMovieCredits.cast[0] };
