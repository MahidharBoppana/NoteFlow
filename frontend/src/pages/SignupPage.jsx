import React, { useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../components/layout/AuthLayout";
import AuthInput from "../components/forms/AuthInput";
import PasswordInput from "../components/forms/PasswordInput";
import { register } from "../api/auth.api";
import { useUI } from "../context/UIContext";
import { useAuth } from "../context/AuthContext";

function SignupPage() {
  const { showToast } = useUI();
  const navigate = useNavigate();

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

    try {
      const result = await register(formData);

      login(
        result.data.user,
        result.data.accessToken,
        result.data.refreshToken,
      );

      showToast(result.message, "success");

      navigate("/dashboard");
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  return (
    <AuthLayout title="SignUp">
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

        <Button type="submit" variant="contained" fullWidth className="mt-4">
          Signup
        </Button>

        <Typography className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold">
            login
          </Link>
        </Typography>
      </form>
    </AuthLayout>
  );
}

export default SignupPage;
