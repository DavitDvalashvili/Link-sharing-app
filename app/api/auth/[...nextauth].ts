import NextAuth, {
  NextAuthOptions,
  User as NextAuthUser,
  Account,
  Profile,
} from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/Models/users.model";
import connectDB from "@/config/db";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<NextAuthUser | null> {
        if (!credentials) return null;
        const { email, password } = credentials;

        await connectDB();
        try {
          const user = await User.findOne({ email });
          if (user && (await bcrypt.compare(password, user.password))) {
            return user as NextAuthUser;
          }
        } catch (error) {
          console.error(error);
          throw new Error("Authorization error");
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: NextAuthUser | AdapterUser;
      account: Account | null;
    }): Promise<boolean> {
      if (account?.provider === "credentials") {
        return true;
      }
      return false;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
