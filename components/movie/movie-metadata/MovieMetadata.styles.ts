import styled from "styled-components";
import { Badge } from "../../style/style";

export const Container = styled.dl`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.color.neutral.darker};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.darker};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    text-align: center;
    padding: 0;
    border: none;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column-reverse;
  font-size: ${({ theme }) => theme.fontSize.mobile[1]}rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.desktop[2]}rem;
  }

  dt {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.neutral.light};
    font-size: ${({ theme }) => theme.fontSize.mobile[0]}rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSize.desktop[1]}rem;
    }
  }

  dd {
    font-weight: 600;
  }
`;

export const RatingBadge = styled(Badge)`
  padding: 1rem;
`;
