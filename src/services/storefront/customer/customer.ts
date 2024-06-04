"use server";

import { getClient } from "@/clients/storefrontClient";
import {
  CustomerQuery,
  CustomerQueryVariables,
  CustomerDocument,
} from "@/generated/storefront.schema";

interface AcceptedValues {
  token: string;
}

export const customer = async (values: AcceptedValues) => {
  try {
    const client = await getClient();

    const response = await client.query<CustomerQuery, CustomerQueryVariables>({
      query: CustomerDocument,
      variables: {
        customerAccessToken: values.token,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
