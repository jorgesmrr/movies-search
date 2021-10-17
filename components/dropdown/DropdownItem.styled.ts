import styled from "styled-components";
import { transition } from "../style/style";

export const Item = styled.li`
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  ${transition("background-color")}

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral.default};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.neutral.dark};
    color: ${({ theme }) => theme.color.neutral.lighter};
  }
`;
