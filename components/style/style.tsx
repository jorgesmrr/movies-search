import styled from "styled-components";

export const ListNone = styled.ul`
  list-style: none;
  padding-left: 0;
  padding-start: 0;
`;

const headingRules = `
  font-weight: 900;
  text-transform: uppercase;
  font-family: "Source Sans Pro", sans-serif;
  `;

export const Heading1 = styled.h1`
  ${headingRules}
  font-size: ${(props) => props.theme.fontSize.mobile[5]}rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: ${(props) => props.theme.fontSize.desktop[5]}rem;
  }
`;

export const Heading2 = styled.h2`
  ${headingRules}
  font-size: ${(props) => props.theme.fontSize.mobile[4]}rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: ${(props) => props.theme.fontSize.desktop[4]}rem;
  }
`;

export const Subtitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.mobile[2]}rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: ${(props) => props.theme.fontSize.desktop[2]}rem;
  }
`;

export interface RoundedImageProps {
  height?: string;
  shadowLevel?: number;
}

export const RoundedImage = styled.img<RoundedImageProps>`
  display: block;
  border-radius: ${(props) => props.theme.radius};
  width: 100%;
  height: ${(props) => props.height || "auto"};
  overflow: hidden;
  object-fit: cover;
  ${(props) =>
    props.shadowLevel
      ? `box-shadow: ${props.theme.shadow[props.shadowLevel]}`
      : ""}
`;

export const RegularPageContent = styled.div`
  margin-top: 7rem;
`;

export const easedDarkGradient: (
  direction: "top" | "right" | "bottom" | "left",
  lightness?: number
) => string = (direction, lightness = 0): string => `
linear-gradient(
  to ${direction},
  hsl(0, 0%, ${lightness}%) 0%,
  hsla(0, 0%, ${lightness}%, 0.987) 8.1%,
  hsla(0, 0%, ${lightness}%, 0.951) 15.5%,
  hsla(0, 0%, ${lightness}%, 0.896) 22.5%,
  hsla(0, 0%, ${lightness}%, 0.825) 29%,
  hsla(0, 0%, ${lightness}%, 0.741) 35.3%,
  hsla(0, 0%, ${lightness}%, 0.648) 41.2%,
  hsla(0, 0%, ${lightness}%, 0.55) 47.1%,
  hsla(0, 0%, ${lightness}%, 0.45) 52.9%,
  hsla(0, 0%, ${lightness}%, 0.352) 58.8%,
  hsla(0, 0%, ${lightness}%, 0.259) 64.7%,
  hsla(0, 0%, ${lightness}%, 0.175) 71%,
  hsla(0, 0%, ${lightness}%, 0.104) 77.5%,
  hsla(0, 0%, ${lightness}%, 0.049) 84.5%,
  hsla(0, 0%, ${lightness}%, 0.013) 91.9%,
  hsla(0, 0%, ${lightness}%, 0) 100%
);
`;
