import styled from "styled-components";
import { easedDarkGradient } from "../../style/style";

export const ImageWrapper = styled.div`
  display: block;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Title = styled.p`
  font-size: 1.125rem;
  text-transform: uppercase;
  padding: 0 ${({ theme }) => theme.dimensions.radius};
  margin-top: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BackdropTitle = styled(Title)`
  position: absolute;
  left: 0;
  bottom: 1rem;
  margin: 0;
`;

export const BackdropOverlay = styled.div`
  position: absolute;
  top: 35%;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${easedDarkGradient("top", 3.9)};
`;
