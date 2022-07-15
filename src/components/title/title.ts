import styled from "styled-components";

export const Title = styled.h1<{ big?: true; center?: true }>`
  margin: 0;
  /* min-width: ${({ big }) => (big ? "100%" : "auto")}; */
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.xxl : theme.fontSize.xl};
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.green};
`;
