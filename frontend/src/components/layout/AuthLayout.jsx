import { Box, Paper, Typography } from "@mui/material";

function AuthLayout({ title, children }) {
  return (
    <Box className="min-h-screen flex items-center justify-center bg-gray-100">
      <Paper elevation={4} className="p-8 w-full max-w-md">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        {children}
      </Paper>
    </Box>
  );
}

export default AuthLayout;
