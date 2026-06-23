export default function QueuePage() {
  return (
    <main className="min-h-screen bg-[#1C1B19] text-[#F2EBDD] p-8">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold mb-8 text-center">
          Live Queue
        </h1>

        <div className="bg-[#252320] rounded-xl p-6 mb-6">
          <h2 className="text-xl mb-2">
            Current Token
          </h2>

          <p className="text-5xl font-bold text-[#C8A24A]">
            #18
          </p>
        </div>

        <div className="bg-[#252320] rounded-xl p-6 mb-6">
          <h2 className="text-xl mb-2">
            Your Token
          </h2>

          <p className="text-5xl font-bold text-[#B23A2E]">
            #22
          </p>
        </div>

        <div className="bg-[#252320] rounded-xl p-6">
          <p className="text-lg">
            Customers Ahead: 4
          </p>

          <p className="text-lg mt-2">
            Estimated Wait: 20 Minutes
          </p>
        </div>

      </div>
    </main>
  );
}