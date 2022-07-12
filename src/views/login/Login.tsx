import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterReq } from "types";
import {
  Form,
  Input,
  Label,
  Submit,
  WrapperField,
  ValidationMsg,
} from "../../components/form/form";
import { useAuth, useNotification } from "../../hooks";
import { MainContentWrapper } from "../../components/main-content/mainContentWrapper";
export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterReq>({
    mode: "onChange",
  });
  const { signIn } = useAuth();
  const { message } = useNotification();
  const disabled = message ? true : false;
  const registerHendler: SubmitHandler<RegisterReq> = async (data) => {
    await signIn(data);
  };

  return (
    <MainContentWrapper>
      <Form onSubmit={handleSubmit(registerHendler)}>
        <WrapperField>
          <Label htmlFor="email">email</Label>
          <Input
            placeholder="example@domain.com"
            type="text"
            {...register("email", {
              required: "this is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
            })}
          />
          <ValidationMsg>{errors.email && errors.email.message}</ValidationMsg>
        </WrapperField>
        <WrapperField>
          <Label htmlFor="pwd">password</Label>
          <Input
            placeholder="password"
            type="text"
            {...register("pwd", {
              required: "this is required",
              maxLength: {
                value: 50,
                message: "Max length is 50",
              },
              minLength: {
                value: 5,
                message: "Min length is 5",
              },
            })}
          />
          <ValidationMsg>{errors.pwd && errors.pwd.message}</ValidationMsg>
        </WrapperField>
        <Submit type="submit" disabled={disabled}>
          Submit
        </Submit>
      </Form>
    </MainContentWrapper>
  );
};
