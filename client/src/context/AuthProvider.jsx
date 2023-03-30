import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const value = { isAuthenticated, setIsAuthenticated };
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;