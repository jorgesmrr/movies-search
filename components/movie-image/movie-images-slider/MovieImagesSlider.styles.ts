import styled from "styled-components";
import { ListNone } from "../../style/style";

export const MainImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.black};
  border-radius: ${({ theme }) => theme.dimensions.radius};
  box-shadow: ${({ theme }) => theme.shadow[2]};
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  width: calc(100% + 1rem);
  margin: 1rem -0.5rem;
  overflow-x: hidden;
  overflow-y: visible;
`;

export const List = styled(ListNone)`
  display: flex;
  overflow-y: visible;
`;

export const ListItem = styled.li`
  flex: 0 0 10rem;
  padding: 0 0.5rem;
`;
