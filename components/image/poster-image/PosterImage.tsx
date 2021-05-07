import { getSmallPosterPath } from "../../../network/helpers";

export interface PosterImageProps {
  fileName: string;
  tiny?: boolean;
}

const PosterImage: React.FC<PosterImageProps> = ({ fileName, tiny }) => {
  let source = null;

  if (tiny) {
    source = getSmallPosterPath(fileName);
  }

  return source && <img src={source} />;
};

export default PosterImage;
