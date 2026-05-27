import Typography from "@mui/material/Typography";

import MainLayout from "../components/layout/MainLayout";

import NotesGrid from "../components/notes/NotesGrid";
import NotesEditor from "../components/notes/NotesEditor";

function DashboardPage() {
  return (
    <MainLayout>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        My Notes
      </Typography>

      <NotesEditor />

      <NotesGrid />
    </MainLayout>
  );
}

export default DashboardPage;
