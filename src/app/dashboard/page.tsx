import { prisma } from "../../lib/prisma";

export default async function DashboardPage() {
  const totalCustomers = await prisma.customer.count();

  const totalBarbers = await prisma.barber.count();

  const totalServices = await prisma.service.count();

  const waitingCustomers = await prisma.queue.count({
    where: {
      status: "WAITING",
    },
  });

  const completedQueues = await prisma.queue.findMany({
    where: {
      status: "COMPLETED",
    },
    include: {
      service: true,
    },
  });

  const revenueToday = completedQueues.reduce(
    (total, queue) => total + queue.service.price,
    0
  );

  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-5 gap-4">

        <div className="bg-[#252320] p-6 rounded-xl">
          <p className="text-gray-400">
            Revenue Today
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ₹{revenueToday}
          </h2>
        </div>

        <div className="bg-[#252320] p-6 rounded-xl">
          <p className="text-gray-400">
            Customers
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {totalCustomers}
          </h2>
        </div>

        <div className="bg-[#252320] p-6 rounded-xl">
          <p className="text-gray-400">
            Barbers
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {totalBarbers}
          </h2>
        </div>

        <div className="bg-[#252320] p-6 rounded-xl">
          <p className="text-gray-400">
            Services
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {totalServices}
          </h2>
        </div>

        <div className="bg-[#252320] p-6 rounded-xl">
          <p className="text-gray-400">
            Waiting Queue
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {waitingCustomers}
          </h2>
        </div>

      </div>

    </main>
  );
}