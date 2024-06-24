import { AUTH_URLS } from "@/constants/urls/auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
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
    jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};

export default NextAuth(authOptions);
