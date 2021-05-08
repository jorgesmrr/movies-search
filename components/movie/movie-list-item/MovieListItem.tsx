import Link from "next/link";
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
      <Link href={`/movie?id=${movie.id}`}>
        <a>
          <PosterImage fileName={movie.poster} tiny />
        </a>
      </Link>
    </ListItem>
  );
};

export default MovieListItem;
