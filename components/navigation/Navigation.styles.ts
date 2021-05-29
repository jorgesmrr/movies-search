import styled from "styled-components";
import { LimitedWidth } from "../style/style";

export const NavbarWrapper = styled.div<{ transparent: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(
    20,
    20,
    20,
    ${({ transparent }) => (transparent ? 0.75 : 1)}
  );
  backdrop-filter: blur(3px);
  box-shadow: ${({ theme }) => theme.shadow[3]};
  transition: background-color 150ms ease-in-out;

  @supports (backdrop-filter: blur(3px)) {
    background-color: rgba(20, 20, 20, 0.75);
  }
`;

export const NavbarContents = styled(LimitedWidth)`
  position: relative;
  z-index: 2;
  min-height: ${({ theme }) => theme.dimensions.navbarHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
