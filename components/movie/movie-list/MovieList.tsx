import styled from "styled-components";
import Movie from "../../../models/Movie";
import { ListNone } from "../../style/style";
import MovieListItem from "../movie-list-item/MovieListItem";

export interface MovieListProps {
  isLoading: boolean;
  error: boolean;
  movies?: Movie[];
}

const List = styled(ListNone)`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

const MovieList: React.FC<MovieListProps> = ({ isLoading, movies, error }) => {
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
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </List>
    );
  }

  return null;
};

export default MovieList;
