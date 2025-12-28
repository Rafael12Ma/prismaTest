"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function BetterAuth() {
  const { data: session } = authClient.useSession();

  const router = useRouter();
  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className="text-center m-10">better AUth page</h1>
      <p>Logged in as {session.user.name}</p>
      <button
        className="cursor-pointer bg-yellow-400 p-1 m-20"
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => router.push("/login"),
            },
          })
        }
      >
        Log out
      </button>
    </>
  );
}
