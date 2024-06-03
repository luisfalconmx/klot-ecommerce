"use server";

import { getClient } from "@/clients/storefrontClient";
import {
  CustomerCreateMutation,
  CustomerCreateMutationVariables,
  CustomerCreateDocument,
} from "@/generated/storefront.schema";

interface AcceptedValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  acceptsMarketing: boolean;
}

export const createCustomer = async (values: AcceptedValues) => {
  try {
    const client = getClient();

    const response = await client.mutate<
      CustomerCreateMutation,
      CustomerCreateMutationVariables
    >({
      mutation: CustomerCreateDocument,
      variables: {
        input: {
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          phone: `+52${values.phone}`,
          acceptsMarketing: values.acceptsMarketing,
        },
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
