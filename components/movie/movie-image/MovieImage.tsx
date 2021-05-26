import React from "react";
import styled from "styled-components";
import MovieImageType from "../../../models/MovieImageType";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import { getBackdropPath, getPosterPath } from "../../../network/helpers";

interface ImageProps {
  imagePosition?: string;
}

const Image = styled.img<ImageProps>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${(props) =>
    props.imagePosition && `object-position: ${props.imagePosition}`};
`;

export interface MovieImageProps extends ImageProps {
  type: MovieImageType;
  title: string;
  path: string;
  size: BackdropSizes | PosterSizes;
}

const MovieImage = React.forwardRef<HTMLImageElement, MovieImageProps>(
  ({ type, title, path, size, imagePosition }, ref) => {
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
        alt={title}
        src={source}
        imagePosition={imagePosition}
        loading="lazy"
        onError={(ev) =>
          ((ev.target as HTMLImageElement).style.visibility = "hidden")
        }
      />
    );
  }
);

MovieImage.displayName = "MovieImage";

export default MovieImage;
