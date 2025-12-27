import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

export const authConfig = {
    providers: [Google],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnLoginPage = nextUrl.pathname.startsWith("/login")

            // Allow access to public assets
            if (nextUrl.pathname.startsWith('/api') ||
                nextUrl.pathname.startsWith('/_next') ||
                nextUrl.pathname.includes('.')) {
                return true
            }

            if (isLoggedIn && isOnLoginPage) {
                return Response.redirect(new URL("/onboarding", nextUrl))
            }

            if (!isLoggedIn && !isOnLoginPage) {
                return false // Redirect to login
            }
            return true
        },
        session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }
            return session
        }
    },
    session: {
        strategy: "jwt"
    }
} satisfies NextAuthConfig
