"use client";

import { getPost } from "@/actions/indx";
import { useActionState } from "react";

export default function GetOnePost() {
  const [state, formAction] = useActionState(getPost, { message: "" });
  return (
    <>
      <form action={formAction}>
        <input placeholder="Enter find email" type="text" name="one" />
        <button type="submit">Find</button>
      </form>
      {state.message && <p>{state.message}</p>}
      {state.success && state.post && (
        <div>
          <p>Email={state.post.email}</p>
          <p>password:{state.post.password || "no password"}</p>
        </div>
      )}
    </>
  );
}
