import styled from "styled-components";
import { Button } from "../button/button";

export const FormWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.black};
`;

export const Form = styled.form`
  margin-top: 10vh;
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0px 1px 20px 0px ${({ theme }) => theme.colors.green};
`;
export const WrapperField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;
`;

export const Label = styled.label`
  width: 100%;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.green};
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSize.l};
  resize: none;
  outline: none;
  :focus {
    background-color: ${({ theme }) => theme.colors.lightgreen};
  }
`;

export const ValidationMsg = styled.label`
  position: absolute;
  bottom: -15px;
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: bitter, sans-serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme }) => theme.colors.error};
`;

export const Submit = styled(Button)`
  width: 240px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.white};
`;
