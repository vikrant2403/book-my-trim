import { registerUser } from "./actions";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        action={registerUser}
        className="w-full max-w-md bg-[#252320] p-8 rounded-xl space-y-4"
      >
        <h1 className="text-3xl font-bold">
          Register
        </h1>

        <input
          name="name"
          placeholder="Name"
          required
          className="w-full p-3 rounded bg-[#1E1C19]"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 rounded bg-[#1E1C19]"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 rounded bg-[#1E1C19]"
        />

        <button
          type="submit"
          className="w-full bg-[#B23A2E] p-3 rounded"
        >
          Register
        </button>
      </form>
    </main>
  );
}