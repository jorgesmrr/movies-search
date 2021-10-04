import Link from "next/link";

export interface MovieImagesTypeNavProps {
  movieId: number;
}

const MovieImagesTypeNav: React.FC<MovieImagesTypeNavProps> = ({ movieId }) => {
  return (
    <>
      <Link href={`/movie/images?id=${movieId}&type=backdrop`}>Backdrops</Link>
      <Link href={`/movie/images?id=${movieId}&type=poster`}>Posters</Link>
      <Link href={`/movie/images?id=${movieId}&type=logo`}>Logos</Link>
    </>
  );
};

export default MovieImagesTypeNav;
