import styled from "styled-components";
import { ListNone } from "../style/style";

export const Footer = styled.footer`
  text-align: center;
  margin-top: auto;

  &:before {
    display: inline-block;
    content: "";
    height: 1px;
    background-color: ${({ theme }) => theme.color.neutral.dark};
    width: 7.5rem;
  }
`;

export const List = styled(ListNone)`
  color: ${({ theme }) => theme.color.neutral.light};
  margin: 1rem 1rem 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
  }
`;

export const Item = styled.li`
  margin: 0.35em 0;

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.color.accent.light};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:not(:last-child):after {
      content: "\\2022";
      color: ${({ theme }) => theme.color.neutral.default};
      margin: 0 0.5rem;
    }
  }
`;
