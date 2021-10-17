import Link from "next/link";
import Movie from "../../../models/Movie";
import * as S from "./MovieBackLink.styles";

export interface MovieBackLinkProps {
  movie: Movie;
}

const MovieBackLink = ({ movie }) => {
  return (
    <Link href={`/movie?id=${movie.id}`}>
      <a>
        <S.LinkText>
          {movie.title}
          {movie.releaseDate && ` (${movie.releaseDate.getFullYear()})`}
        </S.LinkText>
      </a>
    </Link>
  );
};

export default MovieBackLink;
