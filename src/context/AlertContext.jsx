import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  const setAlertMessage = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => {
      setAlert({ show: false, message: "", type: "" });
    }, 3000); // 3 seconds
  };

  return (
    <AlertContext.Provider value={{ alert, setAlertMessage }}>
      {children}
    </AlertContext.Provider>
  );
};
