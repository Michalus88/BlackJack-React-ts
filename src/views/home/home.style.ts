import styled from "styled-components";
import { device, size } from "../../assets/style/breakPoints";
import { MainContentWrapper } from "../../components/main-content/mainContentWrapper";

export const Wrapper = styled(MainContentWrapper)`
  align-items: flex-start;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.green};
  @media ${device.sm} and (max-height: ${size.md}) {
    align-items: center;
  }
`;

export const Content = styled.div`
  margin: 100px;
  width: 60vw;
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.green};
  box-shadow: 0px 1px 20px 0px ${({ theme }) => theme.colors.green};
  @media ${device.sm} and (max-height: ${size.md}) {
    margin: 40px;
    width: 100vw;
    padding: 0;
  }
`;

export const Descriptions = styled.p`
  padding: 30px;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  color: ${({ theme }) => theme.colors.green};
  box-shadow: 0px 1px 20px 0px ${({ theme }) => theme.colors.green};
  @media ${device.sm}, (max-height: ${size.md}) {
    border-top: 1px solid ${({ theme }) => theme.colors.green};
    padding: 5px;
    box-shadow: none;
  }
`;

export const TitleWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: center;
`;
