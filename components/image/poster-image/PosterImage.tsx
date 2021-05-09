import styled from "styled-components";
import { PosterSizes } from "../../../network/costants";
import { getPosterPath } from "../../../network/helpers";

export interface PosterImageProps {
  fileName: string;
  size: PosterSizes;
}

const RoundedImage = styled.img`
  border-radius: ${(props) => props.theme.radius};
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const PosterImage: React.FC<PosterImageProps> = ({ fileName, size }) => {
  return <RoundedImage src={getPosterPath(fileName, size)} />;
};

export default PosterImage;
