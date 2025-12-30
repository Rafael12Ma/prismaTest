import { getPost, getPosts } from "@/actions/indx";
import Form from "@/components/prismComp/formClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function PrismaPage() {
  const posts = await getPosts();
  const initialState = { message: "" };
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <h2>Add a post</h2>
        <Form posts={posts} initialState={initialState} />
      </div>
    </>
  );
}
