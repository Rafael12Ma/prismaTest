import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <div>
        <nav className="flex gap-10 bg-green-800">
          <Link href="prism">Prism</Link>
          <Link href="betterauth">betterAuth</Link>
          <Link href="login">login</Link>
        </nav>
      </div>
    </>
  );
}
