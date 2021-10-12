import { createContext, useContext, useState } from "react";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [city, setCity] = useState("");

  return (
    <ValueContext.Provider
      value={{
        city,
        setCity,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export const useValueContext = () => useContext(ValueContext);
