import { fetchWithAuth } from "./fetchWithAuth";

// Get All Notes

export const getNotes = async () => {
  const response = await fetchWithAuth("/notes", {
    method: "GET",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch notes");
  }

  return result;
};
