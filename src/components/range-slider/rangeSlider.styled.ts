import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 40px;
  width: 380px;
  background: black;
  border: 1px solid green;
  padding: 0 70px 0 45px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
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
  background: green;
  border-radius: 5px;
  outline: none;
  border: none;
  z-index: 100;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.lightgreen};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: red;
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
    background: red;
    border-radius: 50%;
    background: #664aff;
    border: 1px solid #664aff;
    cursor: pointer;
  }
`;
