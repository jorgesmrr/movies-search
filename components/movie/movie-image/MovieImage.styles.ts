import styled from "styled-components";
import OriginalResponsiveImage from "../../layout/responsive-image/ResponsiveImage";

export interface ImageProps {
  $imagePosition?: string;
}

export const ResponsiveImage = styled(OriginalResponsiveImage)<ImageProps>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ $imagePosition }) =>
    $imagePosition && `object-position: ${$imagePosition}`};
`;
