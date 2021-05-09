import Link from "next/link";
import Movie from "../../../models/Movie";
import { PosterSizes } from "../../../network/costants";
import PosterImage from "../../image/poster-image/PosterImage";

export interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <div key={movie.id}>
      <Link href={`/movie?id=${movie.id}`}>
        <a>
          <PosterImage fileName={movie.poster} size={PosterSizes.Tiny} />
        </a>
      </Link>
    </div>
  );
};

export default MovieListItem;
