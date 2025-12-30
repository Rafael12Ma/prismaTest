// hooks/useSession.ts
"use client";

import { useEffect, useState } from "react";

export function useSession() {
    const [loading, setLoading] = useState(true);

    async function fetchSession() {
        const res = await fetch("/api/auth/get-session");
        if (!res.ok) {
            setLoading(false);
            return;
        }
        const data = await res.json();
        setLoading(false);
    }

    // re-check periodically in case user is idle
    useEffect(() => {
        fetchSession();
        const interval = setInterval(fetchSession, 30 * 1000); // every 30s
        return () => clearInterval(interval);
    }, []);

    return { loading };
}
