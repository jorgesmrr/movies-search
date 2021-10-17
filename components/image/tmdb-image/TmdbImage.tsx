import React from "react";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import { ImageSizes } from "../../../network/constants";
import { getImagePath } from "../../../network/helpers";
import { ImageSource } from "../../responsive-image/ResponsiveImage";
import * as S from "./TmdbImage.styles";

export interface TmdbImageProps extends S.ImageProps {
  title: string;
  path: string;
  sizes: ResponsiveProperty<ImageSizes>;
}

const TmdbImage: React.FC<TmdbImageProps> = ({
  title,
  path,
  sizes,
  $imagePosition,
  $objectFit,
  $inset,
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
    <S.ResponsiveImage
      $imagePosition={$imagePosition}
      $objectFit={$objectFit}
      $inset={$inset}
      alt={title}
      sources={sources}
      loading="lazy"
      onLoad={(ev) => ((ev.target as HTMLImageElement).style.opacity = "1")}
      onError={(ev) =>
        ((ev.target as HTMLImageElement).style.visibility = "hidden")
      }
    />
  );
};

export default TmdbImage;
