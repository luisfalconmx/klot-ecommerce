"use server";

// import { cookies } from "next/headers";
import { getClient } from "@/clients/storefrontClient";
import {
  CustomerAccessCreateTokenMutation,
  CustomerAccessCreateTokenMutationVariables,
  CustomerAccessCreateTokenDocument,
} from "@/generated/storefront.schema";

interface AcceptedValues {
  email: string;
  password: string;
}

export const customerAccessCreateToken = async (values: AcceptedValues) => {
  try {
    const client = await getClient();
    // const cookieStore = await cookies();

    const response = await client.mutate<
      CustomerAccessCreateTokenMutation,
      CustomerAccessCreateTokenMutationVariables
    >({
      mutation: CustomerAccessCreateTokenDocument,
      variables: {
        email: values.email,
        password: values.password,
      },
    });

    const accessToken =
      response.data?.customerAccessTokenCreate?.customerAccessToken
        ?.accessToken;
    const expiresAt =
      response.data?.customerAccessTokenCreate?.customerAccessToken?.expiresAt;

    // if (accessToken) {
    //   cookieStore.set("accessToken", accessToken, {
    //     path: "/",
    //     expires: expiresAt,
    //     httpOnly: true,
    //     sameSite: "strict",
    //   });
    // }

    return response;
  } catch (error) {
    console.log(error);
  }
};
