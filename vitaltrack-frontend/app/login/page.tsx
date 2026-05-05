"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/features/auth/authSlice";
import type { AppDispatch } from "@/store/store";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const result = await dispatch(loginUser(form)).unwrap();
      setMessage(result.message || "Login successful");
      setForm({ email: "", password: "" });
    } catch (err) {
      setError(typeof err === "string" ? err : "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden w-1/2 items-center justify-center bg-green-100 md:flex">
        <div className="text-center">
          <h2 className="mb-2 text-xl font-semibold text-slate-900">Your journey starts here</h2>
          <p className="text-slate-600">Track your nutrition and progress</p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center md:w-1/2">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Welcome back</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="email"
              onChange={handleChange}
              value={form.email}
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-slate-200 p-3 text-slate-800 placeholder:text-slate-400"
            />

            <input
              name="password"
              onChange={handleChange}
              value={form.password}
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-slate-200 p-3 text-slate-800 placeholder:text-slate-400"
            />

            {message && <p className="text-sm text-green-600">{message}</p>}
            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 py-3 text-white hover:bg-green-700"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
