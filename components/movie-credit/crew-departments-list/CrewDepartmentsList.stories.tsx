import React from "react";
import { Meta, Story } from "@storybook/react";
import { fakeMovieCredits } from "../../../models/__fixtures__/MovieCredit";
import CrewDepartmentsList, {
  CrewDepartmentsListProps,
} from "./CrewDepartmentsList";

export default {
  title: "MovieCredits/CrewDepartmentsList",
  component: CrewDepartmentsList,
} as Meta;

const Template: Story<CrewDepartmentsListProps> = (args) => (
  <CrewDepartmentsList {...args} />
);

export const Default = Template.bind({});
Default.args = { crew: fakeMovieCredits.crew };
