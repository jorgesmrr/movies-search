import styled from "styled-components";
import { ListNone } from "../../style/style";

export const MainImage = styled.div`
  width: 100%;
`;

export const Nav = styled.nav`
  width: calc(100% + 1rem);
  margin: 1rem -0.5rem;
  overflow-x: hidden;
  overflow-y: visible;
`;

export const List = styled(ListNone)`
  display: flex;
  gap: 1rem;
  overflow-y: visible;
  padding: 0 0.5rem;
`;

export const ListItem = styled.li`
  flex: 0 0 10rem;
`;
