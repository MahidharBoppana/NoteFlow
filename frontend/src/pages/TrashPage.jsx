import Typography from "@mui/material/Typography";

import MainLayout from "../components/layout/MainLayout";

import TrashGrid from "../components/notes/TrashGrid";

function TrashPage() {
  return (
    <MainLayout>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Trash
      </Typography>

      <TrashGrid />
    </MainLayout>
  );
}

export default TrashPage;
