import styled from "styled-components";
import { FixedAspect, scalableBorder } from "../../style/style";

export interface PlaceholderProps {
  rounded?: boolean;
  shadowLevel?: number;
}

export const Placeholder = styled(FixedAspect)<PlaceholderProps>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme, rounded }) => rounded && theme.dimensions.radius};
  box-shadow: ${({ theme, shadowLevel }) =>
    shadowLevel && theme.shadow[shadowLevel]};
  background-color: ${({ theme }) => theme.color.neutral.darker};
  ${({ theme }) => scalableBorder(theme, { parentSelector: `a` })}
`;
