export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1C1B19] text-[#F2EBDD]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Skip The Waiting.
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join the queue online, track your turn live and arrive exactly when
          it's your time.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="bg-[#B23A2E] px-6 py-3 rounded-lg font-semibold">
            Join Queue
          </button>

          <button className="border border-[#C8A24A] px-6 py-3 rounded-lg">
            For Barbers
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#252320] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              1. Join Queue
            </h3>

            <p>
              Walk-in customers, phone bookings and online bookings all enter
              the same live queue.
            </p>
          </div>

          <div className="bg-[#252320] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              2. Track Live
            </h3>

            <p>
              Check your token position and estimated wait time in real-time.
            </p>
          </div>

          <div className="bg-[#252320] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              3. Arrive On Time
            </h3>

            <p>
              No more sitting in crowded waiting areas. Arrive when your turn
              is near.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-700">
        <p>© 2026 Book My Trim</p>
      </footer>
    </main>
  );
}