import React, { useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../components/layout/AuthLayout";
import AuthInput from "../components/forms/AuthInput";
import PasswordInput from "../components/forms/PasswordInput";
import { register } from "../api/auth.api";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";

import {
  validateEmail,
  validateName,
  validatePassword,
  validateRequired,
} from "../utils/Validators";
import LoadingDots from "../utils/loadingDots";

function SignupPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { login } = useAuth();

  const validateForm = () => {
    const newErrors = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = "Name is required";
    } else if (!validateName(formData.name)) {
      newErrors.name = "Name must be at least 3 characters";
    }

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
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setLoading(true);

    try {
      const userData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      };

      const result = await register(userData);

      login(
        result.data.user,
        result.data.accessToken,
        result.data.refreshToken,
      );

      toast.success(result.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          name="name"
          error={!!errors.name}
          helperText={errors.name}
        />

        <AuthInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          error={!!errors.email}
          helperText={errors.email}
        />

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          error={!!errors.password}
          helperText={errors.password}
        />

        <button
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400 disabled:opacity-80"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <LoadingDots />
            </>
          ) : (
            "Create Account"
          )}
        </button>

        <Typography className="mt-6 text-center !text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-500 hover:text-blue-400"
          >
            Sign In
          </Link>
        </Typography>
      </form>
    </AuthLayout>
  );
}

export default SignupPage;
