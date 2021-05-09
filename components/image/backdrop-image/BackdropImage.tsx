import styled from "styled-components";
import { BackdropSizes } from "../../../network/costants";
import { getBackdropPath } from "../../../network/helpers";

export interface BackdropImageProps {
  fileName: string;
  size: BackdropSizes;
}

const RoundedImage = styled.img`
  border-radius: ${(props) => props.theme.radius};
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const BackdropImage: React.FC<BackdropImageProps> = ({ fileName, size }) => {
  return <RoundedImage src={getBackdropPath(fileName, size)} />;
};

export default BackdropImage;
