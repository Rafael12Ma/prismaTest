import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./db.js";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
  trustedOrigins: [
    process.env.NEXT_PUBLIC_BASE_URL,
    process.env.NEXT_PUBLIC_BASE_URL?.replace("https://", "http://")
  ],
  session: {
    expiresIn: 5*60,
    updateAge: 0,
    cookieCache: {
      enabled: true,
      maxAge: 10*60
    }
  },
  advanced: {
    cookiePrefix: "myapp",
    useSecureCookies: process.env.NODE_ENV === 'production',
    cookies: {
      session_token: {
        name: "myapp_session_token",
        attributes: {
          sameSite: "lax"
        }
      }
    }
  },
  plugins: [nextCookies()]
});


