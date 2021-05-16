import { useContext } from "react";
import Slider from "../../layout/slider/Slider";
import { Alert } from "../../style/style";
import { MovieListContext } from "./MovieList";
import MovieListError from "./MovieListError";

export interface MovieListSliderProps {
  activeSlide: number;
}

const MovieListSlider: React.FC<MovieListSliderProps> = ({ activeSlide }) => {
  const contextValue = useContext(MovieListContext);

  if (!contextValue) return null;

  const {
    isLoading,
    error,
    size,
    movies,
    renderChild,
    rowCount,
  } = contextValue;

  if (error || size === undefined || (!isLoading && !movies)) {
    return <MovieListError />;
  }

  return (
    <Slider
      aria-label="movies list"
      itemsPerSlide={rowCount}
      activeSlide={activeSlide}
      renderChild={renderChild}
      data={movies}
      itemLabelGetter={(movie) => movie?.title}
      shadowOverflow={{
        x: ".5rem",
        y: "2rem",
      }}
    />
  );
};

export default MovieListSlider;
