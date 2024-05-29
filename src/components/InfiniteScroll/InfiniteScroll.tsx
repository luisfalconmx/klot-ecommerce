"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { getProductsByTag, getProductsByCollection } from "@/services/admin";
import { ProductCard } from "@/components";

interface InfiniteScrollProps {
  handle: "tag" | "collection" | "search";
  slug?: string;
  hasNextPage: boolean;
  lastCursor: string | undefined;
  maxProducts: number;
}

export const InfiniteScroll = ({
  handle,
  slug,
  hasNextPage,
  lastCursor,
  maxProducts,
}: InfiniteScrollProps) => {
  const [nextPage, setNextPage] = useState<boolean>(hasNextPage || false);
  const [lastIndex, setLastIndex] = useState<string | undefined>(
    lastCursor || undefined
  );
  const [products, setProducts] = useState<any[]>([]);
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const loadMore = async () => {
    let newData;

    if (handle === "tag") {
      newData = await getProductsByTag(slug || "", maxProducts, lastIndex);
      const products = newData?.products.nodes.map((i) => i) || [];

      if (newData?.products.pageInfo.endCursor) {
        setLastIndex(newData?.products.pageInfo.endCursor);
      }

      if (newData?.products.pageInfo.hasNextPage) {
        setNextPage(true);
      } else {
        setNextPage(false);
      }

      newData = products;
    }

    if (handle === "collection") {
      newData = await getProductsByCollection(
        slug || "",
        maxProducts,
        lastIndex
      );
      const products =
        newData?.collectionByHandle?.products?.nodes.map((i) => i) || [];

      if (newData?.collectionByHandle?.products.pageInfo.endCursor) {
        setLastIndex(newData?.collectionByHandle?.products.pageInfo.endCursor);
      }

      if (newData?.collectionByHandle?.products.pageInfo.hasNextPage) {
        setNextPage(true);
      } else {
        setNextPage(false);
      }

      newData = products;
    }

    setProducts((prev) => [...prev, ...products]);
  };

  useEffect(() => {
    if (entry && entry.isIntersecting && nextPage) {
      loadMore();
    }
  }, [entry]);

  return (
    <>
      {products.map((i) => (
        <ProductCard
          key={i.title}
          name={i.title}
          price={i.priceRangeV2.minVariantPrice.amount}
          image={i.featuredImage?.url}
          link={`/products/${i.handle}`}
          merchandiseId={i.id}
        />
      ))}
      <div
        className="flex w-full justify-center items-center my-4 absolute -bottom-20 left-0 right-0 m-auto"
        ref={ref}
      >
        {entry?.isIntersecting && nextPage && (
          <div className="w-6 h-6 block border-t-2 border-b-2 border-primary rounded-full animate-spin"></div>
        )}
      </div>
    </>
  );
};
