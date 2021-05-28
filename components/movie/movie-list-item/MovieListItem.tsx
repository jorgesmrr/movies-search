import Link from "next/link";
import React from "react";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import MovieImagePlaceholder from "../movie-image-placeholder/MovieImagePlaceholder";
import { Alert } from "../../style/style";
import MovieImage from "../movie-image/MovieImage";
import ResponsiveProperty from "../../../models/ResponsiveProperty";
import * as S from "./MovieListItem.styles";

export interface MovieListItemProps {
  isLoading: boolean;
  imageType: MovieImageType;
  sizes: ResponsiveProperty<PosterSizes | BackdropSizes>;
  movie?: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  isLoading,
  imageType,
  sizes,
  movie,
}) => {
  if (!isLoading && !movie) {
    return <Alert>Failed to load</Alert>;
  }

  if (isLoading) {
    return (
      <div>
        <MovieImagePlaceholder rounded type={imageType} shadowLevel={2} />
        {imageType === MovieImageType.Poster && (
          <S.Title>
            <wbr />
            <br />
            <wbr />
          </S.Title>
        )}
      </div>
    );
  }

  const imagePath =
    imageType === MovieImageType.Backdrop ? movie.backdrop : movie.poster;

  return (
    <Link href={`/movie?id=${movie.id}`}>
      <a>
        <MovieImagePlaceholder rounded type={imageType} shadowLevel={2}>
          <S.ImageWrapper>
            <MovieImage title={movie.title} path={imagePath} sizes={sizes} />
            {imageType === MovieImageType.Backdrop && (
              <>
                <S.BackdropOverlay />
                <S.BackdropTitle>{movie.title}</S.BackdropTitle>
              </>
            )}
          </S.ImageWrapper>
        </MovieImagePlaceholder>
        {imageType === MovieImageType.Poster && (
          <S.Title>{movie.title}</S.Title>
        )}
      </a>
    </Link>
  );
};

export default MovieListItem;
