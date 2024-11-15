import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  id: string;
  name: string;
  email: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          return null; // If no credentials provided, return null
        }
        // Basic user check (replace this with your actual user check logic)
        const { email, password } = credentials!;

        // Here, just checking if email and password are correct
        if (email === "user@example.com" && password === "password123") {
          // Return a user object if credentials are valid
          return { id: "1", name: "John Doe", email: "user@example.com" };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  // pages: {
  //   signIn: "/login", // Redirect users to login if they are not authenticated
  // },
  session: {
    strategy: "jwt",
  },
});
