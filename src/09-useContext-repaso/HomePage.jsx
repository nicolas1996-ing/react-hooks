import React, { useContext } from "react";
import { UserContextRepaso } from "./hooks/UserContextRepaso";

export const HomePage = () => {
  const { user } = useContext(UserContextRepaso);

  return (
    <>
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
