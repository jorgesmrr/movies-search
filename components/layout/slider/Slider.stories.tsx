import React from "react";
import { Story, Meta } from "@storybook/react";
import Slider, { SliderProps } from "./Slider";
import styled from "styled-components";

export default {
  title: "Layout/Slider",
  component: Slider,
} as Meta;

const StyledItem = styled.div`
  background-color: grey;
`;

const Template: Story<SliderProps<string>> = (args) => (
  <Slider {...args} renderChild={(item) => <StyledItem>{item}</StyledItem>} />
);

export const Default = Template.bind({});
Default.args = { data: ["foo", "bar"], itemsPerSlide: 2 };
