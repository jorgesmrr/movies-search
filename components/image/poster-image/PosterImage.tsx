import { PosterSizes } from "../../../network/costants";
import { getPosterPath } from "../../../network/helpers";
import { RoundedImage, RoundedImageProps } from "../../style/style";

export interface PosterImageProps {
  fileName: string;
  size: PosterSizes;
}

const PosterImage: React.FC<RoundedImageProps & PosterImageProps> = ({
  fileName,
  size,
  height,
  shadowLevel,
}) => {
  return (
    <RoundedImage
      src={getPosterPath(fileName, size)}
      height={height}
      shadowLevel={shadowLevel}
    />
  );
};

export default PosterImage;
