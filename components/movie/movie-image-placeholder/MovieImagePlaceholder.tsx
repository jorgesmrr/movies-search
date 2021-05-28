import MovieImageType from "../../../models/MovieImageType";
import * as S from "./MovieImagePlaceholder.styles";

interface MoviePlaceholderProps extends S.PlaceholderProps {
  type: MovieImageType;
}

const MovieImagePlaceholder: React.FC<MoviePlaceholderProps> = ({
  type,
  rounded,
  shadowLevel,
  children,
}) => {
  let heightWidthRatio;
  let testId;

  switch (type) {
    case MovieImageType.Backdrop:
      heightWidthRatio = 9 / 16;
      testId = "backdrop-placeholder";
      break;
    case MovieImageType.Poster:
      heightWidthRatio = 1.5;
      testId = "poster-placeholder";
      break;
    default:
      return null;
  }

  return (
    <S.Placeholder
      data-testid={testId}
      heightWidthRatio={heightWidthRatio}
      rounded={rounded}
      shadowLevel={shadowLevel}
    >
      {children}
    </S.Placeholder>
  );
};

export default MovieImagePlaceholder;
