import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col m-30 justify-center gap-10  items-center">
        <h1 className="bg-white font-bold p-2 rounded-xl font-mono text-2xl">
          Auth page
        </h1>
        <Link href="/betterauth">GO to betterAuth page</Link>
        <Link href="/login">GO to Loginn</Link>
      </div>
    </>
  );
}
