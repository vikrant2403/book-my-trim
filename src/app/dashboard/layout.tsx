import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#1C1B19] text-[#F2EBDD]">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}