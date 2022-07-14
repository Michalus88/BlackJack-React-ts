import React from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterReq } from "types";
import { useNotification } from "../../hooks/useNotification";
import { isResErrorMsg } from "../../helpers/isErrorMsg";
import { MainContentWrapper } from "../../components/main-content/mainContentWrapper";
import {
  Form,
  ValidationMsg,
  WrapperField,
  Label,
  Input,
  Submit,
} from "../../components/form/form";
import { NotificationMode } from "../../components/notification/Notification";
import { apiUrl } from "../../config/api";

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<RegisterReq>({
    mode: "onChange",
  });
  const { message, dispatchNotification } = useNotification();
  const disabled = message ? true : false;

  const registerHendler: SubmitHandler<RegisterReq> = async (data) => {
    try {
      const res = await fetch(`${apiUrl}/user`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 409) {
        return setError("email", { message: "email is alredy in use" });
      }
      const errMsg = await isResErrorMsg(res);
      if (errMsg) {
        dispatchNotification(NotificationMode.ERROR, errMsg);
      } else {
        navigate("/login");
      }
    } catch (error) {
      dispatchNotification(NotificationMode.ERROR, null);
    }
  };

  return (
    <MainContentWrapper>
      <Form onSubmit={handleSubmit(registerHendler)}>
        <WrapperField>
          <Label htmlFor="name">name</Label>
          <Input
            placeholder="Your Name"
            type="text"
            {...register("name", {
              required: "this is a required",
              maxLength: {
                value: 50,
                message: "Max length is 50",
              },
              minLength: {
                value: 1,
                message: "Min length is 5",
              },
            })}
          />
          <ValidationMsg>{errors.name && errors.name.message}</ValidationMsg>
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
        <Submit type="submit" disabled={disabled}>
          Submit
        </Submit>
      </Form>
    </MainContentWrapper>
  );
};
