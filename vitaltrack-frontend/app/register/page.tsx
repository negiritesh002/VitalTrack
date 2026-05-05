
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "@/features/auth/authSlice";
import type { AppDispatch } from "@/store/store";

export default function RegisterPage() {
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState({
    name: "",
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
      const result = await dispatch(registerUser(form)).unwrap();
      setMessage(result.message || "Account created successfully");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setError(typeof err === "string" ? err : "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden w-1/2 flex-col justify-center bg-white px-16 md:flex">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">
          Elevate your <span className="text-green-600">performance</span> with precision.
        </h1>
        <p className="mb-8 text-slate-600">
          Join thousands of elite performers tracking nutrition and achieving holistic wellness.
        </p>

        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
            alt="gym"
            className="h-64 w-full object-cover"
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-gray-50 md:w-1/2">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Create Account</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              onChange={handleChange}
              value={form.name}
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-slate-200 p-3 text-slate-800 placeholder:text-slate-400"
            />

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
              Join VitalTrack -&gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
