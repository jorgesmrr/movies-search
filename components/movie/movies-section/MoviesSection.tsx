import { useState } from "react";
import styled from "styled-components";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import PagedResponse from "../../../models/PagedResponse";
import Endpoint from "../../../network/endpoint";
import Fetch from "../../fetch/Fetch";
import ChevronLeftIcon from "../../icon/ChevronLeftIcon";
import ChevronRightIcon from "../../icon/ChevronRightIcon";
import Button from "../../layout/button/Button";
import { Heading2, textSize } from "../../style/style";
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

  const rowCount = imageType === MovieImageType.Backdrop ? 3 : 6;
  const count =
    imageType === MovieImageType.Backdrop ? rowCount * 3 : rowCount * 2;

  // TODO validade index
  const onPreviousSlideClick = () => setActiveSlide(activeSlide - 1);
  const onNextSlideClick = () => setActiveSlide(activeSlide + 1);

  return (
    <>
      <SectionHeading>
        <Heading2>{title}</Heading2>
        <Button onClick={onPreviousSlideClick}>
          <ChevronLeftIcon />
        </Button>
        <Button onClick={onNextSlideClick}>
          <ChevronRightIcon />
        </Button>
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
            rowCount={rowCount}
          >
            <MovieList.Slider activeSlide={activeSlide} />
          </MovieList>
        )}
      />
    </>
  );
};

export default MoviesSection;
