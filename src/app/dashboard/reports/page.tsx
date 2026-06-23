import { prisma } from "../../../lib/prisma";

export default async function ReportsPage() {
  const completedQueues = await prisma.queue.findMany({
    where: {
      status: "COMPLETED",
    },
    include: {
      service: true,
      customer: true,
      barber: true,
    },
  });

  const totalRevenue = completedQueues.reduce(
    (total, item) => total + item.service.price,
    0
  );

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Revenue Reports
      </h1>

      <div className="bg-[#252320] p-6 rounded-xl mb-8">
        <p className="text-gray-400">
          Total Revenue
        </p>

        <h2 className="text-4xl font-bold mt-2">
          ₹{totalRevenue}
        </h2>
      </div>

      <table className="w-full bg-[#252320] rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="p-4">Customer</th>
            <th className="p-4">Barber</th>
            <th className="p-4">Service</th>
            <th className="p-4">Amount</th>
          </tr>
        </thead>

        <tbody>
          {completedQueues.map((item) => (
            <tr
              key={item.id}
              className="border-t border-gray-700"
            >
              <td className="p-4">
                {item.customer.name}
              </td>

              <td className="p-4">
                {item.barber.name}
              </td>

              <td className="p-4">
                {item.service.name}
              </td>

              <td className="p-4">
                ₹{item.service.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}