/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AuthApi from "../api/auth";
import { getValidAccessToken } from "../api/tokenUtils";
import { secureStorage } from "../utils/SecureStorage";
import type { LoginPayload } from "../types/auth.type";
import { AuthContext } from "./authContext";
import { setIsLoggingOut } from "../api/index";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = React.useState(
    secureStorage.getAccessToken()
  );
  const [refreshToken, setRefreshToken] = React.useState(
    secureStorage.getRefreshToken()
  );
  const [user, setUser] = React.useState(() => secureStorage.getUser());
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await getValidAccessToken();

        if (token) {
          setAccessToken(token);

          if (!user) {
            try {
              const me = await AuthApi.Me();
              saveUser(me.data);
              setIsLoggingOut(false);
            } catch (error) {
              console.error("Failed to fetch user:", error);
              secureStorage.clearAll();
              setAccessToken(null);
              setRefreshToken(null);
              setUser(null);
            }
          } else {
            setIsLoggingOut(false);
          }
        } else {
          secureStorage.clearAll();
          setAccessToken(null);
          setRefreshToken(null);
          setUser(null);
          setIsLoggingOut(false);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        secureStorage.clearAll();
        setAccessToken(null);
        setRefreshToken(null);
        setUser(null);
        setIsLoggingOut(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveTokens = (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    secureStorage.setAccessToken(accessToken);
    secureStorage.setRefreshToken(refreshToken);
  };

  const saveUser = (userInfo: any) => {
    setUser(userInfo);
    secureStorage.setUser(userInfo);
  };

  const logout = async () => {
    setIsLoggingOut(true);

    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    secureStorage.clearAll();
  };

  const login = async (credentials: LoginPayload) => {
    try {
      setIsLoggingOut(false);

      const response = await AuthApi.Login(credentials);
      const { access, refresh } = response.data;
      saveTokens(access, refresh);
      const me = await AuthApi.Me();
      saveUser(me.data);
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const authContextValue = {
    accessToken,
    refreshToken,
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
    setUser: saveUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};


// Usage example:

// <AuthProvider>
//       <MainApp />
//     </AuthProvider>