import { getPost, getPosts } from "@/actions/indx";
import Form from "@/components/prismComp/formClient";

export default async function PrismaPage() {
  const posts = await getPosts();
  const initialState = { message: "" };
  return (
    <>
      <h2>Add a post</h2>
      <Form posts={posts} initialState={initialState} />
    </>
  );
}
