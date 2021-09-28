import { useState } from "react";
import ImageType from "../../../models/ImageType";
import { ImageSizes } from "../../../network/constants";
import ChevronLeftIcon from "../../icon/ChevronLeftIcon";
import ChevronRightIcon from "../../icon/ChevronRightIcon";
import Button from "../../button/Button";
import { VisibleMdUp, Heading2 } from "../../style/style";
import ImagesList from "../../image/images-list/ImagesList";
import * as S from "./ImagesSection.styles";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import ImageDescription from "../../../models/ImageDescription";

export interface ImagesSectionProps {
  title: string;
  isLoading: boolean;
  error: boolean;
  images: ImageDescription[];
  imageType: ImageType;
  sizes: ResponsiveProperty<ImageSizes>;
  rowCount: ResponsiveProperty<number>;
  count: number;
}

const ImagesSection: React.FC<ImagesSectionProps> = ({
  title,
  isLoading,
  error,
  images,
  imageType,
  sizes,
  rowCount,
  count,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onPreviousSlideClick = () =>
    setActiveSlide(Math.max(0, activeSlide - 1));
  const onNextSlideClick = () =>
    setActiveSlide(Math.min(count / rowCount.md - 1, activeSlide + 1));

  // TODO improve aria-label

  return (
    <section aria-label={title}>
      <S.Heading>
        <Heading2>{title}</Heading2>

        <VisibleMdUp>
          <Button ariaLabel="next images" onClick={onPreviousSlideClick}>
            <ChevronLeftIcon />
          </Button>
        </VisibleMdUp>

        <VisibleMdUp>
          <Button ariaLabel="previous images" onClick={onNextSlideClick}>
            <ChevronRightIcon />
          </Button>
        </VisibleMdUp>
      </S.Heading>

      <ImagesList
        isLoading={isLoading}
        error={error}
        images={images}
        count={count}
        imageType={imageType}
        sizes={sizes}
      >
        <ImagesList.Slider activeSlide={activeSlide} itemsPerSlide={rowCount} />
      </ImagesList>
    </section>
  );
};

export default ImagesSection;