import React from "react";
import type { LoginPayload } from "../types/auth.type";
import type { User } from "../types/user.type";

export interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (credentials: LoginPayload) => Promise<any>;
  logout: () => Promise<void>;
  setUser: (userInfo: User | null) => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);
