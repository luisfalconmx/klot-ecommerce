"use client";

import { useState, useEffect } from "react";
import IconFav from "@/assets/icons/icon-fav.svg";
import IconFavActive from "@/assets/icons/icon-fav-active.svg";
import Image from "next/image";
import { useWishlistStore } from "@/stores/useWishlistStore";
import type { WishlistProps } from "./Wishlist.d";

export const Wishlist = (props: WishlistProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { addProduct, deleteProduct, products } = useWishlistStore();

  const handleToggle = () => {
    if (!isActive) {
      setIsActive(true);
      addProduct({ ...props });
    } else {
      setIsActive(false);
      deleteProduct(props.merchandiseId);
    }
  };

  useEffect(() => {
    const isFav = products.find((i) => i.merchandiseId === props.merchandiseId);
    if (isFav) {
      setIsActive(true);
    }
  }, [products, props.merchandiseId]);

  return (
    <button
      className="absolute top-0 right-0 z-10 p-1 m-1 rounded-full bg-[#e3e3e3]"
      onClick={handleToggle}
    >
      {isActive ? (
        <Image src={IconFavActive} width={24} height={24} alt="" />
      ) : (
        <Image src={IconFav} width={24} height={24} alt="" />
      )}
    </button>
  );
};
