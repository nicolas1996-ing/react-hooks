import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const newUser = { id: 1, name: "juan", email: "juan@gmail.com" };
export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <pre aria-label="pre-test-id">{JSON.stringify(user, null, 3)}</pre>
      <button aria-label="btn-test-id" className="btn btn-primary" onClick={() => setUser(newUser)}>
        set user
      </button>
    </>
  );
};
