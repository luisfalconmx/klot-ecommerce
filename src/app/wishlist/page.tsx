"use client";

import { ProductCard } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { useWishlistStore } from "@/stores/useWishlistStore";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import HeartIllustration from "@/assets/images/heart-illustration.svg";

export default function WishListPage() {
  const { products } = useWishlistStore();

  return (
    <main className="mt-12 mb-24 max-w-screen-xl lg:mx-auto">
      <section className="grid grid-cols-[48px_1fr_48px] items-center mx-6 mb-8 lg:mb-16">
        <Link
          href="/"
          className="p-3 bg-pearl rounded-full cursor-pointer block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>
        <h1 className="block text-center text-2xl text-primary-100 font-bold">
          Wishlist
        </h1>
      </section>
      {products.length <= 0 && (
        <section className="flex flex-col items-center">
          <Image
            src={HeartIllustration}
            alt=""
            width={100}
            height={100}
            className="mb-7"
          />
          <p className="text-2xl font-bold mb-7 text-center">
            Your Wishlist is Empty
          </p>

          <Link
            href="/categories"
            className="bg-primary text-white py-4 px-6 rounded-full cursor-pointer"
          >
            Explore Categories
          </Link>
        </section>
      )}
      {products.length > 0 && (
        <section className="max-w-screen-md lg:mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 mx-6">
          {products.map((i) => (
            <ProductCard
              key={i.merchandiseId}
              name={i.name}
              price={i.price}
              image={i.image}
              link={i.link}
              merchandiseId={i.merchandiseId}
            />
          ))}
        </section>
      )}
    </main>
  );
}
