import { prisma } from "../../../lib/prisma";
export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const services = await prisma.service.findMany();

  return (
    <main className="p-8">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">
          Manage Services
        </h1>
        <a
          href="/dashboard/services/new"
          className="bg-[#B23A2E] px-5 py-3 rounded-lg"
        >
          Add Service
        </a>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full bg-[#252320] rounded-xl overflow-hidden">

          <thead className="bg-[#2F2C28]">
            <tr>
              <th className="text-left p-4">Service</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Duration</th>
            </tr>
          </thead>

          <tbody>

            {services.map((service) => (
              <tr
                key={service.id}
                className="border-b border-gray-700"
              >
                <td className="p-4">
                  {service.name}
                </td>

                <td className="p-4">
                  ₹{service.price}
                </td>

                <td className="p-4">
                  {service.duration} mins
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}