import React from "react";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import MovieListItem from "../movie-list-item/MovieListItem";
import MovieListGrid from "./MovieListGrid";
import MovieListSlider, { MovieListSliderProps } from "./MovieListSlider";

const backdropCountSizesMap = {
  1: BackdropSizes.Big,
  3: BackdropSizes.Regular,
  5: BackdropSizes.Small,
};

const posterCountSizesMap = {
  3: PosterSizes.Big,
  6: PosterSizes.Small,
};

export interface MovieListProps {
  isLoading: boolean;
  error: boolean;
  imageType: MovieImageType;
  count: number;
  rowCount: number;
  movies?: Movie[];
}

interface MovieListContextValue {
  movies?: Movie[];
  size: BackdropSizes | PosterSizes;
  renderChild: (movie?: Movie) => React.ReactElement;
  isLoading: boolean;
  error: boolean;
  rowCount?: number;
}

interface MovieListComposition {
  Grid: React.FC;
  Slider: React.FC<MovieListSliderProps>;
}

export const MovieListContext = React.createContext<MovieListContextValue>(
  undefined
);

const MovieList: MovieListComposition & React.FC<MovieListProps> = ({
  isLoading,
  movies,
  count,
  rowCount = count,
  imageType,
  children,
  error,
}) => {
  const size: BackdropSizes | PosterSizes =
    imageType === MovieImageType.Backdrop
      ? backdropCountSizesMap[rowCount]
      : posterCountSizesMap[rowCount];

  const adjustedMovies: Array<Movie | undefined> = movies
    ? movies.slice(0, count)
    : [...new Array(count).map(() => undefined)];

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
        rowCount,
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
