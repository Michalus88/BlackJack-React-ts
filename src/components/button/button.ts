import styled from "styled-components";

export const Button = styled.button`
  border: ${({ theme }) => theme.colors.green} solid 1px;
  padding: 6px 25px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 1px -1px 15px 2px ${({ theme }) => theme.colors.lightgreen};
  }
`;
