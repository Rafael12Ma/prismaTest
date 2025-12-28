import { createAuthClient } from 'better-auth/react'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "/api"

export const authClient = createAuthClient({
    baseURL
})