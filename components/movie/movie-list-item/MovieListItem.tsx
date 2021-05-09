import Link from "next/link";
import Movie from "../../../models/Movie";
import MovieListItemFormat from "../../../models/MovieListItemFormat";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import BackdropImage from "../../image/backdrop-image/BackdropImage";
import PosterImage from "../../image/poster-image/PosterImage";
import BackdropPlaceholder from "../../placeholder/BackdropPlaceholder";
import PosterPlaceholder from "../../placeholder/PosterPlaceholder";

export interface MovieListItemProps {
  isLoading: boolean;
  format: MovieListItemFormat;
  movie?: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  isLoading,
  format,
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
                size={BackdropSizes.Small}
              />
            ) : (
              <PosterImage fileName={movie.poster} size={PosterSizes.Tiny} />
            )}
          </a>
        </Link>
      </div>
    );
  }

  return <div>Error</div>; // TODO style this
};

export default MovieListItem;
