import { useContext } from "react";
import styled from "styled-components";
import { ListNone } from "../../style/style";
import { MovieListContext } from "../movie-list/MovieList";
import MovieListError from "./MovieListError";

const Grid = styled(ListNone)<{ columns: number }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${({ columns }) => 60 / columns}rem, 100%), 1fr)
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(min(${({ columns }) => 70 / columns}rem, 100%), 1fr)
    );
  }
`;

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
    <Grid aria-label="movies list" columns={columns}>
      {movies.map((_, index) => {
        const movie = !isLoading ? movies[index] : undefined;

        return (
          <li key={movie?.id || index} aria-label={movie?.title}>
            {renderChild(movie)}
          </li>
        );
      })}
    </Grid>
  );
};

export default MovieListGrid;
