"use client";

import React from "react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="w-1/2 hidden md:flex flex-col justify-center px-16 bg-white">
        <h1 className="text-4xl font-bold mb-4">
          Elevate your <span className="text-green-600">performance</span> with precision.
        </h1>
        <p className="text-gray-500 mb-8">
          Join thousands of elite performers tracking nutrition and achieving holistic wellness.
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
            alt="gym"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

          <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg"
            />

            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              Join VitalTrack →
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
