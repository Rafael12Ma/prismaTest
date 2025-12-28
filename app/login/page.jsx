import LoginForm from "@/components/loginform/Login";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      {session ? (
        <p>Already logged in as {session.user.name}</p>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
