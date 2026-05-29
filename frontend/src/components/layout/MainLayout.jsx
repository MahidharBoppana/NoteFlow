import { Box, Toolbar } from "@mui/material";
import NavBar from "./NavBar.jsx";
import SideBar from "./SideBar.jsx";
import { useTheme } from "@mui/material/styles";

function MainLayout({ children }) {
  const theme = useTheme();
  return (
    <Box
      style={{
        backgroundColor: theme.palette.background.default,

        color: theme.palette.text.primary,

        minHeight: "100vh",
      }}
      sx={{ display: "flex", padding: "20px" }}
    >
      <SideBar />

      <Box sx={{ flexGrow: 1 }}>
        <NavBar />

        <Toolbar />

        <Box className="p-6">{children}</Box>
      </Box>
    </Box>
  );
}

export default MainLayout;
