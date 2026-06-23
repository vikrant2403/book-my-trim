import { createCustomer } from "../actions";

export default function NewCustomerPage() {
  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Add Customer
      </h1>

      <form action={createCustomer} className="max-w-xl space-y-6">

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
            className="w-full p-3 mt-2 rounded bg-[#252320]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#B23A2E] px-6 py-3 rounded"
        >
          Save Customer
        </button>

      </form>

    </main>
  );
}