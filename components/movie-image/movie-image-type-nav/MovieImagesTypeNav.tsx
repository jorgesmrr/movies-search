import Link from "next/link";
import ImageType from "../../../models/ImageType";

export interface MovieImagesTypeNavProps {
  movieId: number;
}

const MovieImagesTypeNav: React.FC<MovieImagesTypeNavProps> = ({ movieId }) => {
  return (
    <>
      <Link href={`/movie/images?id=${movieId}&type=${ImageType.Backdrop}`}>
        Backdrops
      </Link>
      <Link href={`/movie/images?id=${movieId}&type=${ImageType.Poster}`}>
        Posters
      </Link>
      <Link href={`/movie/images?id=${movieId}&type=${ImageType.Logo}`}>
        Logos
      </Link>
    </>
  );
};

export default MovieImagesTypeNav;
