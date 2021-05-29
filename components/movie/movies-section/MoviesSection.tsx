import { useState } from "react";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import PagedResponse from "../../../models/PagedResponse";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import { RequestEndpoint } from "@bit/jorgemoreira.headless-react.hooks";
import Fetch from "@bit/jorgemoreira.headless-react.network.fetch";
import ChevronLeftIcon from "../../icon/ChevronLeftIcon";
import ChevronRightIcon from "../../icon/ChevronRightIcon";
import Button from "../../layout/button/Button";
import { VisibleMdUp, Heading2 } from "../../style/style";
import MovieList from "../movie-list/MovieList";
import * as S from "./MoviesSection.styles";

interface MoviesSectionProps {
  title: string;
  endpoint: RequestEndpoint<PagedResponse<Movie>>;
  imageType: MovieImageType;
}

const MoviesSection: React.FC<MoviesSectionProps> = ({
  title,
  endpoint,
  imageType,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sizes =
    imageType === MovieImageType.Backdrop
      ? { xs: BackdropSizes.Big, sm: BackdropSizes.Regular }
      : {
          xs: PosterSizes.Big,
          md: PosterSizes.Medium,
          lg: PosterSizes.Regular,
        };

  const rowCount =
    imageType === MovieImageType.Backdrop
      ? { xs: 1, sm: 2, md: 3 }
      : { xs: 2, sm: 3, md: 6 };

  const count =
    imageType === MovieImageType.Backdrop ? rowCount.md * 3 : rowCount.md * 2;

  const onPreviousSlideClick = () =>
    setActiveSlide(Math.max(0, activeSlide - 1));
  const onNextSlideClick = () =>
    setActiveSlide(Math.min(count / rowCount.md - 1, activeSlide + 1));

  return (
    <>
      <S.Heading>
        <Heading2>{title}</Heading2>

        <VisibleMdUp>
          <Button onClick={onPreviousSlideClick}>
            <ChevronLeftIcon />
          </Button>
        </VisibleMdUp>

        <VisibleMdUp>
          <Button onClick={onNextSlideClick}>
            <ChevronRightIcon />
          </Button>
        </VisibleMdUp>
      </S.Heading>

      <Fetch
        endpoint={endpoint}
        dependencies={[]}
        render={({ data, isLoading, error }) => (
          <MovieList
            isLoading={isLoading}
            error={error}
            movies={data?.results}
            count={count}
            imageType={imageType}
            sizes={sizes}
          >
            <MovieList.Slider
              activeSlide={activeSlide}
              itemsPerSlide={rowCount}
            />
          </MovieList>
        )}
      />
    </>
  );
};

export default MoviesSection;
