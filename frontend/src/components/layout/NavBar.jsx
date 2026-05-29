import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import NoteAltIcon from "@mui/icons-material/NoteAlt";

import IconButton from "@mui/material/IconButton";

import DarkModeIcon from "@mui/icons-material/DarkMode";

import LightModeIcon from "@mui/icons-material/LightMode";

import { useThemeContext } from "../../context/ThemeContext";

function NavBar() {
  const { darkMode, toggleDarkMode } = useThemeContext();
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

        <div className="flex items-center gap-2">
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

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
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
