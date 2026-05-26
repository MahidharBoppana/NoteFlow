import { useState } from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function PasswordInput({ label, value, onChange, name, error, helperText }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault(); // prevents focus loss when clicking the icon
  };

  return (
    <TextField
      fullWidth
      label={label}
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={onChange}
      name={name}
       error={error}
      helperText={helperText}
      margin="normal"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleTogglePassword}
              onMouseDown={handleMouseDownPassword}
              aria-label="toggle password visibility"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordInput;
