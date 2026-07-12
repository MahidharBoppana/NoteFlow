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

function SignupPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (!formData.name.trim()) {
        return toast.error("Name is required");
      }

      if (!formData.email.trim()) {
        return toast.error("Email is required");
      }

      if (!formData.password) {
        return toast.error("Password is required");
      }

      if (formData.password.length < 6) {
        return toast.error("Password must be at least 6 characters");
      }

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
        />

        <AuthInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          className="!mt-6 !rounded-2xl !py-3"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>

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
