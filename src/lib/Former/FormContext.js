import React, { createContext, useContext } from 'react';

const FormContext = createContext({});
const FormContextProvider = ({ children, value, ...others }) => (
  <FormContext.Provider value={value} {...others}>
    {children}
  </FormContext.Provider>
);
const useFormContext = () => useContext(FormContext);

export { FormContextProvider, useFormContext, FormContext };
