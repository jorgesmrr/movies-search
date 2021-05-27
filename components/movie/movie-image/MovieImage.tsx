import React from "react";
import styled from "styled-components";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import { getImagePath } from "../../../network/helpers";
import ResponsiveImage, {
  ImageSource,
} from "../../layout/responsive-image/ResponsiveImage";

interface StyledImageProps {
  $imagePosition?: string;
}

const StyledResponsiveImage = styled(ResponsiveImage)<StyledImageProps>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ $imagePosition }) =>
    $imagePosition && `object-position: ${$imagePosition}`};
`;

export interface MovieImageProps extends StyledImageProps {
  title: string;
  path: string;
  sizes: ResponsiveProperty<BackdropSizes | PosterSizes>;
}

const MovieImage: React.FC<MovieImageProps> = ({
  title,
  path,
  sizes,
  $imagePosition,
}) => {
  const buildSource = (breakpoint: string) =>
    sizes[breakpoint]
      ? {
          src: getImagePath(path, sizes[breakpoint]),
          width: sizes[breakpoint],
        }
      : undefined;

  const sources: ResponsiveProperty<ImageSource> = {
    xs: buildSource("xs"),
    sm: buildSource("sm"),
    md: buildSource("md"),
    lg: buildSource("lg"),
  };

  return (
    <StyledResponsiveImage
      $imagePosition={$imagePosition}
      alt={title}
      sources={sources}
      loading="lazy"
      onError={(ev) =>
        ((ev.target as HTMLImageElement).style.visibility = "hidden")
      }
    />
  );
};

export default MovieImage;
