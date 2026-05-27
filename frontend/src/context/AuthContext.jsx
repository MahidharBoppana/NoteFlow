import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (userData, authToken) => {
    setUser(userData);

    setToken(authToken);

    localStorage.setItem("token", authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (token) {
      setUser({
        name: "Demo User",
        email: "demo@gmail.com",
      });
    }
  }, [token]);

  console.log(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,

        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
