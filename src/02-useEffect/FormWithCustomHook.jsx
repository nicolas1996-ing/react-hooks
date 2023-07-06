import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const userNoAllowed = "natalia";

  // inicio manejo de formulario
  const { formState, onInputChange, onResetForm } = useForm({
    username: "nicolas",
    email: "nicolas@gmail.com",
    password: "",
  });

  const { username, email, password } = formState;


  useEffect(() => {
    console.log("change in form");
  }, [formState]);

  useEffect(() => {
    console.log("change in form: email");
  }, [email]);

  useEffect(() => {
    console.log("change in form: username");
  }, [username]);

  return (
    <>
      <h1>SimpleForm with custome hook</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="userName"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@user.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="************"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Reset
      </button>

      {username === userNoAllowed && <Message></Message>}
    </>
  );
};
