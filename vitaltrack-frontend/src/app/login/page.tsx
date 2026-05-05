"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-green-100">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Your journey starts here</h2>
          <p className="text-gray">Track your nutrition and progress</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

          <h2 className="text-2xl font-semibold mb-6">Welcome back</h2>

          <form className="space-y-4">

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
              Sign In
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}