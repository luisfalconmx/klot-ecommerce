import {
  GetProductBySlugQuery,
  GetProductBySlugQueryVariables,
  GetProductBySlugDocument,
} from "@/generated/shopify.schema";
import { getClient } from "@/clients/graphqlClient";

export const getProductBySlug = async (slug: string) => {
  try {
    const client = getClient();
    const response = await client.query<
      GetProductBySlugQuery,
      GetProductBySlugQueryVariables
    >({
      query: GetProductBySlugDocument,
      variables: {
        slug,
      },
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
