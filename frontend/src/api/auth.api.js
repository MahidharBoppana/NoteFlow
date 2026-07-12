import { fetchWithAuth } from "./fetchWithAuth";

const API_URL = import.meta.env.VITE_API_BASE_URL;

// ======================
// Register
// ======================

export const register = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }

  return result;
};

// ======================
// Login
// ======================

export const login = async (userData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Login failed");
  }

  return result;
};

// ======================
// Current User
// ======================

export const getCurrentUser = async () => {
  const response = await fetchWithAuth("/auth/me", {
    method: "GET",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch current user");
  }

  return result;
};

// ======================
// Logout
// ======================

export const logoutUser = async () => {
  const response = await fetchWithAuth("/auth/logout", {
    method: "POST",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Logout failed");
  }

  return result;
};
