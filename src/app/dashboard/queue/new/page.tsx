export const dynamic = "force-dynamic";
import { prisma } from "../../../../lib/prisma";
import { createQueue } from "../actions";


export default async function NewQueuePage() {
  const barbers = await prisma.barber.findMany();
  const services = await prisma.service.findMany();

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Add Walk-In Customer
      </h1>

      <form
        action={createQueue}
        className="max-w-xl space-y-6"
      >
        <div>
          <label>Customer Name</label>

          <input
            name="customerName"
            required
            placeholder="Rahul"
            className="w-full p-3 mt-2 rounded bg-[#252320]"
          />
        </div>

        <div>
          <label>Phone Number (Optional)</label>

          <input
            name="phone"
            placeholder="9876543210"
            className="w-full p-3 mt-2 rounded bg-[#252320]"
          />
        </div>

        <div>
          <label>Barber</label>

          <select
            name="barberId"
            required
            className="w-full p-3 mt-2 rounded bg-[#252320]"
          >
            <option value="">Select Barber</option>

            {barbers.map((barber) => (
              <option
                key={barber.id}
                value={barber.id}
              >
                {barber.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Service</label>

          <select
            name="serviceId"
            required
            className="w-full p-3 mt-2 rounded bg-[#252320]"
          >
            <option value="">Select Service</option>

            {services.map((service) => (
              <option
                key={service.id}
                value={service.id}
              >
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-[#B23A2E] px-6 py-3 rounded"
        >
          Generate Token
        </button>
      </form>
    </main>
  );
}