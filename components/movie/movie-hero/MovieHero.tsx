import React, { useContext, useRef } from "react";
import { BackdropSizes } from "../../../network/constants";
import { ThemeContext } from "styled-components";
import { useScrollEffect } from "@bit/jorgemoreira.headless-react.hooks";
import TmdbImage from "../../image/tmdb-image/TmdbImage";
import * as S from "./MovieHero.styles";

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
    <S.Wrapper>
      <S.ImageAspect maxWidth={theme.dimensions.pageWidth + 4}>
        <S.ImageWrapper ref={imageRef}>
          <TmdbImage
            title={title}
            path={backdrop}
            sizes={{ xs: BackdropSizes.Big }}
            $imagePosition="center top"
          />
        </S.ImageWrapper>
      </S.ImageAspect>
    </S.Wrapper>
  );
};

export default MovieHero;
