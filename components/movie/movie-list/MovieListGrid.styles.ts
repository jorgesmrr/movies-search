import styled from "styled-components";
import { ListNone } from "../../style/style";

export const Grid = styled(ListNone)<{ columns: number }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(10rem, 100%), 1fr));

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(min(14rem, 100%), 1fr));
  }
`;
