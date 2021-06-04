import styled from "styled-components";
import { HiddenLgUp, LimitedWidth, transition } from "../style/style";

export const NavbarWrapper = styled.div<{ transparent: boolean }>`
  position: fixed;
  z-index: 2;
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
  min-height: ${({ theme }) => theme.dimensions.navbarHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const MenuIconWrapper = styled(HiddenLgUp)`
  appearance: none;
  border: none;
  padding: 0.5rem;
  margin: 0;
  background-color: transparent;
  color: currentColor;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.dimensions.radius};
  ${transition("background-color")}

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral.darker};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.neutral.dark};
  }
`;
