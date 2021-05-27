import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import MovieImagePlaceholder from "../movie-image-placeholder/MovieImagePlaceholder";
import { Alert, easedDarkGradient } from "../../style/style";
import MovieImage from "../movie-image/MovieImage";
import ResponsiveProperty from "../../../models/ResponsiveProperty";

const ImageWrapper = styled.div`
  display: block;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-size: 1.125rem;
  text-transform: uppercase;
  padding: 0 ${({ theme }) => theme.radius};
  margin-top: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BackdropTitle = styled(Title)`
  position: absolute;
  left: 0;
  bottom: 1rem;
  margin: 0;
`;

const BackdropOverlay = styled.div`
  position: absolute;
  top: 35%;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${easedDarkGradient("top", 3.9)};
`;

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
          <Title>
            <wbr />
            <br />
            <wbr />
          </Title>
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
          <ImageWrapper>
            <MovieImage title={movie.title} path={imagePath} sizes={sizes} />
            {imageType === MovieImageType.Backdrop && (
              <>
                <BackdropOverlay />
                <BackdropTitle>{movie.title}</BackdropTitle>
              </>
            )}
          </ImageWrapper>
        </MovieImagePlaceholder>
        {imageType === MovieImageType.Poster && <Title>{movie.title}</Title>}
      </a>
    </Link>
  );
};

export default MovieListItem;
