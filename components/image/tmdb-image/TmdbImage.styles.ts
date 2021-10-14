import styled from "styled-components";
import OriginalResponsiveImage from "../../responsive-image/ResponsiveImage";
import { transition } from "../../style/style";

export interface ImageProps {
  $imagePosition?: string;
}

export const ResponsiveImage = styled(OriginalResponsiveImage)<ImageProps>`
  display: block;
  opacity: 0;
  ${transition("opacity", 250)}
  ${({ $imagePosition }) =>
    $imagePosition && `object-position: ${$imagePosition}`};
`;
