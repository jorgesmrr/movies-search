import { useContext } from "react";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import Slider from "../../slider/Slider";
import { ImagesListContext } from "./ImagesList";
import ImagesListError from "./ImagesListError";

export interface ImagesListSliderProps {
  activeSlide: number;
  itemsPerSlide: ResponsiveProperty<number>;
}

const ImagesListSlider: React.FC<ImagesListSliderProps> = ({
  activeSlide,
  itemsPerSlide,
}) => {
  const contextValue = useContext(ImagesListContext);

  if (!contextValue) return null;

  const { isLoading, error, images, renderChild } = contextValue;

  if (error) {
    return <ImagesListError />;
  }

  if (!isLoading && !images) {
    return null;
  }

  // TODO improve aria-label
  return (
    <Slider
      aria-label="images list"
      itemsPerSlide={itemsPerSlide}
      activeSlide={activeSlide}
      renderChild={renderChild}
      data={images}
      itemLabelGetter={(movie) => movie?.title}
      shadowOverflow={{
        x: ".5rem",
        y: "2rem",
      }}
    />
  );
};

export default ImagesListSlider;
