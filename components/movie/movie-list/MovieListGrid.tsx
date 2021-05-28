import { useContext } from "react";
import { MovieListContext } from "../movie-list/MovieList";
import MovieListError from "./MovieListError";
import * as S from "./MovieListGrid.styles";

export interface MovieListGridProps {
  columns: number;
}

const MovieListGrid: React.FC<MovieListGridProps> = ({ columns }) => {
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
    <S.Grid aria-label="movies list" columns={columns}>
      {movies.map((_, index) => {
        const movie = !isLoading ? movies[index] : undefined;

        return (
          <li key={movie?.id || index} aria-label={movie?.title}>
            {renderChild(movie)}
          </li>
        );
      })}
    </S.Grid>
  );
};

export default MovieListGrid;
