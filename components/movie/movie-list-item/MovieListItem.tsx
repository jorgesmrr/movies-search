import Link from "next/link";
import styled from "styled-components";
import Movie from "../../../models/Movie";
import MovieImageType from "../../../models/MovieImageType";
import { BackdropSizes, PosterSizes } from "../../../network/costants";
import BackdropPlaceholder from "../../layout/placeholder/BackdropPlaceholder";
import PosterPlaceholder from "../../layout/placeholder/PosterPlaceholder";
import { easedDarkGradient } from "../../style/style";
import MovieImage from "../movie-image/MovieImage";

const RoundedContainer = styled.div`
  border-radius: ${(props) => props.theme.radius};
  overflow: hidden;
`;

const StyledLink = styled.a`
  position: relative;
  display: block;
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
  if (isLoading) {
    return imageType === MovieImageType.Backdrop ? (
      <BackdropPlaceholder />
    ) : (
      <PosterPlaceholder />
    );
  }

  if (movie) {
    const imagePath =
      imageType === MovieImageType.Backdrop ? movie.backdrop : movie.poster;

    return (
      <RoundedContainer key={movie.id}>
        <Link href={`/movie?id=${movie.id}`}>
          <StyledLink>
            <MovieImage
              type={imageType}
              path={imagePath}
              size={size}
              shadowLevel={2}
            />
            {imageType === MovieImageType.Backdrop ? (
              <>
                <BackdropOverlay />
                <BackdropTitle>{movie.title}</BackdropTitle>
              </>
            ) : (
              <Title>{movie.title}</Title>
            )}
          </StyledLink>
        </Link>
      </RoundedContainer>
    );
  }

  return <div>Error</div>; // TODO style this
};

export default MovieListItem;
