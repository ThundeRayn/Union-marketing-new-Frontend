import { createContext, useContext, useState, ReactNode } from 'react';
import { api } from '@/lib/api';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isRealtor: boolean;
}

interface AuthContextValue {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setSession: (token: string, user: User) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  async function login(email: string, password: string) {
    const data = await api.login({ email, password });
    setToken(data.access_token);
    setUser(data.user);
  }

  async function logout() {
    if (token) {
      await api.logout(token).catch(() => {});
    }
    setToken(null);
    setUser(null);
  }

  function setSession(newToken: string, newUser: User) {
    setToken(newToken);
    setUser(newUser);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, setSession }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
