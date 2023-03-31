import { useState } from 'react';
import { AuthContext } from './AuthContext';

const iniciar = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return {
      logged: !!user,
      user: user,
  }
}

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(iniciar);

  const login = async (name = '') => {
    const user = {
        name
    }
    localStorage.setItem('user', JSON.stringify(user));
    updateAuth();
  }

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated({
      logged: false
    })
    updateAuth();
  }

  const updateAuth = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    setIsAuthenticated({
      logged: !!user,
      user: user,
    })
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated, login, logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}
