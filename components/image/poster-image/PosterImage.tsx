import styled from "styled-components";
import { getSmallPosterPath } from "../../../network/helpers";

export interface PosterImageProps {
  fileName: string;
  tiny?: boolean;
}

const RoundedImage = styled.img`
  border-radius: ${(props) => props.theme.radius};
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const PosterImage: React.FC<PosterImageProps> = ({ fileName, tiny }) => {
  let source = null;

  if (tiny) {
    source = getSmallPosterPath(fileName);
  }

  return source && <RoundedImage src={source} />;
};

export default PosterImage;
