import { MovieImage } from "../../../models/MovieImages";
import { LogoSizes } from "../../../network/constants";
import * as S from "./MovieLogosList.styles";

export interface MovieLogosListProps {
  movieTitle: string;
  images: MovieImage[];
}

const MovieLogosList: React.FC<MovieLogosListProps> = ({
  movieTitle,
  images,
}) => {
  return (
    <S.List>
      {images.map((image) => (
        <S.ListItem key={image.path}>
          <S.AspectSvg
            xmlns="http://www.w3.org/2000/svg"
            height="100"
            width={(image.width / image.height) * 100}
          />
          <S.ImageWrapper>
            <S.Image
              path={image.path}
              sizes={{ xs: LogoSizes.Regular }}
              title={movieTitle}
            />
          </S.ImageWrapper>
        </S.ListItem>
      ))}
    </S.List>
  );
};

export default MovieLogosList;
