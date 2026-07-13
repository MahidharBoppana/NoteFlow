import Router from "express";
import {
  createNote,
  getNoteById,
  getNotes,
  updateNote,
  deleteNote,
  searchNotes,
} from "../controllers/note.controller.js";
import verifyJWT from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", verifyJWT, createNote);
router.get("/", verifyJWT, getNotes);
router.get("/:noteId", verifyJWT, getNoteById);
router.put("/:noteId", verifyJWT, updateNote);
router.delete("/:noteId", verifyJWT, deleteNote);
router.get("/search", verifyJWT, searchNotes);

export default router;
