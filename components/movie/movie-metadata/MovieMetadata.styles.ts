import styled from "styled-components";
import { ListNone } from "../../style/style";

export const List = styled(ListNone)`
  display: flex;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.mobile[1]}rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.desktop[2]}rem;
  }
`;

export const Item = styled.li`
  &:not(:last-child):after {
    content: "\\2022";
    display: inline-block;
    padding: 0 0.5rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 0 0.75rem;
    }
  }
`;

export const RatingValue = styled.span`
  &::before {
    content: "\\2605";
    padding-right: 0.25rem;
  }
`;

export const RatingRange = styled.span`
  color: ${({ theme }) => theme.color.neutral.lighter};
`;
