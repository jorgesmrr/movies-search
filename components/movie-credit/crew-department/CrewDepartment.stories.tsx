import React from "react";
import { Meta, Story } from "@storybook/react";
import { fakeMovieCredits } from "../../../models/__fixtures__/MovieCredit";
import CrewDepartment, { CrewDepartmentProps } from "./CrewDepartment";

export default {
  title: "MovieCredits/CrewDepartment",
  component: CrewDepartment,
} as Meta;

const Template: Story<CrewDepartmentProps> = (args) => (
  <CrewDepartment {...args} />
);

export const Default = Template.bind({});
Default.args = { department: "Department", crew: fakeMovieCredits.crew };
