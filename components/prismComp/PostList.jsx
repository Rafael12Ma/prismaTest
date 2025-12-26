export default function PostList({ posts }) {
  return (
    <>
      <ul>
        {posts?.length > 0 &&
          posts.map((p) => (
            <li key={p.id}>
              <p>{p.email}</p>
              {/* <p>{p.password}</p> */}
            </li>
          ))}
      </ul>
    </>
  );
}
