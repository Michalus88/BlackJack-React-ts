import React, { FC } from "react";
import { Wrapper, Field, MinVal, MaxVal, Slider } from "./rangeSlider.styled";

interface Props {
  value: number;
  setValue: (value: number) => void;
  maxRange: number;
}

export const RangeSlider: FC<Props> = ({ value = 0, setValue, maxRange }) => {
  return (
    <Wrapper>
      <Field>
        <MinVal>0$</MinVal>
        <Slider
          onChange={(e) => setValue(Number(e.target.value))}
          min="0"
          max={maxRange}
          value={value}
          step="1"
        />
        <MaxVal>{maxRange}$</MaxVal>
      </Field>
    </Wrapper>
  );
};
