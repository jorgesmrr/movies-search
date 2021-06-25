import React from "react";
import { Meta, Story } from "@storybook/react";
import Pagination, { PaginationProps } from "./Pagination";

export default {
  title: "Pagination/Pagination",
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  page: 2,
  totalPages: 10,
};
