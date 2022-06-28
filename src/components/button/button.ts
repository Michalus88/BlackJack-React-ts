import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  margin: 15px 0;
  padding: 12px 20px;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
