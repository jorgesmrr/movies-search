import React from "react";
import Movie from "../../../models/Movie";
import ImageType from "../../../models/ImageType";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import { ImageSizes } from "../../../network/constants";
import MovieListItem from "../movie-list-item/MovieListItem";
import MovieListGrid, { MovieListGridProps } from "./MovieListGrid";
import MovieListSlider, { MovieListSliderProps } from "./MovieListSlider";

export interface MovieListProps {
  isLoading: boolean;
  error: boolean;
  imageType: ImageType;
  count: number;
  sizes: ResponsiveProperty<ImageSizes>;
  movies?: Movie[];
}

interface MovieListContextValue {
  isLoading: boolean;
  error: boolean;
  movies?: Movie[];
  renderChild: (movie?: Movie) => React.ReactElement;
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
  sizes,
  imageType,
  children,
  error,
}) => {
  let adjustedMovies: Array<Movie | undefined> = null;

  if (isLoading) {
    adjustedMovies = [...new Array(count)].map(() => undefined);
  } else if (movies) {
    adjustedMovies = movies.slice(0, count);
  }

  const renderChild = (movie?: Movie) => (
    <MovieListItem
      isLoading={isLoading}
      movie={movie}
      imageType={imageType}
      sizes={sizes}
    />
  );

  return (
    <MovieListContext.Provider
      value={{
        isLoading,
        error,
        movies: adjustedMovies,
        renderChild,
      }}
    >
      {children}
    </MovieListContext.Provider>
  );
};

MovieList.Grid = MovieListGrid;
MovieList.Slider = MovieListSlider;

export default MovieList;
