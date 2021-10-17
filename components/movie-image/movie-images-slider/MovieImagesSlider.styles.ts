import styled from "styled-components";
import { easedDarkGradient, ListNone } from "../../style/style";

export const MainImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.black};
  border-radius: ${({ theme }) => theme.dimensions.radius};
  box-shadow: ${({ theme }) => theme.shadow[2]};
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface MainImageAspect {
  $mobileAspect?: number;
}

export const MainImageAspect = styled.div<MainImageAspect>`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: ${({ $mobileAspect }) => `${$mobileAspect}%`};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: 56.25%;
  }
`;

export const Nav = styled.nav`
  position: relative;
  background-color: ${({ theme }) => theme.color.neutral.black};
  width: 100%;
  margin: 1rem 0;
  overflow-x: hidden;
  overflow-y: visible;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.dimensions.radius};
  box-shadow: inset ${({ theme }) => theme.shadow[2]};

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 4rem;
    background: ${({ theme }) => theme.color.neutral.black};
    z-index: 1;
    pointer-events: none;
  }

  &:before {
    left: 0;
    background: ${easedDarkGradient("right")};
  }

  &:after {
    right: 0;
    background: ${easedDarkGradient("left")};
  }
`;

export const ListWrapper = styled.div`
  width: calc(100% + 1rem);
  margin: 0 -0.5rem;
`;

export const List = styled(ListNone)`
  display: flex;
  overflow-y: visible;
  transition: transform 250ms ease-in-out;
`;

export const ListItem = styled.li`
  flex: 0 0 10rem;
  padding: 0 0.5rem;
`;
