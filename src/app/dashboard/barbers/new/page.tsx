import { createBarber } from "../actions";

export default function NewBarberPage() {
  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Add Barber
      </h1>

      <form action={createBarber} className="max-w-xl space-y-6">

        <div>
          <label>Name</label>

          <input
            name="name"
            required
            className="w-full p-3 mt-2 rounded bg-[#252320]"
          />
        </div>

        <div>
          <label>Phone</label>

          <input
            name="phone"
            required
            className="w-full p-3 mt-2 rounded bg-[#252320]"
          />
        </div>

        <div>
          <label>Experience (Years)</label>

          <input
            name="experience"
            type="number"
            required
            className="w-full p-3 mt-2 rounded bg-[#252320]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#B23A2E] px-6 py-3 rounded"
        >
          Save Barber
        </button>

      </form>

    </main>
  );
}