import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simulateAuthCheck = () => {
      setTimeout(() => {
        setCurrentUser(null);
        setLoading(false);
      }, 1000);
    };

    simulateAuthCheck();
  }, []);

  const login = (email, password) => {
    const user = { id: "1", email };
    setCurrentUser(user);
    // Optionally save the user for persistence
    return user;
  };

  const logout = () => {
    setCurrentUser(null);
    // Optionally clear the user
  };

  const value = {
    currentUser,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
