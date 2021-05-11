import styled from "styled-components";
import MovieImageType from "../../../models/MovieImageType";
import { FixedAspect } from "../../style/style";

const Placeholder = styled(FixedAspect)`
  background-color: ${(props) => props.theme.color.neutral.darker};
`;

interface MoviePlaceholderProps {
  type: MovieImageType;
}

const MovieImagePlaceholder: React.FC<MoviePlaceholderProps> = ({
  type,
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
    <Placeholder data-testid={testId} heightWidthRatio={heightWidthRatio}>
      {children}
    </Placeholder>
  );
};

export default MovieImagePlaceholder;
