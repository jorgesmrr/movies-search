import { BackdropSizes } from "../../../network/costants";
import { getBackdropPath } from "../../../network/helpers";
import { RoundedImage, RoundedImageProps } from "../../style/style";

export interface BackdropImageProps {
  fileName: string;
  size: BackdropSizes;
}

// TODO merge with  PosterImage
const BackdropImage: React.FC<RoundedImageProps & BackdropImageProps> = ({
  fileName,
  size,
  height,
  shadowLevel,
}) => {
  return (
    <RoundedImage
      src={getBackdropPath(fileName, size)}
      height={height}
      shadowLevel={shadowLevel}
    />
  );
};

export default BackdropImage;
