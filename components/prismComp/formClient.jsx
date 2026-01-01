"use client";

import { useActionState } from "react";
import PostList from "./PostList";
import { createPost } from "@/actions/indx";
import GetOnePost from "./GetOnePost";
import { authClient } from "@/lib/auth-client";

export default function Form({ posts, initialState }) {
  const [state, formAction] = useActionState(createPost, initialState);
  const { data: session } = authClient.useSession();

  if (!session || !session.user) {
    return <p>Loading session...</p>;
  }

  const name = session.user.email;
  return (
    <>
      <form action={formAction}>
        <input placeholder="Enter email" type="text" name="email" required />
        <input placeholder="Enter password" type="text" name="password" />
        <input
          placeholder="..."
          type="text"
          name="name"
          value={name}
          hidden={true}
        />
        <button type="submit">Create Post</button>
      </form>
      {!state.success && <p style={{ color: "red" }}>{state.message}</p>}
      {state.type === "delete" && (
        <p className="text-green-600">{state.message}</p>
      )}
      <hr />
      <PostList posts={posts} />
      <hr />
      <hr />
      <hr />
      <hr />
      {/* <GetOnePost /> */}
    </>
  );
}
