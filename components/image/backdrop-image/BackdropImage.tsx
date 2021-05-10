import { BackdropSizes } from "../../../network/costants";
import { getBackdropPath } from "../../../network/helpers";
import { RoundedImage, RoundedImageProps } from "../../style/style";

export interface BackdropImageProps {
  fileName: string;
  size: BackdropSizes;
}

const BackdropImage: React.FC<RoundedImageProps & BackdropImageProps> = ({
  fileName,
  size,
  height,
}) => {
  return <RoundedImage src={getBackdropPath(fileName, size)} height={height} />;
};

export default BackdropImage;
