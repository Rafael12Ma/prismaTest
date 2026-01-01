"use client";

import { authClient } from "@/lib/auth-client";

export function getName() {
  const { data: session } = authClient.useSession();
  const name = session.user.name;
  return name;
}
