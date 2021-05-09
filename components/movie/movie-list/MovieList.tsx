import styled from "styled-components";
import Movie from "../../../models/Movie";
import MovieListItemFormat from "../../../models/MovieListItemFormat";
import { ListNone } from "../../style/style";
import MovieListItem from "../movie-list-item/MovieListItem";

const List = styled(ListNone)`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

const ListItem = styled.li<{ maxWidth: number }>`
  flex: 1 0 ${(props) => props.maxWidth}%;
  min-width: 92px;
  max-width: ${(props) => props.maxWidth}%;
  cursor: pointer;
`;

export interface MovieListProps {
  isLoading: boolean;
  error: boolean;
  movies?: Movie[];
  format: MovieListItemFormat;
  count: number;
  rowCount?: number;
}

const MovieList: React.FC<MovieListProps> = ({
  isLoading,
  movies,
  error,
  format,
  count,
  rowCount = count,
}) => {
  if (error || (!isLoading && !movies)) {
    return <div>Error!</div>;
  }

  const adjustedCount = movies ? Math.min(movies.length, count) : count;

  return (
    <List aria-label="movies list">
      {[...new Array(adjustedCount)].map((_, index) => {
        const movie = !isLoading ? movies[index] : null;

        return (
          <ListItem
            key={movie?.id || index}
            aria-label={movie?.title}
            maxWidth={(1 / rowCount) * 100}
          >
            <MovieListItem
              isLoading={isLoading}
              movie={movie}
              format={format}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default MovieList;
