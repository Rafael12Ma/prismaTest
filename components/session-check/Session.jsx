"use client";

import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/useSession";
import { authClient } from "@/lib/auth-client";

export default function Session() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const { loading } = useSession();

  if (loading) return <p>Loading...</p>;

  if (!session) {
    // UI shown when session expired
    return (
      <div className="p-6 space-y-4">
        <h1>Your session has expired</h1>
        <p>Please sign in again to continue.</p>
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Sign in
        </button>
      </div>
    );
  }
  return (
    <>
      {" "}
      <div>
        <h1>Welcome back, {session.user?.name}</h1>
      </div>
    </>
  );
}
