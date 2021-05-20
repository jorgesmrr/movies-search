import React from "react";
import { Meta, Story } from "@storybook/react";
import SearchScreen, { SearchScreenProps } from "./SearchScreen";

export default {
  title: "Screen/SearchScreen",
  component: SearchScreen,
} as Meta;

const Template: Story<SearchScreenProps> = (args) => <SearchScreen {...args} />;

export const Default = Template.bind({});
Default.args = { search: "Fight Club" };
