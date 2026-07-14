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

// Create Note

export const createNote = async (noteData) => {
  const response = await fetchWithAuth("/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to create note");
  }

  return result;
};

// Update Note

export const updateNote = async (id, updatedNoteData) => {
  const response = await fetchWithAuth(`/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedNoteData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to update note note");
  }

  return result;
};

// Delete Note
export const deleteNote = async (id) => {
  const response = await fetchWithAuth(`/notes/${id}`, {
    method: "DELETE",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to delete the note");
  }

  return result;
};

// Get Trashed Notes

export const getTrashedNotes = async () => {
  const response = await fetchWithAuth("/notes/trash", {
    method: "GET",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch trashed notes");
  }

  return result;
};

// Restore Note

export const restoreNote = async (id) => {
  const response = await fetchWithAuth(`/notes/${id}/restore`, {
    method: "PATCH",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to restore note");
  }

  return result;
};

// Permanently Trashed Note

export const permanentlyDeleteNote = async (id) => {
  const response = await fetchWithAuth(`/notes/${id}/delete`, {
    method: "DELETE",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to permanently delete note");
  }

  return result;
};

// pin/unpin note

export const togglePinNote = async (id) => {
  const response = await fetchWithAuth(`/notes/${id}/pin`, {
    method: "PATCH",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to update pin status");
  }

  return result;
};

// Search

export const searchNotes = async (query) => {
  const response = await fetchWithAuth(
    `/notes/search?q=${encodeURIComponent(query)}`,
    {
      method: "GET",
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to search notes");
  }

  return result;
};
