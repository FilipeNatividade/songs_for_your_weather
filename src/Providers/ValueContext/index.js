import { createContext, useContext, useState } from "react";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    city: "",
    date: "",
    hour: "",
    temp: "",
    temp_max: "",
    temp_min: "",
  });
  const [catchError, setCatchError] = useState(false);

  return (
    <ValueContext.Provider
      value={{
        city,
        setCity,
        data,
        setData,
        catchError,
        setCatchError,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export const useValueContext = () => useContext(ValueContext);
