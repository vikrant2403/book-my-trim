import { prisma } from "@/lib/prisma";
import AutoRefresh from "@/components/AutoRefresh";

export const dynamic = "force-dynamic";

export default async function LiveQueuePage() {
  const queue = await prisma.queue.findMany({
    include: {
      customer: true,
      barber: true,
      service: true,
    },
    orderBy: {
      tokenNumber: "asc",
    },
  });

  const nowServing =
    queue.find(
      (item) => item.status === "IN_PROGRESS"
    ) || null;

  const waitingCount = queue.filter(
    (item) => item.status === "WAITING"
  ).length;

  return (
    <main className="min-h-screen bg-[#1A1816] text-white p-8">
        <AutoRefresh />

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-10">
          Book My Trim
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-[#252320] rounded-2xl p-8 text-center">
            <p className="text-gray-400">
              Now Serving
            </p>

            <h2 className="text-7xl font-bold text-green-400 mt-4">
              {nowServing
                ? `#${nowServing.tokenNumber}`
                : "-"}
            </h2>
          </div>

          <div className="bg-[#252320] rounded-2xl p-8 text-center">
            <p className="text-gray-400">
              Waiting Customers
            </p>

            <h2 className="text-7xl font-bold text-yellow-400 mt-4">
              {waitingCount}
            </h2>
          </div>

        </div>

        <div className="bg-[#252320] rounded-2xl overflow-hidden">

          <table className="w-full">

            <thead>
              <tr>
                <th className="p-4">Token</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Barber</th>
                <th className="p-4">Service</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>

              {queue.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-700"
                >
                  <td className="p-4 text-center">
                    #{item.tokenNumber}
                  </td>

                  <td className="p-4 text-center">
                    {item.customer.name}
                  </td>

                  <td className="p-4 text-center">
                    {item.barber.name}
                  </td>

                  <td className="p-4 text-center">
                    {item.service.name}
                  </td>

                  <td className="p-4 text-center">

                    <span
                      className={
                        item.status === "COMPLETED"
                          ? "text-green-400"
                          : item.status === "IN_PROGRESS"
                          ? "text-blue-400"
                          : "text-yellow-400"
                      }
                    >
                      {item.status}
                    </span>

                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}