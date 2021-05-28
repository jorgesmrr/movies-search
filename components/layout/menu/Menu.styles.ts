import styled from "styled-components";
import { ListNone, transition } from "../../style/style";

export const List = styled(ListNone)`
  font-size: 1.125rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 1rem 1rem 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    padding: 0;
    gap: 2rem;
  }
`;

export const Item = styled.li<{ selected?: boolean }>`
  margin: 0.5rem 0;
  padding: 0.75rem 0 0.75rem 1rem;
  border-bottom: none;
  border-left: 4px solid
    ${({ selected, theme }) =>
      selected ? theme.color.accent.dark : "transparent"};
  ${transition("border-color")}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
    margin: 0;
    border-left: none;
    border-bottom: 4px solid
      ${({ selected, theme }) =>
        selected ? theme.color.accent.dark : "transparent"};
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.accent.dark};
  }

  &:active {
    border-color: ${({ theme }) => theme.color.accent.darker};
  }
`;

export const Link = styled.a`
  display: block;
  color: ${({ theme }) => theme.color.neutral.lightest};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    line-height: 4rem;
  }
`;
