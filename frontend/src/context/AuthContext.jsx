import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../api/auth.api";
import { logoutUser } from "../api/auth.api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken"),
  );

  const login = (userData, token, refreshToken) => {
    setUser(userData);

    setAccessToken(token);

    localStorage.setItem("accessToken", token);

    localStorage.setItem("refreshToken", refreshToken);
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error(error);
    } finally {
      setUser(null);

      setAccessToken(null);

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const result = await getCurrentUser();

        setUser(result.data);

        setAccessToken(token);
      } catch (error) {
        logout();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,

        accessToken,

        loading,

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
