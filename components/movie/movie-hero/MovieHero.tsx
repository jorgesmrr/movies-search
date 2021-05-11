import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { BackdropSizes } from "../../../network/costants";
import BackdropImage from "../../image/backdrop-image/BackdropImage";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import { easedDarkGradient } from "../../style/style";

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
