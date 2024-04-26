import { CodegenConfig } from "@graphql-codegen/cli";
import {
  SHOPIFY_GRAPHQL_ENDPOINT,
  SHOPIFY_STOREFRONT_ACCESS_TOKEN,
} from "../config/env";

const config: CodegenConfig = {
  generates: {
    "./src/generated/shopify.schema.ts": {
      schema: {
        [`${SHOPIFY_GRAPHQL_ENDPOINT}`]: {
          headers: {
            "X-Shopify-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
            "Content-Type": "application/json",
          },
        },
      },
      documents: ["src/services/**/*.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
