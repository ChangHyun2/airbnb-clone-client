import React, { createContext, useContext } from 'react';

const AuthContext = createContext(false);

const useAuthContext = () => {
  const isAuth = useContext(AuthContext);

  return isAuth;
};

const AuthContextProvider = ({ children, value = false }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider, useAuthContext };
