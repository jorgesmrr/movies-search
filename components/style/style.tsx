import styled, { DefaultTheme } from "styled-components";

export const ListNone = styled.ul`
  list-style: none;
`;

const headingRules = `
  font-weight: 900;
  text-transform: uppercase;
  font-family: "Source Sans Pro", sans-serif;
  `;

export const textSize = (theme: DefaultTheme, level: number): string => `
font-size: ${theme.fontSize.mobile[level]}rem;

@media (min-width: ${theme.breakpoints.sm}px) {
  font-size: ${theme.fontSize.desktop[level]}rem;
}
`;

export const TextSmall = styled.span`
  ${({ theme }) => textSize(theme, 0)}
`;

export const Heading1 = styled.h1`
  ${headingRules}
  ${({ theme }) => textSize(theme, 5)}
`;

export const Heading2 = styled.h2`
  ${headingRules}
  ${({ theme }) => textSize(theme, 4)}
`;

export const Subtitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  ${({ theme }) => textSize(theme, 2)}
`;

export interface RoundedImageProps {
  height?: string;
  shadowLevel?: number;
  imagePosition?: string;
}

export const RoundedImage = styled.img<RoundedImageProps>`
  display: block;
  border-radius: ${(props) => props.theme.radius};
  width: 100%;
  height: ${(props) => props.height || "auto"};
  overflow: hidden;
  object-fit: cover;
  ${(props) => `
    ${
      props.shadowLevel
        ? `box-shadow: ${props.theme.shadow[props.shadowLevel]};`
        : ""
    }
    ${props.imagePosition ? `object-position: ${props.imagePosition};` : ""}
    `}
`;

export const RegularPageContent = styled.div`
  margin-top: 7rem;
`;

export const FixedAspect = styled.div<{ heightWidthRatio: number }>`
  width: 100%;
  height: 0;
  padding-bottom: ${(props) => props.heightWidthRatio * 100}%;
  overflow: hidden;
`;

export const Card = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.color.neutral.darker};
  box-shadow: ${({ theme }) => theme.shadow[0]};
  border-radius: ${({ theme }) => theme.radius};
`;

export const Badge = styled.span`
  padding: 0.25em 0.75em;
  border: 1px solid ${({ theme }) => theme.color.neutral.lighter};
  border-radius: ${({ theme }) => theme.radius};
`;

export const Alert = styled.div`
  padding: 0.5rem 1rem;
  border: 2px solid #7f1d1d;
  border-radius: ${({ theme }) => theme.radius};
  background: #fca5a5;
  color: #7f1d1d;
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

export const transition = (
  property: string | string[],
  duration?: number
): string => {
  const t = (property: string, duration?: number) =>
    `${property} ${duration || 125}ms ease-in-out`;

  let value: string;
  if (Array.isArray(property)) {
    value = (property as string[]).map(t).join(", ");
  } else {
    value = t(property, duration);
  }

  return `transition: ${value};`;
};

export const scalableBorder: (
  theme: DefaultTheme,
  options?: { width?: string; states?: string[]; parentSelector?: string }
) => string = (theme, options): string => {
  const statesSelector = (options?.states || ["hover"])
    .map((state) => `${options?.parentSelector || "&"}:${state}`)
    .join(",");

  return `
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: ${theme.radius};
      border: 0 solid ${theme.color.accent.dark};
      pointer-events: none;
      ${transition("border-width")}
    }

    ${statesSelector} ${options?.parentSelector ? ` &` : ""} {
        &:after {
              border-width: ${options?.width || "4px"};
        }
      }
  `;
};
