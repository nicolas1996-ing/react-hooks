import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const newUser = {
  name: "nicolas",
  email: "nicol@gmail.com",
  phone: "3204567890",
};

export const HomePage = () => {
  const { user, updateUser } = useContext(UserContext);

  return (
    <>
      HomePage
      <pre>{JSON.stringify(user)}</pre>
      <button onClick={() => updateUser(newUser)}>setUser</button>
    </>
  );
};
