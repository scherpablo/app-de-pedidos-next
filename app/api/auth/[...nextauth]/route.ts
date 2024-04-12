import { User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProviders from "next-auth/providers/credentials";
import { prisma } from "@/src/lib/prisma";

const authOptions = {
  providers: [
    CredentialsProviders({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const userFound = await prisma.user.findUnique({
            where: {
                username: credentials?.username
            }
        })
        if(!userFound) return null
        console.log(userFound)

        return {
            id: userFound.id.toString(),
            username: userFound.username,
        } as User;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
