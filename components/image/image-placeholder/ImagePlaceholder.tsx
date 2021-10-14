import ImageType from "../../../models/ImageType";
import * as S from "./ImagePlaceholder.styles";

interface PlaceholderProps extends S.PlaceholderProps {
  type: ImageType;
}

const ImagePlaceholder: React.FC<PlaceholderProps> = ({
  type,
  rounded,
  shadowLevel,
  children,
}) => {
  let heightWidthRatio;
  let testId;

  switch (type) {
    case ImageType.Logo:
      heightWidthRatio = 9 / 16;
      testId = "logo-placeholder";
      break;
    case ImageType.Backdrop:
      heightWidthRatio = 9 / 16;
      testId = "backdrop-placeholder";
      break;
    case ImageType.Poster:
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
      objectFit={type == ImageType.Logo ? "contain" : "cover"}
    >
      {children}
    </S.Placeholder>
  );
};

export default ImagePlaceholder;
