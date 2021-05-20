import React from "react";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import MovieListItem from "../movie-list-item/MovieListItem";
import MovieListGrid, { MovieListGridProps } from "./MovieListGrid";
import MovieListSlider, { MovieListSliderProps } from "./MovieListSlider";

export interface MovieListProps {
  isLoading: boolean;
  error: boolean;
  imageType: MovieImageType;
  count: number;
  movies?: Movie[];
}

interface MovieListContextValue {
  movies?: Movie[];
  size: BackdropSizes | PosterSizes;
  renderChild: (movie?: Movie) => React.ReactElement;
  isLoading: boolean;
  error: boolean;
}

interface MovieListComposition {
  Grid: React.FC<MovieListGridProps>;
  Slider: React.FC<MovieListSliderProps>;
}

export const MovieListContext = React.createContext<MovieListContextValue>(
  undefined
);

const MovieList: MovieListComposition & React.FC<MovieListProps> = ({
  isLoading,
  movies,
  count,
  imageType,
  children,
  error,
}) => {
  // TODO make responsive
  const size: BackdropSizes | PosterSizes =
    imageType === MovieImageType.Backdrop
      ? BackdropSizes.Regular
      : PosterSizes.Regular;

  const adjustedMovies: Array<Movie | undefined> = movies
    ? movies.slice(0, count)
    : [...new Array(count)].map(() => undefined);

  const renderChild = (movie?: Movie) => (
    <MovieListItem
      isLoading={isLoading}
      movie={movie}
      imageType={imageType}
      size={size}
    />
  );

  return (
    <MovieListContext.Provider
      value={{
        size,
        movies: adjustedMovies,
        renderChild,
        isLoading,
        error,
      }}
    >
      {children}
    </MovieListContext.Provider>
  );
};

MovieList.Grid = MovieListGrid;
MovieList.Slider = MovieListSlider;

export default MovieList;
