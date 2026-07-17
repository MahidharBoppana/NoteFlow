import {
  getAccessToken,
  getRefreshToken,
  updateAccessToken,
  setTokens,
  clearTokens,
} from "../utils/token";


const API_URL = import.meta.env.VITE_API_BASE_URL;

async function refreshAccessToken() {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const response = await fetch(`${API_URL}/auth/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    clearTokens();
    throw new Error(result.message || "Session expired");
  }

  const { accessToken, refreshToken: newRefreshToken } = result.data;

  setTokens(accessToken, newRefreshToken);

  return accessToken;
}

export async function fetchWithAuth(url, options = {}) {
  let accessToken = getAccessToken();

  let response = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status !== 401) {
    return response;
  }

  try {
    accessToken = await refreshAccessToken();

    response = await fetch(`${API_URL}${url}`, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    clearTokens();
    throw error;
  }
}
