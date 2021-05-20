import React from "react";
import styled from "styled-components";
import MovieImageType from "../../../models/MovieImageType";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import { getBackdropPath, getPosterPath } from "../../../network/helpers";

interface ImageProps {
  height?: string;
  imagePosition?: string;
}

const Image = styled.img<ImageProps>`
  display: block;
  width: 100%;
  height: ${(props) => props.height || "auto"};
  overflow: hidden;
  object-fit: cover;
  ${(props) =>
    props.imagePosition && `object-position: ${props.imagePosition}`};
`;

export interface MovieImageProps extends ImageProps {
  type: MovieImageType;
  path: string;
  size: BackdropSizes | PosterSizes;
}

const MovieImage = React.forwardRef<HTMLImageElement, MovieImageProps>(
  ({ type, path, size, height, imagePosition }, ref) => {
    let source;

    switch (type) {
      case MovieImageType.Backdrop:
        source = getBackdropPath(path, size as BackdropSizes);
        break;
      case MovieImageType.Poster:
        source = getPosterPath(path, size as PosterSizes);
        break;
      default:
        return null;
    }

    return (
      <Image
        ref={ref}
        src={source}
        height={height}
        imagePosition={imagePosition}
        onError={(ev) =>
          ((ev.target as HTMLImageElement).style.visibility = "hidden")
        }
      />
    );
  }
);

MovieImage.displayName = "MovieImage";

export default MovieImage;
