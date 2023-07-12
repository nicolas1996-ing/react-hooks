import React, { useContext } from "react";
import { UserContextRepaso } from "./hooks/UserContextRepaso";

export const LoginPage = () => {
  const userLogin = { id: 123, name: "nicolas", email: "jnar@utp.edu.co" };

  // context
  const { user, setUser } = useContext(UserContextRepaso);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-primary" onClick={() => setUser(userLogin)}>
        set user
      </button>
    </>
  );
};
