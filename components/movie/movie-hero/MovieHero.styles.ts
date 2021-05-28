import styled from "styled-components";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import { easedDarkGradient } from "../../style/style";

export const Wrapper = styled.div`
  background: black;
  margin-top: ${({ theme }) => theme.dimensions.navbarHeight};
`;

export const ImageAspect = styled(LimitedWidth)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: min(56.25%, 30rem);
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: min(42.85%, 30rem);

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      height: 100%;
      width: 15%;
      background: black;
      z-index: 1;
    }

    &:before {
      left: 0;
      background: ${easedDarkGradient("right")};
    }

    &:after {
      right: 0;
      background: ${easedDarkGradient("left")};
    }
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
