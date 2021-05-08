import styled from "styled-components";
import Movie from "../../../models/Movie";
import PosterImage from "../../image/poster-image/PosterImage";

export interface MovieListItemProps {
  movie: Movie;
}

const ListItem = styled.li`
  flex: 1 0 10%;
  min-width: 92px;
  max-width: 10%;
  cursor: pointer;
`;

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <ListItem key={movie.id} aria-label={movie.title}>
      <PosterImage fileName={movie.poster} tiny />
    </ListItem>
  );
};

export default MovieListItem;
