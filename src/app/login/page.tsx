import { loginUser } from "./actions";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        action={loginUser}
        className="w-full max-w-md bg-[#252320] p-8 rounded-xl space-y-4"
      >
        <h1 className="text-3xl font-bold">
          Login
        </h1>

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
          Login
        </button>
      </form>
    </main>
  );
}