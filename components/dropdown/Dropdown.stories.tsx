import React from "react";
import { Meta, Story } from "@storybook/react";
import Dropdown, { DropdownProps } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => {
  return (
    <Dropdown {...args}>
      <Dropdown.Item label="Lorem" />
      <Dropdown.Item label="Ipsum" />
    </Dropdown>
  );
};

export const Default = Template.bind({});
Default.args = { initialLabel: "Click to show options..." };
