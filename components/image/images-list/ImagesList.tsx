import React from "react";
import ImageType from "../../../models/ImageType";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import { ImageSizes } from "../../../network/constants";
import ImagesListGrid, { ImagesListGridProps } from "./ImagesListGrid";
import ImagesListSlider, { ImagesListSliderProps } from "./ImagesListSlider";
import ImageDescription from "../../../models/ImageDescription";
import ImageListItem from "../image-list-item/ImageListItem";

export interface ImagesListProps {
  isLoading: boolean;
  error: boolean;
  imageType: ImageType;
  count: number;
  sizes: ResponsiveProperty<ImageSizes>;
  images?: ImageDescription[];
  showTitles?: boolean;
}

interface ImagesListContextValue {
  isLoading: boolean;
  error: boolean;
  images?: ImageDescription[];
  renderChild: (image?: ImageDescription) => React.ReactElement;
}

interface ImagesListComposition {
  Grid: React.FC<ImagesListGridProps>;
  Slider: React.FC<ImagesListSliderProps>;
}

export const ImagesListContext = React.createContext<ImagesListContextValue>(
  undefined
);

const ImagesList: ImagesListComposition & React.FC<ImagesListProps> = ({
  isLoading,
  images,
  count,
  sizes,
  imageType,
  showTitles,
  error,
  children,
}) => {
  let adjustedImages: Array<ImageDescription | undefined> = null;

  if (isLoading) {
    adjustedImages = [...new Array(count)].map(() => undefined);
  } else if (images) {
    adjustedImages = images.slice(0, count);
  }

  const renderChild = (image?: ImageDescription) => (
    <ImageListItem
      isLoading={isLoading}
      image={image}
      imageType={imageType}
      sizes={sizes}
      showTitle={showTitles}
    />
  );

  return (
    <ImagesListContext.Provider
      value={{
        isLoading,
        error,
        images: adjustedImages,
        renderChild,
      }}
    >
      {children}
    </ImagesListContext.Provider>
  );
};

ImagesList.Grid = ImagesListGrid;
ImagesList.Slider = ImagesListSlider;

export default ImagesList;
