import React from "react";
import styled from "styled-components";
import { ListNone } from "../../style/style";

const FlexWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const FlexContainer = styled(ListNone)<{
  translateX: number;
  extraWidth: number;
}>`
  display: flex;
  width: calc(100% + ${(props) => props.extraWidth}rem);
  transform: translateX(${(props) => props.translateX}%);
`;

const FlexItem = styled.li<{ maxWidth: number; paddingRight: number }>`
  flex: 1 0 ${(props) => props.maxWidth}%;
  width: 100%;
  max-width: ${(props) => props.maxWidth}%;
  cursor: pointer;
  padding-right: ${(props) => props.paddingRight}rem;
`;

export interface SliderProps<T> {
  data: T[];
  itemsPerSlide?: number;
  activeSlide?: number;
  gap?: number;
  renderChild: (child: T) => React.ReactElement;
}

function Slider<T>({
  data,
  itemsPerSlide = 1,
  activeSlide = 0,
  gap = 1,
  renderChild,
}: SliderProps<T>): React.ReactElement {
  return (
    <FlexWrapper>
      <FlexContainer translateX={activeSlide * -100} extraWidth={gap}>
        {data.map((item, index) => (
          <FlexItem
            key={index}
            maxWidth={(1 / itemsPerSlide) * 100}
            paddingRight={gap}
          >
            {renderChild(item)}
          </FlexItem>
        ))}
      </FlexContainer>
    </FlexWrapper>
  );
}

export default Slider;