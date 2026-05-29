import { Avatar, Paper, Typography, Divider, Button } from "@mui/material";

import MainLayout from "../components/layout/MainLayout";

import { useAuth } from "../context/AuthContext";

import { useNotes } from "../context/NotesContext";

function ProfilePage() {
  const { user, logout } = useAuth();

  const { notes } = useNotes();

  const activeNotes = notes.filter((note) => !note.isTrashed);

  const pinnedNotes = notes.filter((note) => note.isPinned);

  return (
    <MainLayout>
      <Paper
        elevation={3}
        sx={{
          maxWidth: 700,
          margin: "0 auto",
          padding: 4,
          borderRadius: 4,
        }}
      >
        <div className="flex flex-col items-center">
          <Avatar
            sx={{
              width: 100,
              height: 100,
              fontSize: 40,
              mb: 2,
            }}
          >
            {user?.name?.[0] || "U"}
          </Avatar>

          <Typography variant="h4" fontWeight="bold">
            {user?.name || "User"}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {user?.email}
          </Typography>
        </div>

        <Divider sx={{ my: 4 }} />

        <div className="space-y-4">
          <Typography variant="h6">Account Overview</Typography>

          <Typography>Total Notes: {activeNotes.length}</Typography>

          <Typography>Pinned Notes: {pinnedNotes.length}</Typography>

          <Typography>
            Categories Used: {new Set(notes.map((note) => note.category)).size}
          </Typography>
        </div>

        <Divider sx={{ my: 4 }} />

        <Button variant="contained" color="error" onClick={logout} fullWidth>
          Logout
        </Button>
      </Paper>
    </MainLayout>
  );
}

export default ProfilePage;
