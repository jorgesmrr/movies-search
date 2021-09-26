import { useState } from "react";
import Movie from "../../../models/Movie";
import ImageType from "../../../models/ImageType";
import PagedResponse from "../../../models/PagedResponse";
import { BackdropSizes, PosterSizes } from "../../../network/constants";
import { RequestEndpoint } from "@bit/jorgemoreira.headless-react.hooks";
import Fetch from "@bit/jorgemoreira.headless-react.network.fetch";
import ChevronLeftIcon from "../../icon/ChevronLeftIcon";
import ChevronRightIcon from "../../icon/ChevronRightIcon";
import Button from "../../button/Button";
import { VisibleMdUp, Heading2 } from "../../style/style";
import ImagesList from "../../image/images-list/ImagesList";
import * as S from "./MoviesSection.styles";
import {
  getMovieBackdropDescription,
  getMoviePosterDescription,
} from "../../../network/helpers";

export interface MoviesSectionProps {
  title: string;
  endpoint: RequestEndpoint<PagedResponse<Movie>>;
  imageType: ImageType;
}

const MoviesSection: React.FC<MoviesSectionProps> = ({
  title,
  endpoint,
  imageType,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sizes =
    imageType === ImageType.Backdrop
      ? { xs: BackdropSizes.Big, sm: BackdropSizes.Regular }
      : {
          xs: PosterSizes.Big,
          md: PosterSizes.Medium,
          lg: PosterSizes.Regular,
        };

  const rowCount =
    imageType === ImageType.Backdrop
      ? { xs: 1, sm: 2, md: 3 }
      : { xs: 2, sm: 3, md: 6 };

  const count =
    imageType === ImageType.Backdrop ? rowCount.md * 3 : rowCount.md * 2;

  const imageDescriptor =
    imageType === ImageType.Backdrop
      ? getMovieBackdropDescription
      : getMoviePosterDescription;

  const onPreviousSlideClick = () =>
    setActiveSlide(Math.max(0, activeSlide - 1));
  const onNextSlideClick = () =>
    setActiveSlide(Math.min(count / rowCount.md - 1, activeSlide + 1));

  return (
    <section aria-label={title}>
      <S.Heading>
        <Heading2>{title}</Heading2>

        <VisibleMdUp>
          <Button ariaLabel="next movies" onClick={onPreviousSlideClick}>
            <ChevronLeftIcon />
          </Button>
        </VisibleMdUp>

        <VisibleMdUp>
          <Button ariaLabel="previous movies" onClick={onNextSlideClick}>
            <ChevronRightIcon />
          </Button>
        </VisibleMdUp>
      </S.Heading>

      <Fetch
        endpoint={endpoint}
        render={({ data, isLoading, error }) => (
          <ImagesList
            isLoading={isLoading}
            error={error}
            images={data?.results.map(imageDescriptor)}
            count={count}
            imageType={imageType}
            sizes={sizes}
          >
            <ImagesList.Slider
              activeSlide={activeSlide}
              itemsPerSlide={rowCount}
            />
          </ImagesList>
        )}
      />
    </section>
  );
};

export default MoviesSection;
