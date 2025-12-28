"use client";

import { authClient } from "@/lib/auth-client";

export default function LoginForm() {
  async function handleGithubSignIn() {
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/prism",
    });
  }

  async function handleGoogleSignIn() {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/betterauth",
    });
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>log in</h1>
        <hr />
        <br />
        <div className="gap-10 flex flex-col">
          <button
            className="bg-green-500 cursor-pointer rounded-2xl p-1"
            onClick={handleGoogleSignIn}
          >
            Log in with google
          </button>
          <button
            className="bg-purple-500 cursor-pointer rounded-2xl p-1"
            onClick={handleGithubSignIn}
          >
            Log in with github
          </button>
        </div>
      </div>
    </>
  );
}
