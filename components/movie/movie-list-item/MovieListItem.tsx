import Movie from "../../../models/Movie";

export interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <li key={movie.id} aria-label={movie.title}>
      {movie.title}
    </li>
  );
};

export default MovieListItem;
