import React from "react";
import styled from "styled-components";
import ResponsiveProperty from "../../../models/ResposiveProperty";
import { ListNone, transition } from "../../style/style";

const FlexWrapper = styled.div<{ shadowOverflow?: ShadowOverflow }>`
  overflow-x: hidden;
  ${({ shadowOverflow }) =>
    shadowOverflow
      ? `
        width: calc(100% + 2 * shadowOverflow.x);
        padding: ${shadowOverflow.y} ${shadowOverflow.x};
        margin: -${shadowOverflow.y} -${shadowOverflow.x};
      `
      : "width: 100%;"}
`;

const FlexContainer = styled(ListNone)<{
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

const FlexItem = styled.li<{
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

export interface SliderProps<T> {
  data: T[];
  renderChild: (child: T) => React.ReactElement;
  "aria-label": string;
  itemsPerSlide: ResponsiveProperty<number>;
  activeSlide?: number;
  gap?: number;
  itemLabelGetter?: (item: T) => string;
  shadowOverflow?: ShadowOverflow;
}

interface ShadowOverflow {
  x: string;
  y: string;
}

function Slider<T>({
  data,
  itemsPerSlide,
  activeSlide = 0,
  gap = 1,
  renderChild,
  "aria-label": ariaLabel,
  itemLabelGetter,
  shadowOverflow,
}: SliderProps<T>): React.ReactElement {
  const itemSizes = {
    xs: `${(1 / itemsPerSlide.xs) * 100}%`,
    sm: `${(1 / itemsPerSlide.sm) * 100}%`,
    md: `${(1 / itemsPerSlide.md) * 100}%`,
  };

  return (
    <FlexWrapper shadowOverflow={shadowOverflow}>
      <FlexContainer
        aria-label={ariaLabel}
        translateX={activeSlide * -100}
        extraWidth={gap}
      >
        {data.map((item, index) => (
          <FlexItem
            key={index}
            sizes={itemSizes}
            paddingRight={gap}
            aria-label={itemLabelGetter && itemLabelGetter(item)}
          >
            {renderChild(item)}
          </FlexItem>
        ))}
      </FlexContainer>
    </FlexWrapper>
  );
}

export default Slider;
