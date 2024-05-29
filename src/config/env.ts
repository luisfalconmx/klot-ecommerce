import "dotenv/config"; // needed for some files to use process.env

const registerEnv = (value: string) => {
  return process.env[value] || "";
};

export const SHOPIFY_STORE_DOMAIN = registerEnv("SHOPIFY_STORE_DOMAIN");

export const SHOPIFY_GRAPHQL_ENDPOINT = registerEnv("SHOPIFY_GRAPHQL_ENDPOINT");

export const SHOPIFY_GRAPHQL_ACCESS_TOKEN = registerEnv(
  "SHOPIFY_GRAPHQL_ACCESS_TOKEN"
);

export const SHOPIFY_STOREFRONT_ENDPOINT = registerEnv(
  "SHOPIFY_STOREFRONT_ENDPOINT"
);

export const SHOPIFY_STOREFRONT_ACCESS_TOKEN = registerEnv(
  "SHOPIFY_STOREFRONT_ACCESS_TOKEN"
);

export const SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN = registerEnv(
  "SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN"
);
