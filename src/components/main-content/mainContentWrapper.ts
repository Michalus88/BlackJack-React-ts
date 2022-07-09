import styled from "styled-components";

export const MainContentWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
`;
