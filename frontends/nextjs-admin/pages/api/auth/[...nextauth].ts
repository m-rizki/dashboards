import { AUTH_URLS } from "@/constants/urls/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(AUTH_URLS.LOGIN.endpoint, {
            method: AUTH_URLS.LOGIN.method,
            body: JSON.stringify({
              ...credentials,
              expiresInMins: 60,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
            // Optionally, you can throw an error with a custom message
            throw new Error(`Login failed: ${res.status} ${res.statusText}`);
          }

          const user = await res.json();

          if (!user) {
            throw new Error("No user data returned");
          }

          return user;
        } catch (error) {
          console.error("Error in authorize:", error);
          throw new Error(
            "Login failed. Please check your credentials and try again."
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signIn",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
});
