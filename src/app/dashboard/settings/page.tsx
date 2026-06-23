export default function SettingsPage() {
  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Shop Settings
      </h1>

      <div className="bg-[#252320] rounded-xl p-6">

        <div className="mb-6">
          <label>Shop Name</label>

          <input
            className="w-full mt-2 p-3 rounded bg-[#1C1B19]"
            defaultValue="Book My Trim Demo"
          />
        </div>

        <div className="mb-6">
          <label>Phone</label>

          <input
            className="w-full mt-2 p-3 rounded bg-[#1C1B19]"
            defaultValue="9876543210"
          />
        </div>

        <button className="bg-[#B23A2E] px-5 py-3 rounded">
          Save Changes
        </button>

      </div>

    </main>
  );
}