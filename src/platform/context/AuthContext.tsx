import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'admin' | 'coordinator' | 'worker' | 'participant';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  title: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, role?: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('horizon_app_user');
    return saved ? JSON.parse(saved) : {
      id: 'U001',
      name: 'Brooke Simmons',
      email: 'brooke.s@horizonsupport.com.au',
      role: 'coordinator',
      avatar: 'BS',
      title: 'Senior Support Coordinator',
    };
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('horizon_app_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('horizon_app_user');
    }
  }, [user]);

  const login = (email: string, role: UserRole = 'coordinator') => {
    const newUser: User = {
      id: 'U001',
      name: role === 'worker' ? 'Sophie Anderson' : role === 'participant' ? 'Sarah Chen' : 'Brooke Simmons',
      email,
      role,
      avatar: role === 'worker' ? 'SA' : role === 'participant' ? 'SC' : 'BS',
      title: role === 'worker' ? 'Senior Support Worker' : role === 'participant' ? 'NDIS Participant' : 'Senior Support Coordinator',
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
