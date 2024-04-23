import { CodegenConfig } from "@graphql-codegen/cli";
import { SHOPIFY_STOREFRONT_ACCESS_TOKEN } from "../config/env";

const config: CodegenConfig = {
  generates: {
    "./src/generated/shopify.schema.ts": {
      schema: {
        "https://monito-pets-store.myshopify.com/admin/api/2024-04/graphql.json":
          {
            headers: {
              "X-Shopify-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
              "Content-Type": "application/json",
            },
          },
      },
      documents: ["src/services/shopify/**/*.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
