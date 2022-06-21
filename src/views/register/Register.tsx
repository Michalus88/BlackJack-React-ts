import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterReq } from "types";

export function Register() {
  const [globalErr, setGlobalErr] = useState<string | null>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<RegisterReq>({
    mode: "all",
  });
  const navigate = useNavigate();

  const registerHendler: SubmitHandler<RegisterReq> = async (data) => {
    const rawResponse = await fetch("http://localhost:3001/api/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await rawResponse.json();
    console.log(rawResponse);

    if (!(rawResponse.status === 200 || rawResponse.status === 201)) {
      setGlobalErr(null);

      switch (rawResponse.status) {
        case 500:
          return setGlobalErr("Sorry try again later");
        case 400:
          return setGlobalErr(
            "Name: (required, 5-50 chars), Password: (required,5-50 chars), Email: (required, example@test.com)"
          );
        case 409:
          return setError("email", {
            type: "emil's availability",
            message: res.message,
          });
        default:
          return setGlobalErr("Sorry try again later");
      }
    }
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit(registerHendler)}>
      <label htmlFor="name">Name</label>
      <input
        placeholder="Bill"
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
      <br />
      {errors.name && errors.name.message}
      <br />

      <label htmlFor="pwd">Password</label>
      <input
        placeholder="Luo"
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
      <br />
      {errors.pwd && errors.pwd.message}
      <br />

      <label htmlFor="email">Email</label>
      <input
        placeholder="bluebill1049@hotmail.com"
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
      <br />
      {errors.email && errors.email.message}
      <br />
      <br />
      {globalErr ?? null}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
