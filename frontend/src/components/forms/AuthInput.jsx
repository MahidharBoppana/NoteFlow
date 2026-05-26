import TextField from "@mui/material/TextField";
import { requestFormReset } from "react-dom";

function AuthInput({ label, type = "text", value, onChange, name, error, helperText }) {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      variant="outlined"
      margin="normal"

      error={error}
      helperText={helperText}
    />
  );
}

export default AuthInput;
