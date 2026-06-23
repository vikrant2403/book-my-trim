import { prisma } from "../../../lib/prisma";

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: {
      totalSpent: "desc",
    },
  });

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Customer History
      </h1>

      <table className="w-full bg-[#252320] rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Visits</th>
            <th className="p-4">Total Spent</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-t border-gray-700"
            >
              <td className="p-4">
                {customer.name}
              </td>

              <td className="p-4">
                {customer.phone || "-"}
              </td>

              <td className="p-4">
                {customer.totalVisits}
              </td>

              <td className="p-4">
                ₹{customer.totalSpent}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}