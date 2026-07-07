import Note from "../models/Note.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiErrorHandler.js";
import ApiResponse from "../utils/ApiResponseHandler.js";
import mongoose from "mongoose";

// Get Notes Collection

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({
    owner: req.user._id,
    isTrashed: false,
  }).sort({
    createdAt: -1, // Sort by createdAt in descending order
  });

  return res
    .status(200)
    .json(new ApiResponse(200, notes, "Notes fetched successfully"));
});

// Get Note by ID

const getNoteById = asyncHandler(async (req, res) => {
  const { noteId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw new ApiError(400, "Invalid note ID");
  }

  const note = await Note.findOne({
    _id: noteId,
    owner: req.user._id,
  });

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, note, "Note fetched successfully"));
});

// Create Note

const createNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content) {
    throw new ApiError(400, "Title and content are required");
  }

  const note = await Note.create({
    title,
    content,
    category,
    owner: req.user._id,
  }).sort({ updatedAt: -1 });

  return res
    .status(201)
    .json(new ApiResponse(201, note, "Note created successfully"));
});

// Update Note

const updateNote = asyncHandler(async (req, res) => {
  const { noteId } = req.params;
  const { title, content, category } = req.body;

  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw new ApiError(400, "Invalid note ID");
  }

  const updateData = {};

  if (title !== undefined) updateData.title = title;
  if (content !== undefined) updateData.content = content;
  if (category !== undefined) updateData.category = category;

  if (Object.keys(updateData).length === 0) {
    throw new ApiError(400, "No fields provided to update");
  }

  const updatedNote = await Note.findOneAndUpdate(
    { _id: noteId, owner: req.user._id, isTrashed: false },
    { $set: updateData },
    { new: true, runValidators: true },
  ).sort({ updatedAt: -1 });

  if (!updatedNote) {
    throw new ApiError(404, "Note not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedNote, "Note updated successfully"));
});

// Delete Note

const deleteNote = asyncHandler(async (req, res) => {
  const { noteId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw new ApiError(400, "Invalid note ID");
  }

  const deletedNote = await Note.findOneAndUpdate(
    {
      _id: noteId,
      owner: req.user._id,
      isTrashed: false,
    },
    {
      $set: { isTrashed: true },
    },
    {
      new: true,
    },
  );

  if (!deletedNote) {
    throw new ApiError(404, "Note not found or already trashed");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, deletedNote, "Note trashed successfully"));
});

// Get Trashed Notes

const getTrashedNotes = asyncHandler(async (req, res) => {
  const trashedNotes = await Note.find({
    owner: req.user._id,
    isTrashed: true,
  }).sort({
    updatedAt: -1, // Sort by updatedAt in descending order
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, trashedNotes, "Trashed notes fetched successfully"),
    );
});

// Get Restore Note

const restoreNote = asyncHandler(async (req, res) => {
  const { noteId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw new ApiError(400, "Invalid note ID");
  }

  const restoredNote = await Note.findOneAndUpdate(
    {
      owner: req.user._id,
      _id: noteId,
      isTrashed: true,
    },
    {
      $set: { isTrashed: false },
    },
    {
      new: true,
    },
  );

  if (!restoredNote) {
    throw new ApiError(404, "Note not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, restoredNote, "Note restored successfully"));
});

// Permanently Delete Note

const deleteNotePermanently = asyncHandler(async (req, res) => {
  const { noteId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw new ApiError(400, "Invalid note ID");
  }

  const deletedNote = await Note.findOneAndDelete({
    _id: noteId,
    owner: req.user._id,
    isTrashed: true,
  });

  if (!deletedNote) {
    throw new ApiError(404, "Note not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, deletedNote, "Note deleted permanently"));
});

// Pin / Unpin Note

const togglePinNote = asyncHandler(async (req, res) => {
  const { noteId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw new ApiError(400, "Invalid note ID");
  }

  const note = await Note.findOne({
    _id: noteId,
    owner: req.user._id,
    isTrashed: false,
  });

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  note.isPinned = !note.isPinned;
  await note.save();

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        note,
        `Note ${note.isPinned ? "pinned" : "unpinned"} successfully`,
      ),
    );
});

const searchNotes = asyncHandler(async (req, res) => {
  const { q } = req.query;

  if (!q || q.trim() === "") {
    throw new ApiError(400, "Search query is required");
  }

  const notes = Note.find({
    owner: req.user._id,
    isTrashed: false,
    $or: [
      {
        title: {
          $regex: q,
          $options: "i",
        },
      },
      {
        content: {
          $regex: q,
          $options: "i",
        },
      },
      {
        category: {
          $regex: q,
          $options: "i",
        },
      },
    ],
  }).sort({ updatedAt: -1 });

  return res.status(200).json(new ApiResponse(200, notes, "Notes fetched successfully"))


});

export {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  getTrashedNotes,
  restoreNote,
  deleteNotePermanently,
  togglePinNote,
};
