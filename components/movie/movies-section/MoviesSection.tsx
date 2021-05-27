import { useState } from "react";
import styled from "styled-components";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import PagedResponse from "../../../models/PagedResponse";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import Endpoint from "../../../network/endpoint";
import Fetch from "../../fetch/Fetch";
import ChevronLeftIcon from "../../icon/ChevronLeftIcon";
import ChevronRightIcon from "../../icon/ChevronRightIcon";
import Button from "../../layout/button/Button";
import { VisibleMdUp, Heading2, textSize } from "../../style/style";
import MovieList from "../movie-list/MovieList";

const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.75em 0 0.25em;
  ${({ theme }) => textSize(theme, 4)}

  h2 {
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

interface MoviesSectionProps {
  title: string;
  endpoint: Endpoint<PagedResponse<Movie>>;
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
      <SectionHeading>
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
      </SectionHeading>

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
