import Router from "express";
import {
  createNote,
  getNoteById,
  getNotes,
  updateNote,
  deleteNote,
  searchNotes,
  restoreNote,
  getTrashedNotes,
  deleteNotePermanently,
  togglePinNote,
} from "../controllers/note.controller.js";
import verifyJWT from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", verifyJWT, createNote);

router.get("/", verifyJWT, getNotes);

router.get("/trash", verifyJWT, getTrashedNotes);

router.get("/search", verifyJWT, searchNotes);

router.patch("/:noteId/pin", verifyJWT, togglePinNote);

router.get("/:noteId", verifyJWT, getNoteById);

router.put("/:noteId", verifyJWT, updateNote);

router.delete("/:noteId", verifyJWT, deleteNote);

router.patch("/:noteId/restore", verifyJWT, restoreNote);

router.delete("/:noteId/delete", verifyJWT, deleteNotePermanently);

export default router;
