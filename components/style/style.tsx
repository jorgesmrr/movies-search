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
  font-size: ${(props) => props.theme.fontSize.mobile[3]}
`;

export const Heading2 = styled.h2`
  ${headingRules}
  font-size: ${(props) => props.theme.fontSize.mobile[4]}rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: ${(props) => props.theme.fontSize.desktop[4]}rem;
  }
`;
