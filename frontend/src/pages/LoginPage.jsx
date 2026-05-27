import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import AuthInput from "../components/forms/AuthInput.jsx";
import PasswordInput from "../components/forms/PasswordInput.jsx";
import AuthLayout from "../components/layout/AuthLayout.jsx";
import { Link, useNavigate } from "react-router-dom";

import {
  validateEmail,
  validateRequired,
  validatePassword,
} from "../utils/Validators.js";
import { useUI } from "../context/UIContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function LoginPage() {
  const { showToast } = useUI();
  const { login } = useAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateRequired(formData.email)) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!validateRequired(formData.password)) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      showToast("Please fix validation errors", "error");
      return;
    }

    login(
      {
        name: "Mahidhar",
        email: formData.email,
      },

      "demo-token",
    );

    showToast("Login successfull", "success");

    navigate("/dashboard");
  };
  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          error={!!errors.email}
          helperText={errors.email}
        />

        <PasswordInput
          label="Password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          error={!!errors.password}
          helperText={errors.password}
        />

        <Button variant="contained" type="submit" fullWidth className="mt-4">
          Login
        </Button>

        <Typography className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-semibold">
            Signup
          </Link>
        </Typography>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
