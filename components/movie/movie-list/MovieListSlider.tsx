import { useContext } from "react";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import Slider from "../../layout/slider/Slider";
import { MovieListContext } from "./MovieList";
import MovieListError from "./MovieListError";

export interface MovieListSliderProps {
  activeSlide: number;
  itemsPerSlide: ResponsiveProperty<number>;
}

const MovieListSlider: React.FC<MovieListSliderProps> = ({
  activeSlide,
  itemsPerSlide,
}) => {
  const contextValue = useContext(MovieListContext);

  if (!contextValue) return null;

  const { isLoading, error, movies, renderChild } = contextValue;

  if (error) {
    return <MovieListError />;
  }

  if (!isLoading && !movies) {
    return null;
  }

  return (
    <Slider
      aria-label="movies list"
      itemsPerSlide={itemsPerSlide}
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
