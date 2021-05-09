import Link from "next/link";
import Movie from "../../../models/Movie";
import MovieListItemFormat from "../../../models/MovieListItemFormat";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import BackdropImage from "../../image/backdrop-image/BackdropImage";
import PosterImage from "../../image/poster-image/PosterImage";
import BackdropPlaceholder from "../../layout/placeholder/BackdropPlaceholder";
import PosterPlaceholder from "../../layout/placeholder/PosterPlaceholder";

export interface MovieListItemProps {
  isLoading: boolean;
  format: MovieListItemFormat;
  size: PosterSizes | BackdropSizes;
  movie?: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  isLoading,
  format,
  size,
  movie,
}) => {
  if (isLoading) {
    return format === MovieListItemFormat.Backdrop ? (
      <BackdropPlaceholder />
    ) : (
      <PosterPlaceholder />
    );
  }

  if (movie) {
    return (
      <div key={movie.id}>
        <Link href={`/movie?id=${movie.id}`}>
          <a>
            {format === MovieListItemFormat.Backdrop ? (
              <BackdropImage
                fileName={movie.backdrop}
                size={size as BackdropSizes}
              />
            ) : (
              <PosterImage fileName={movie.poster} size={size as PosterSizes} />
            )}
          </a>
        </Link>
      </div>
    );
  }

  return <div>Error</div>; // TODO style this
};

export default MovieListItem;
