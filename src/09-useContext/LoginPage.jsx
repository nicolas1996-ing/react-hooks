import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      LoginPage
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
