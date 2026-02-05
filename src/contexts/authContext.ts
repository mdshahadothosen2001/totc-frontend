import React from "react";
import type { LoginPayload } from "../types/auth.type";

export interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  login: (credentials: LoginPayload) => Promise<any>;
  logout: () => Promise<void>;
  setUser: (userInfo: any) => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);
