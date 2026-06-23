import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1A1816] text-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-6xl font-bold mb-6">
          Book My Trim
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          Smart Queue Management for Modern Barber Shops
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/login"
            className="bg-[#B23A2E] px-6 py-3 rounded-lg"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-gray-700 px-6 py-3 rounded-lg"
          >
            Register
          </Link>

          <Link
            href="/queue/live"
            className="bg-green-700 px-6 py-3 rounded-lg"
          >
            Live Queue
          </Link>
        </div>
      </div>
    </main>
  );
}