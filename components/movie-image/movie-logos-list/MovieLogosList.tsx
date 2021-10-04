import { MovieImage } from "../../../models/MovieImages";
import { BackdropSizes } from "../../../network/constants";
import * as S from "./MovieLogosList.styles";

export interface MovieLogosListProps {
  images: MovieImage[];
}

const MovieLogosList: React.FC<MovieLogosListProps> = ({ images }) => {
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
              sizes={{ xs: BackdropSizes.Regular }}
              title="teste"
            />
          </S.ImageWrapper>
        </S.ListItem>
      ))}
    </S.List>
  );
};

export default MovieLogosList;
