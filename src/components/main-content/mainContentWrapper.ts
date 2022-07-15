import styled from "styled-components";
import { device, size } from "../../assets/style/breakPoints";

export const MainContentWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  @media ${device.md}, (max-height: ${size.sm}) {
    align-items: center;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
