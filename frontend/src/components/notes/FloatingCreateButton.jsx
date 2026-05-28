import Fab from "@mui/material/Fab";

import AddIcon from "@mui/icons-material/Add";

function FloatingCreateButton({ onClick }) {
  return (
    <Fab
      color="primary"
      onClick={onClick}
      sx={{
        position: "fixed",
        bottom: 100,
        right: 100,
        zIndex: 2000,
      }}
    >
      <AddIcon />
    </Fab>
  );
}

export default FloatingCreateButton;
