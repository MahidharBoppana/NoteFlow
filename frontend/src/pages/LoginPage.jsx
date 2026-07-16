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

import { useAuth } from "../context/AuthContext.jsx";
import { login as loginUser } from "../api/auth.api";
import { toast } from "sonner";
import LoadingDots from "../utils/loadingDots.jsx";

function LoginPage() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    setErrors({});
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const isValid = validateForm();

    if (!isValid) {
      toast.error("Please fix validation errors");
      return;
    }

    setLoading(true);

    try {
      const credentials = {
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      };

      const result = await loginUser(credentials);

      login(
        result.data.user,
        result.data.accessToken,
        result.data.refreshToken,
      );

      toast.success(result.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Login to Your Account">
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

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          className="!mt-6 !rounded-2xl !py-3 disabled:!cursor-not-allowed disabled:!opacity-70"
        >
          {loading ? <LoadingDots /> : "Sign In"}
        </Button>

        <Typography className="mt-4 text-center !text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-500 hover:text-blue-400"
          >
            Create Account
          </Link>
        </Typography>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
