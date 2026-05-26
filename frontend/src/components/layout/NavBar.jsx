import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import NoteAltIcon from "@mui/icons-material/NoteAlt";

function NavBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 12345,
      }}
    >
      <Toolbar className="flex justify-between">
        <div className="flex items-center gap-3">
          <NoteAltIcon />

          <Typography variant="h5" fontWeight="bold">
            NoteFlow
          </Typography>
        </div>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#6366f1",

            "&.hover": {
              backgroundColor: "#f3f4f6",
            },
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
