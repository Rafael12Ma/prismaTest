"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <>
      <div>
        <nav className=" p-3 rounded-xl m-2 justify-center items-center flex gap-10 bg-green-800 font-semibold text-2xl">
          <Link
            className={path === "/prism" ? "text-yellow-400" : undefined}
            href="prism"
          >
            Prism
          </Link>
          <Link
            className={path === "/betterauth" ? "text-yellow-500" : undefined}
            href="betterauth"
          >
            BetterAuth
          </Link>
          <Link
            className={path === "/login" ? "text-yellow-500" : undefined}
            href="login"
          >
            Login
          </Link>
        </nav>
      </div>
    </>
  );
}
