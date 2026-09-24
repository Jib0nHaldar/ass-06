import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#FF6B6B]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-[#1A1A2E]">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-[#1A1A2E] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#FF6B6B]"
        >
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}

