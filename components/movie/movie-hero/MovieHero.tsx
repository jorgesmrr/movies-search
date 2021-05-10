import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { BackdropSizes } from "../../../network/costants";
import BackdropImage from "../../image/backdrop-image/BackdropImage";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";

const Container = styled.div`
  background: black;
`;

const ContentContainer = styled(LimitedWidth)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: min(42.85%, 30rem);
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 15%;
    background: black;
    z-index: 1;
    background: linear-gradient(
      to right,
      hsl(0, 0%, 0%) 0%,
      hsla(0, 0%, 0%, 0.987) 8.1%,
      hsla(0, 0%, 0%, 0.951) 15.5%,
      hsla(0, 0%, 0%, 0.896) 22.5%,
      hsla(0, 0%, 0%, 0.825) 29%,
      hsla(0, 0%, 0%, 0.741) 35.3%,
      hsla(0, 0%, 0%, 0.648) 41.2%,
      hsla(0, 0%, 0%, 0.55) 47.1%,
      hsla(0, 0%, 0%, 0.45) 52.9%,
      hsla(0, 0%, 0%, 0.352) 58.8%,
      hsla(0, 0%, 0%, 0.259) 64.7%,
      hsla(0, 0%, 0%, 0.175) 71%,
      hsla(0, 0%, 0%, 0.104) 77.5%,
      hsla(0, 0%, 0%, 0.049) 84.5%,
      hsla(0, 0%, 0%, 0.013) 91.9%,
      hsla(0, 0%, 0%, 0) 100%
    );
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
    transform: rotate(180deg);
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export interface MovieHeroProps {
  backdrop: string;
}

const MovieHero: React.FC<MovieHeroProps> = ({ backdrop }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ContentContainer maxWidth={theme.pageWidth + 4}>
        <ImageContainer>
          <BackdropImage
            fileName={backdrop}
            size={BackdropSizes.Big}
            height="100%"
          />
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
};

export default MovieHero;
