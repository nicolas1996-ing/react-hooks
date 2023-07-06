import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const userNoAllowed = "natalia";

  // inicio manejo de formulario
  const [form, setform] = useState({
    username: "nicolas",
    email: "nicolas@gmail.com",
  });
  const { username, email } = form;

  const onInputChange = ({ target }) => {
    // console.log(`field-form: ${target.name}`);
    // console.log(`value: ${target.value}`);
    const name = target.name;
    const value = target.value;

    setform({
      ...form,
      [name]: value, // propiedades computadas
    });
  };
  // fin manejo del formulario

  useEffect(() => {
    // console.log("change in component - one time");
  }, []);

  useEffect(() => {
    // console.log("change in any form field");
  }, [form]);

  useEffect(() => {
    // console.log("change in form: email");
    // email: mirar el input form
  }, [email]);

  useEffect(() => {
    console.log("change in form: username");
  }, [username]);

  return (
    <>
      <h1>SimpleForm</h1>
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

      {username === userNoAllowed && <Message></Message>}
    </>
  );
};
