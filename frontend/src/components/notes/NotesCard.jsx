import { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import { useNotes } from "../../context/NotesContext";

import NoteViewerModal from "./NoteViewerModal";

import EditIcon from "@mui/icons-material/Edit";

import PushPinIcon from "@mui/icons-material/PushPin";

function NotesCard({ note }) {
  const { deleteNote, setSelectedNote, setOpenEditorModal, togglePinNote } =
    useNotes();

  const [openViewer, setOpenViewer] = useState(false);

  return (
    <>
      <Card
        elevation={0}
        className="
        w-[535px]
          h-[320px]
          rounded-2xl
          border
          border-gray-200
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          flex
          flex-col
          justify-between
        "
      >
        <CardContent
          className="
            flex
            flex-col
            h-full
          "
        >
          <Box
            className="
              flex
              justify-between
              items-start
            "
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              className="
                line-clamp-1
              "
            >
              {note.title}
            </Typography>

            <div>
              <IconButton
                onClick={() => {
                  togglePinNote(note.id);
                }}
                sx={{
                  color: note.isPinned ? "#f59e0b" : "#9ca3af",
                }}
              >
                <PushPinIcon />
              </IconButton>

              <IconButton
                onClick={() => {
                  setSelectedNote(note);
                  setOpenEditorModal(true);
                }}
                sx={{
                  color: "#2563eb",
                }}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                onClick={() => deleteNote(note.id)}
                sx={{
                  color: "#ef4444",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Box>

          <Typography
            variant="body2"
            className="
            break-words
    mt-4
    text-gray-600
    leading-6
    overflow-hidden
    flex-1
  "
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
            }}
          >
            {note.content.replace(/<[^>]*>/g, "")}
          </Typography>

          <div className="mt-4">
            <div className="flex justify-between mb-5 items-center">
              <Typography
                variant="caption"
                className="
                text-gray-400
                block
                mb-3
              "
              >
                {new Date(note.createdAt).toLocaleDateString()}
              </Typography>

              <Typography
                variant="caption"
                className="
    inline-block
    px-3
    py-1
    rounded-full
    bg-blue-100
    text-blue-700
    mb-3
  "
              >
                {note.category}
              </Typography>
            </div>

            <Button
              variant="outlined"
              fullWidth
              onClick={() => setOpenViewer(true)}
            >
              View Note
            </Button>
          </div>
        </CardContent>
      </Card>

      <NoteViewerModal
        open={openViewer}
        onClose={() => setOpenViewer(false)}
        note={note}
      />
    </>
  );
}

export default NotesCard;
