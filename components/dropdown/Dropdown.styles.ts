import styled from "styled-components";
import { ListNone, transition } from "../style/style";

export const Root = styled.div`
  position: relative;
`;

interface ItemsListProps {
  isOpen: boolean;
}

export const ItemsList = styled(ListNone)<ItemsListProps>`
  position: absolute;
  z-index: 100;
  top: 100%;
  left: 0;
  display: inline-block;
  min-width: 10rem;
  background-color: ${({ theme }) => theme.color.neutral.light};
  border-radius: ${({ theme }) => theme.dimensions.radius};
  box-shadow: ${({ theme }) => theme.shadow[1]};
  overflow: hidden;
  color: ${({ theme }) => theme.color.neutral.darker};
  ${transition("opacity")}
  ${({ isOpen }) =>
    isOpen ? `opacity: 1` : `opacity: 0; pointer-events: none`}
`;
