import {
  GetCollectionsQuery,
  GetCollectionsQueryVariables,
  GetCollectionsDocument,
} from "@/generated/shopify.schema";
import { getClient } from "@/clients/graphqlClient";

export const getCollections = async () => {
  try {
    const client = getClient();
    const response = await client.query<
      GetCollectionsQuery,
      GetCollectionsQueryVariables
    >({
      query: GetCollectionsDocument,
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
