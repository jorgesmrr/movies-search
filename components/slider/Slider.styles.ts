import styled from "styled-components";
import ResponsiveProperty from "../../models/ResponsiveProperty";
import { ListNone, transition } from "../style/style";

export interface ShadowOverflow {
  x: string;
  y: string;
}

export const Wrapper = styled.div<{ shadowOverflow?: ShadowOverflow }>`
  overflow-x: hidden;
  width: calc(100% + 2rem);
  padding: ${({ shadowOverflow }) => (shadowOverflow ? shadowOverflow.y : 0)}
    1rem;
  margin: -${({ shadowOverflow }) => (shadowOverflow ? shadowOverflow.y : 0)} -1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ shadowOverflow }) =>
      shadowOverflow
        ? `
        width: calc(100% + 2 * ${shadowOverflow.x});
        padding: ${shadowOverflow.y} ${shadowOverflow.x};
        margin: -${shadowOverflow.y} -${shadowOverflow.x};
      `
        : "padding: 0; margin: 0; width: 100%;"}
  }
`;

export const Container = styled(ListNone)<{
  translateX: number;
  extraWidth: number;
}>`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  overflow-x: auto;
  padding-left: 1rem;
  padding-bottom: 1rem;
  margin-left: -1rem;
  width: calc(100% + 2rem);

  &::after {
    content: "";
    flex: 0 0 1px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    overflow-x: visible;
    gap: 0;
    padding-left: 0;
    margin-left: 0;
    width: calc(100% + ${(props) => props.extraWidth}rem);
    transform: translateX(${(props) => props.translateX}%);
    ${transition("transform", 500)}

    &::after {
      content: none;
    }
  }
`;

export const Item = styled.li<{
  sizes: ResponsiveProperty<string>;
  paddingRight: number;
}>`
  flex: 0 0 calc(${(props) => props.sizes.xs} - 2rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex: 0 0 calc(${(props) => props.sizes.sm} - 2rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 0 0 ${(props) => props.sizes.md};
    width: 100%;
    padding-right: ${(props) => props.paddingRight}rem;
  }
`;
