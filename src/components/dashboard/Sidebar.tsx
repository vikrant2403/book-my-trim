import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#252320] border-r border-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-8">
        Book My Trim
      </h1>

      <nav className="space-y-2">
        <Link href="/dashboard" className="block p-3 rounded hover:bg-[#34302B]">
          Dashboard
        </Link>

        <Link href="/dashboard/queue" className="block p-3 rounded hover:bg-[#34302B]">
          Queue
        </Link>

        <Link href="/dashboard/barbers" className="block p-3 rounded hover:bg-[#34302B]">
          Barbers
        </Link>

        <Link href="/dashboard/services" className="block p-3 rounded hover:bg-[#34302B]">
          Services
        </Link>

        <Link href="/dashboard/customers" className="block p-3 rounded hover:bg-[#34302B]">
          Customers
        </Link>

        <Link href="/dashboard/reports" className="block p-3 rounded hover:bg-[#34302B]">
          Reports
        </Link>

        <Link href="/dashboard/settings" className="block p-3 rounded hover:bg-[#34302B]">
          Settings
        </Link>
      </nav>
    </aside>
  );
}