import React, { useState } from "react";
import { UserContextRepaso } from "./UserContextRepaso";

export const UserProviderRepaso = ({ children }) => {
  const [user, setUser] = useState([]);

  return (
    <>
      {/* los datos dentro de value estarán disponibles para los componentes que usen el context  */}
      <UserContextRepaso.Provider value={{ user, setUser }}>
        {children}
      </UserContextRepaso.Provider>
    </>
  );
};
