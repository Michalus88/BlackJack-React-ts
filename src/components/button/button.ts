import styled from "styled-components";

export const Button = styled.button<{ disabled?: boolean }>`
  box-sizing: border-box;
  border: ${({ disabled, theme }) =>
    disabled
      ? `solid 1px ${theme.colors.gray}`
      : `solid 1px ${theme.colors.green}`};
  padding: 6px 25px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray : theme.colors.green};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: ${({ disabled, theme }) =>
      disabled ? "none" : `1px -1px 15px 1px ${theme.colors.lightgreen}`};
  }
  transition: 0.3s linear;
`;
