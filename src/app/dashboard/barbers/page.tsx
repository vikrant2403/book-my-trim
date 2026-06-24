import Link from "next/link";
import { prisma } from "../../../lib/prisma";
export const dynamic = "force-dynamic";

export default async function BarbersPage() {
  const barbers = await prisma.barber.findMany();

  return (
    <main className="p-8">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Manage Barbers
        </h1>

        <Link
          href="/dashboard/barbers/new"
          className="bg-[#B23A2E] px-5 py-3 rounded-lg"
        >
          Add Barber
        </Link>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {barbers.map((barber) => (
          <div
            key={barber.id}
            className="bg-[#252320] rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold">
              {barber.name}
            </h2>

            <p className="mt-2">
              {barber.phone}
            </p>

            <p>
              {barber.experience} Years Experience
            </p>

            <p className="text-green-400 mt-2">
              {barber.status}
            </p>
          </div>
        ))}

      </div>

    </main>
  );
}