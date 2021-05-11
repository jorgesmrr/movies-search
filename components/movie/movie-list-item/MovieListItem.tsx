import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import MovieImagePlaceholder from "../movie-image-placeholder/MovieImagePlaceholder";
import { easedDarkGradient } from "../../style/style";
import MovieImage from "../movie-image/MovieImage";

const RoundedContainer = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow[2]};
  overflow: hidden;
`;

const StyledLink = styled.a`
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
  padding: 0 ${(props) => props.theme.radius};
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
  size: PosterSizes | BackdropSizes;
  movie?: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  isLoading,
  imageType,
  size,
  movie,
}) => {
  if (!isLoading && !movie) {
    return <div>Error</div>; // TODO style this
  }

  let renderedContent: React.ReactElement = null;

  if (!isLoading && movie) {
    const imagePath =
      imageType === MovieImageType.Backdrop ? movie.backdrop : movie.poster;

    renderedContent = (
      <Link href={`/movie?id=${movie.id}`}>
        <StyledLink>
          <MovieImage
            type={imageType}
            path={imagePath}
            size={size}
            height="100%"
          />
          {imageType === MovieImageType.Backdrop && (
            <>
              <BackdropOverlay />
              <BackdropTitle>{movie.title}</BackdropTitle>
            </>
          )}
        </StyledLink>
      </Link>
    );
  }

  return (
    <div>
      <RoundedContainer>
        <MovieImagePlaceholder type={imageType}>
          {renderedContent}
        </MovieImagePlaceholder>
      </RoundedContainer>
      {movie && imageType === MovieImageType.Poster && (
        <Title>{movie.title}</Title>
      )}
    </div>
  );
};

export default MovieListItem;
