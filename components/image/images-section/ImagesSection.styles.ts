import styled from "styled-components";
import { textSize } from "../../style/style";

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.75em 0 0.25em;
  ${({ theme }) => textSize(theme, 4)}

  h2 {
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
