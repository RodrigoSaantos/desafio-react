import React, { createContext, useContext, useState } from 'react';

const CheckboxContext = createContext({});

export const CheckboxProvider = ({ children }) => {
    const [checkbox, setCheckbox] = useState([]);
  
  return (
    <CheckboxContext.Provider
      value={{
        checkbox,
        setCheckbox,
      }}
    >
      {children}
    </CheckboxContext.Provider>
  );
};

export function useCheckbox() {
    const context = useContext(CheckboxContext);
  
    return context;
}