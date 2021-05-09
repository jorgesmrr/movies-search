import styled from "styled-components";
import Movie from "../../../models/Movie";
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
  rowCount?: number;
}

const MovieList: React.FC<MovieListProps> = ({
  isLoading,
  movies,
  error,
  rowCount = 10,
}) => {
  if (isLoading) {
    return <div data-testid="movie-list__spinner" />;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (movies) {
    return (
      <List aria-label="movies list">
        {movies.map((movie) => (
          <ListItem
            key={movie.id}
            aria-label={movie.title}
            maxWidth={(1 / rowCount) * 100}
          >
            <MovieListItem movie={movie} />
          </ListItem>
        ))}
      </List>
    );
  }

  return null;
};

export default MovieList;
