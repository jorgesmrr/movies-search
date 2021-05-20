import styled from "styled-components";
import MovieImageType from "../../../models/MovieImageType";
import { FixedAspect, scalableBorder } from "../../style/style";

interface PlaceholderProps {
  rounded?: boolean;
  shadowLevel?: number;
}

const Placeholder = styled(FixedAspect)<PlaceholderProps>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme, rounded }) => rounded && theme.radius};
  box-shadow: ${({ theme, shadowLevel }) =>
    shadowLevel && theme.shadow[shadowLevel]};
  background-color: ${({ theme }) => theme.color.neutral.darker};
  ${({ theme }) => scalableBorder(theme, { parentSelector: `a` })}
`;

interface MoviePlaceholderProps extends PlaceholderProps {
  type: MovieImageType;
}

const MovieImagePlaceholder: React.FC<MoviePlaceholderProps> = ({
  type,
  rounded,
  shadowLevel,
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
    <Placeholder
      data-testid={testId}
      heightWidthRatio={heightWidthRatio}
      rounded={rounded}
      shadowLevel={shadowLevel}
    >
      {children}
    </Placeholder>
  );
};

export default MovieImagePlaceholder;
