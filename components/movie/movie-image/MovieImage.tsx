import React from "react";
import { RoundedImage, RoundedImageProps } from "../../style/style";
import MovieImageType from "../../../models/MovieImageType";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import { getBackdropPath, getPosterPath } from "../../../network/helpers";

export interface MovieImageProps {
  type: MovieImageType;
  path: string;
  size: BackdropSizes | PosterSizes;
}

const MovieImage = React.forwardRef<
  HTMLImageElement,
  RoundedImageProps & MovieImageProps
>(({ type, path, size, ...roundedImageProps }, ref) => {
  let source;

  // TODO validate size + type

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

  return <RoundedImage ref={ref} src={source} {...roundedImageProps} />;
});

MovieImage.displayName = "MovieImage";

export default MovieImage;
