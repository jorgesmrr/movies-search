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
}) => {
  return <RoundedImage src={getPosterPath(fileName, size)} height={height} />;
};

export default PosterImage;
