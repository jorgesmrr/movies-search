import styled from "styled-components";
import { ListNone } from "../../style/style";

export const Grid = styled(ListNone)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(15rem, 100%), 1fr));
`;
