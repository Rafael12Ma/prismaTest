import { createPost, getPosts, seedDb } from "@/actions/indx";
import PostList from "@/components/prismComp/PostList";

export default async function PrismaPage() {
  const posts = await getPosts();

  return (
    <>
      <h2>Add a post</h2>
      <form action={createPost}>
        <input placeholder="Enter email" type="text" name="email" />
        <input placeholder="Enter password" type="text" name="password" />
        <button type="submit">Create Post</button>
      </form>
      <hr />
      <PostList posts={posts} />
    </>
  );
}
