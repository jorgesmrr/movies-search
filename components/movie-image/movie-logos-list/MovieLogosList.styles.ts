import styled from "styled-components";
import TmdbImage from "../../image/tmdb-image/TmdbImage";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  position: relative;
  display: inline-block;
  height: 10rem;
`;

export const AspectSvg = styled.svg`
  width: auto;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Image = styled(TmdbImage)`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
