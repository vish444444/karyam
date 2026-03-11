import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('customer'); // 'customer' or 'worker'

  const login = (userData, userRole) => {
    setUser(userData);
    setRole(userRole);
  };

  const logout = () => {
    setUser(null);
    setRole('customer');
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
