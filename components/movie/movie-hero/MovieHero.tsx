import React, { useContext, useRef } from "react";
import styled, { ThemeContext } from "styled-components";
import { BackdropSizes } from "../../../network/costants";
import LimitedWidth from "../../layout/limited-width/LimitedWidth";
import { easedDarkGradient } from "../../style/style";
import { useScrollEffect } from "@bit/jorgemoreira.headless-react.hooks";
import MovieImage from "../movie-image/MovieImage";

const Container = styled.div`
  background: black;
  margin-top: ${({ theme }) => theme.dimensions.navbarHeight};
`;

const ContentContainer = styled(LimitedWidth)`
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

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export interface MovieHeroProps {
  title: string;
  backdrop: string;
}

const MovieHero: React.FC<MovieHeroProps> = ({ title, backdrop }) => {
  const theme = useContext(ThemeContext);
  const imageRef = useRef<HTMLImageElement>(null);

  useScrollEffect(
    ({ y }) => {
      if (imageRef.current) {
        requestAnimationFrame(
          () => (imageRef.current.style.transform = `translateY(${y / 2}px)`)
        );
      }
    },
    [],
    0
  );

  return (
    <Container>
      <ContentContainer maxWidth={theme.dimensions.pageWidth + 4}>
        <ImageContainer ref={imageRef}>
          <MovieImage
            title={title}
            path={backdrop}
            sizes={{ xs: BackdropSizes.Big }}
            $imagePosition="center top"
          />
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
};

export default MovieHero;
