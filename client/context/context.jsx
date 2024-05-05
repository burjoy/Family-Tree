import { useState } from "react";
import { GlobalContext, useGlobalContext } from "./utils";

export const GlobalProvider = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};
GlobalProvider.propTypes
