import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">VitalTrack</h1>
        <p className="mt-2 text-sm text-slate-600">Choose where to continue.</p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/login"
            className="flex-1 rounded-lg bg-green-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
