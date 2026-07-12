import { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser, logoutUser } from "../api/auth.api";

import { getAccessToken, setTokens, clearTokens } from "../utils/token";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [accessToken, setAccessToken] = useState(getAccessToken());

  const login = (userData, accessToken, refreshToken) => {
    setUser(userData);

    setTokens(accessToken, refreshToken);

    setAccessToken(accessToken);
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error(error);
    } finally {
      clearTokens();

      setUser(null);

      setAccessToken(null);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const token = getAccessToken();

      if (!token) {
        console.log("No token found");
        setLoading(false);
        return;
      }

      try {
        const result = await getCurrentUser();

        setUser(result.data);

        setAccessToken(getAccessToken());
      } catch (error) {
        clearTokens();

        setUser(null);

        setAccessToken(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        accessToken,

        login,
        logout,

        setUser,

        isAuthenticated: !!accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
