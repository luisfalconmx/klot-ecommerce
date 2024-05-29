import { CodegenConfig } from "@graphql-codegen/cli";
import {
  SHOPIFY_GRAPHQL_ENDPOINT,
  SHOPIFY_GRAPHQL_ACCESS_TOKEN,
  SHOPIFY_STOREFRONT_ENDPOINT,
  SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN,
} from "../config/env";

const config: CodegenConfig = {
  generates: {
    "./src/generated/shopify.schema.ts": {
      schema: {
        [`${SHOPIFY_GRAPHQL_ENDPOINT}`]: {
          headers: {
            "X-Shopify-Access-Token": SHOPIFY_GRAPHQL_ACCESS_TOKEN,
            "Content-Type": "application/json",
          },
        },
      },
      documents: ["src/services/admin/**/*.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./src/generated/storefront.schema.ts": {
      schema: {
        [`${SHOPIFY_STOREFRONT_ENDPOINT}`]: {
          headers: {
            "Shopify-Storefront-Private-Token":
              SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN,
            "Content-Type": "application/json",
          },
        },
      },
      documents: ["src/services/storefront/**/*.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
