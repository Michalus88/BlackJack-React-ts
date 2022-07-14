import styled from "styled-components";
import { device, size } from "../../assets/style/breakPoints";

export const Wrapper = styled.div`
  margin-left: 40px;
  width: 380px;
  padding: 0 70px 0 45px;
  border: 1px solid green;
  background: black;
  @media ${device.md} {
    margin: 10px 0 0 0;
    width: 90%;
    height: 42px;
  }
  @media (max-height: ${size.sm}) and (orientation: landscape) {
    margin: 0;
    width: 40vw;
    height: 42px;
  }
`;

export const Field = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.md} {
    /* left: 0; */
  }
`;

const RangeVal = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
`;

export const MinVal = styled(RangeVal)`
  left: -25px;
`;

export const MaxVal = styled(RangeVal)`
  right: -50px;
`;

export const Slider = styled.input.attrs(() => ({
  type: "range",
}))`
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  border: none;
  border-radius: 5px;
  outline: none;
  background: green;
  z-index: 100;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.lightgreen};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: green;
    cursor: pointer;
    :hover {
      box-shadow: 1px -1px 15px 1px ${({ theme }) => theme.colors.lightgreen};
    }
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #664aff;
    border-radius: 50%;
    background: #664aff;
    cursor: pointer;
  }
`;
