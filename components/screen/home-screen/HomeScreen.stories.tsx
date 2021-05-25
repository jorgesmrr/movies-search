import React from "react";
import { Story, Meta } from "@storybook/react";
import HomeScreen from "./HomeScreen";

export default {
  title: "Screen/HomeScreen",
  component: HomeScreen,
} as Meta;

const Template: Story = (args) => <HomeScreen {...args} />;

export const Default = Template.bind({});
