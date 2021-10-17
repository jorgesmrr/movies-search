import styled from "styled-components";
import OriginalResponsiveImage from "../../responsive-image/ResponsiveImage";
import { transition } from "../../style/style";

export interface ImageProps {
  $imagePosition?: string;
  $objectFit?: "cover" | "contain";
  $inset?: boolean;
}

export const ResponsiveImage = styled(OriginalResponsiveImage)<ImageProps>`
  display: block;
  opacity: 0;
  ${transition("opacity", 250)}
  ${({ $imagePosition }) =>
    $imagePosition && `object-position: ${$imagePosition}`};
  ${({ $objectFit }) => $objectFit && `object-fit: ${$objectFit}`};
  ${({ $inset }) =>
    $inset &&
    `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%`};
`;
