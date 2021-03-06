import styled from "styled-components";
import { FixedAspect, scalableBorder } from "../../style/style";

export interface PlaceholderProps {
  rounded?: boolean;
  shadowLevel?: number;
  objectFit?: "cover" | "contain";
  persistentBorder?: boolean;
}

export const Placeholder = styled(FixedAspect)<PlaceholderProps>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme, rounded }) => rounded && theme.dimensions.radius};
  box-shadow: ${({ theme, shadowLevel }) =>
    shadowLevel !== undefined && theme.shadow[shadowLevel]};
  background-color: ${({ theme }) => theme.color.neutral.darker};
  ${({ theme, persistentBorder: persistBorder }) =>
    scalableBorder(theme, {
      parentSelector: `a`,
      states: persistBorder ? [] : null,
    })}

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: ${({ objectFit = "cover" }) => objectFit};
  }
`;
