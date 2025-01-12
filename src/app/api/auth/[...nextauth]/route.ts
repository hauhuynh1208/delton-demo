// /app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with your Prisma or database logic
        if (
          credentials?.email === "user@example.com" &&
          credentials.password === "password123"
        ) {
          return { id: "1", name: "John Doe", email: "user@example.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom login page path
  },
  secret: process.env.NEXTAUTH_SECRET, // Set this in your .env.local file
});

export { handler as GET, handler as POST };
