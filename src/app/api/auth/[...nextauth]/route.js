import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { customerAccessCreateToken, customer } from "@/services/storefront";

const authOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const response = await customerAccessCreateToken({ email, password });

        if (response?.data?.customerAccessTokenCreate?.customerAccessToken) {
          const customerInfo = await customer({
            token:
              response.data.customerAccessTokenCreate.customerAccessToken
                .accessToken,
          });

          if (customerInfo.data.customer.id) {
            return {
              id: customerInfo.data.customer.id,
              name: `${customerInfo.data.customer.firstName} ${customerInfo.data.customer.lastName}`,
              email: customerInfo.data.customer.email,
              // generate a random image for the user from the name
              image: `https://eu.ui-avatars.com/api/?name=${customerInfo.data.customer.firstName}+${customerInfo.data.customer.lastName}`,
            };
          }

          return null;
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
