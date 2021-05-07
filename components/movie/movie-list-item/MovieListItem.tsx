import Movie from "../../../models/Movie";
import PosterImage from "../../image/poster-image/PosterImage";

export interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <li key={movie.id} aria-label={movie.title}>
      <PosterImage fileName={movie.poster} tiny />
    </li>
  );
};

export default MovieListItem;
