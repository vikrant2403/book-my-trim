import { deleteQueue } from "./delete";
import { resetQueue } from "./reset";
import { updateQueueStatus } from "./status";
import Link from "next/link";
import { prisma } from "../../../lib/prisma";

export default async function QueuePage() {
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

  const waitingCount = queue.filter(
    (item) => item.status === "WAITING"
  ).length;

  const inProgressCount = queue.filter(
    (item) => item.status === "IN_PROGRESS"
  ).length;

  const completedCount = queue.filter(
    (item) => item.status === "COMPLETED"
  ).length;

  const nowServing =
    queue.find(
      (item) => item.status === "IN_PROGRESS"
    ) || null;

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-8">
       <h1 className="text-4xl font-bold">
          Live Queue
       </h1>

        <div className="flex gap-3">

          <Link
            href="/dashboard/queue/new"
            className="bg-[#B23A2E] px-5 py-3 rounded"
          >
            Add Customer To Queue
          </Link>

          <form action={resetQueue}>
            <button
              type="submit"
              className="bg-red-700 px-5 py-3 rounded hover:bg-red-800"
            >
              Reset Queue
            </button>
          </form>

        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <div className="bg-[#252320] p-6 rounded-xl">
          <p className="text-gray-400">
            Now Serving
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {nowServing
              ? `#${nowServing.tokenNumber}`
              : "-"}
          </h2>
        </div>

        <div className="bg-[#252320] p-6 rounded-xl">
          <p className="text-gray-400">
            Waiting
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {waitingCount}
          </h2>
        </div>

        <div className="bg-[#252320] p-6 rounded-xl">
          <p className="text-gray-400">
            In Progress
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {inProgressCount}
          </h2>
        </div>

        <div className="bg-[#252320] p-6 rounded-xl">
          <p className="text-gray-400">
            Completed
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {completedCount}
          </h2>
        </div>

      </div>

      <table className="w-full bg-[#252320] rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="p-4">Token</th>
            <th className="p-4">Customer</th>
            <th className="p-4">Barber</th>
            <th className="p-4">Service</th>
            <th className="p-4">Wait Time</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {queue.map((item) => {
            let waitTime = 0;

            const sameBarberQueue = queue.filter(
              (q) =>
                q.barberId === item.barberId &&
                q.tokenNumber < item.tokenNumber &&
                q.status !== "COMPLETED"
            );

            sameBarberQueue.forEach((q) => {
              waitTime += q.service.duration;
            });

            return (
              <tr
                key={item.id}
                className="border-t border-gray-700"
              >
                <td className="p-4">
                  #{item.tokenNumber}
                </td>

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
                  {item.status === "COMPLETED"
                    ? "-"
                    : `${waitTime} mins`}
                </td>

                <td className="p-4">
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

                <td className="p-4">
                  <div className="flex gap-2">

                    <form
                      action={async () => {
                        "use server";
                        await updateQueueStatus(
                          item.id,
                          "IN_PROGRESS"
                        );
                      }}
                    >
                      <button
                        type="submit"
                        className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Start
                      </button>
                    </form>

                    <form
                      action={async () => {
                        "use server";
                        await updateQueueStatus(
                          item.id,
                          "COMPLETED"
                        );
                      }}
                    >
                      <button
                        type="submit"
                        className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
                      >
                        Complete
                      </button>
                    </form>
                    <form
                      action = {async () => {
                        "use server";
                        await deleteQueue(item.id);
                      }}
                    >
                      <button
                        type = "submit"
                        className = "bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete 
                      </button>
                    </form>
                    

                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}