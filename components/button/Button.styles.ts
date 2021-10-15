import styled from "styled-components";
import { transition } from "../style/style";

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.neutral.darker};
  border-radius: ${({ theme }) => theme.dimensions.radius};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  border: none;
  padding: 0.25rem 0.75rem;
  appearance: none;
  font-size: 1em;

  &[disabled] {
    color: ${({ theme }) => theme.color.neutral.default};
    background-color: ${({ theme }) => theme.color.neutral.darkest};
  }

  &:not([disabled]) {
    cursor: pointer;
    ${transition("background-color")}
  }

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.color.accent.dark};
  }

  &:active:not([disabled]) {
    background-color: ${({ theme }) => theme.color.accent.darker};
  }
`;
