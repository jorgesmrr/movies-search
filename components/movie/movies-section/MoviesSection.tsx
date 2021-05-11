import { useState } from "react";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import PagedResponse from "../../../models/PagedResponse";
import Endpoint from "../../../network/endpoint";
import Fetch from "../../fetch/Fetch";
import { Heading2 } from "../../style/style";
import MovieList from "../movie-list/MovieList";

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
      <Heading2>{title}</Heading2>

      <button onClick={onPreviousSlideClick}>{"<"}</button>
      <button onClick={onNextSlideClick}>{">"}</button>

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
