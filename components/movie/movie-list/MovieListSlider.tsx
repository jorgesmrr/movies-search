import { useContext } from "react";
import Slider from "../../layout/slider/Slider";
import { MovieListContext } from "./MovieList";

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
    return <div>Error!</div>; // TODO style
  }

  return (
    <Slider
      aria-label="movies list"
      itemsPerSlide={rowCount}
      activeSlide={activeSlide}
      renderChild={renderChild}
      data={movies}
      itemLabelGetter={(movie) => movie?.title}
    />
  );
};

export default MovieListSlider;
