"use server";

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

    return response;
  } catch (error) {
    console.log(error);
  }
};
