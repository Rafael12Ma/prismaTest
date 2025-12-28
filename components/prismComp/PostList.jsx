"use client";

import { DeletePost } from "@/actions/indx";
import { useActionState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function PostList({ posts }) {
  const [state, formAction] = useActionState(DeletePost, { message: "" });
  return (
    <>
      <ul>
        {posts?.length > 0 &&
          posts.map((p) => (
            <li className="flex gap-10" key={p.id}>
              <p>{p.email}</p>
              {/* <p>{p.password}</p> s*/}
              <form action={formAction}>
                <input name="id" value={p.id} type="hidden" />
                <button className="bg-white text-red-500 cursor-pointer">
                  Delete
                </button>
              </form>
            </li>
          ))}
      </ul>
      {state.type === "delete" && toast(state.message)}
      <Toaster />
    </>
  );
}
