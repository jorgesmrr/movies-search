import React from "react";
import styled from "styled-components";
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
  width: calc(100% + ${(props) => props.extraWidth}rem);
  transform: translateX(${(props) => props.translateX}%);
  ${transition("transform", 500)}
`;

const FlexItem = styled.li<{ maxWidth: number; paddingRight: number }>`
  flex: 1 0 ${(props) => props.maxWidth}%;
  width: 100%;
  max-width: ${(props) => props.maxWidth}%;
  padding-right: ${(props) => props.paddingRight}rem;
`;

export interface SliderProps<T> {
  data: T[];
  renderChild: (child: T) => React.ReactElement;
  "aria-label": string;
  itemsPerSlide?: number;
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
  itemsPerSlide = 1,
  activeSlide = 0,
  gap = 1,
  renderChild,
  "aria-label": ariaLabel,
  itemLabelGetter,
  shadowOverflow,
}: SliderProps<T>): React.ReactElement {
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
            maxWidth={(1 / itemsPerSlide) * 100}
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
