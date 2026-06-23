import { createService } from "../actions";

export default function NewServicePage() {
  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Add Service
      </h1>

      <form action={createService} className="max-w-xl space-y-6">

        <div>
          <label>Service Name</label>

          <input
            name="name"
            className="w-full p-3 mt-2 rounded bg-[#252320]"
            placeholder="Haircut"
            required
          />
        </div>

        <div>
          <label>Price</label>

          <input
            name="price"
            type="number"
            className="w-full p-3 mt-2 rounded bg-[#252320]"
            placeholder="150"
            required
          />
        </div>

        <div>
          <label>Duration</label>

          <input
            name="duration"
            type="number"
            className="w-full p-3 mt-2 rounded bg-[#252320]"
            placeholder="30"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#B23A2E] px-6 py-3 rounded"
        >
          Save Service
        </button>

      </form>

    </main>
  );
}