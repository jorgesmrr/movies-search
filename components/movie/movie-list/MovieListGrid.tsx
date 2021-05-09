import { useContext } from "react";
import styled from "styled-components";
import { ListNone } from "../../style/style";
import { MovieListContext } from "../movie-list/MovieList";

const Grid = styled(ListNone)<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${(props) => 70 / props.columns}rem, 100%), 1fr)
  );
  gap: 1rem;
`;

const MovieListGrid: React.FC = () => {
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
    <Grid aria-label="movies list" columns={rowCount}>
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
