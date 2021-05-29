import React from "react";
import ResponsiveProperty from "../../models/ResponsiveProperty";
import * as S from "./Slider.styles";

export interface SliderProps<T> {
  data: T[];
  renderChild: (child: T) => React.ReactElement;
  "aria-label": string;
  itemsPerSlide: ResponsiveProperty<number>;
  activeSlide?: number;
  gap?: number;
  itemLabelGetter?: (item: T) => string;
  shadowOverflow?: S.ShadowOverflow;
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
    <S.Wrapper shadowOverflow={shadowOverflow}>
      <S.Container
        aria-label={ariaLabel}
        translateX={activeSlide * -100}
        extraWidth={gap}
      >
        {data.map((item, index) => (
          <S.Item
            key={index}
            sizes={itemSizes}
            paddingRight={gap}
            aria-label={itemLabelGetter && itemLabelGetter(item)}
          >
            {renderChild(item)}
          </S.Item>
        ))}
      </S.Container>
    </S.Wrapper>
  );
}

export default Slider;
