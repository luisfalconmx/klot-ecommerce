import {
  SearchProductsQuery,
  SearchProductsQueryVariables,
  SearchProductsDocument,
} from "@/generated/shopify.schema";
import { getClient } from "@/clients/graphqlClient";

export const searchProducts = async (value: string) => {
  try {
    const client = getClient();
    const response = await client.query<
      SearchProductsQuery,
      SearchProductsQueryVariables
    >({
      query: SearchProductsDocument,
      variables: {
        searchTerm: `title:${value}*`,
      },
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
