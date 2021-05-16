import React from "react";
import { BackdropSizes } from "../../../network/costants";
import { getBackdropPath } from "../../../network/helpers";
import { RoundedImage, RoundedImageProps } from "../../style/style";

export interface BackdropImageProps {
  fileName: string;
  size: BackdropSizes;
}

// TODO merge with  PosterImage
const BackdropImage = React.forwardRef<
  HTMLImageElement,
  RoundedImageProps & BackdropImageProps
>(({ fileName, size, ...roundedImageProps }, ref) => {
  return (
    <RoundedImage
      ref={ref}
      src={getBackdropPath(fileName, size)}
      {...roundedImageProps}
    />
  );
});

BackdropImage.displayName = "BackdropImage";

export default BackdropImage;
