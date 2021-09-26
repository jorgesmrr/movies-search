import React from "react";
import Movie from "../../../models/Movie";
import ImageType from "../../../models/ImageType";
import { ImageSizes } from "../../../network/constants";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import ImageListItem from "../../list/image-list-item/ImageListItem";

export interface MovieListItemProps {
  isLoading: boolean;
  imageType: ImageType;
  sizes: ResponsiveProperty<ImageSizes>;
  movie?: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  isLoading,
  imageType,
  sizes,
  movie,
}) => {
  const imagePath = movie
    ? imageType === ImageType.Backdrop
      ? movie.backdrop
      : movie.poster
    : null;

  return (
    <ImageListItem
      isLoading={isLoading}
      title={movie?.title}
      link={movie && `/movie?id=${movie.id}`}
      imagePath={imagePath}
      imageType={imageType}
      sizes={sizes}
    />
  );
};

export default MovieListItem;
